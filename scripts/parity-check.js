/*
 * Parity check for the Twilight redesign (docs/redesign/TICKETS.md, T-20).
 *
 * Renders every route under the classic theme (ivory) and under Twilight, then reports anything
 * the classic page has that the Twilight page lacks:
 *   - links (same href, same target and rel for external links)
 *   - text (every text line, ignoring case and spacing)
 *   - content images
 *   - the document title and the page_view analytics event
 *   - the contact form's action, method and field names
 * Differences that are deliberate go in scripts/parity.allow.json, each with a reason.
 *
 * Usage (start the app first: `npm start`, or serve a build):
 *   npm run parity                       checks http://localhost:3111
 *   BASE_URL=http://localhost:4173 npm run parity
 *   CHROME_PATH=/path/to/chrome npm run parity     (default: the installed Google Chrome)
 *
 * Analytics hosts are blocked while it runs, so no test traffic reaches Google Analytics.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

const BASE = (process.env.BASE_URL || "http://localhost:3111").replace(/\/$/, "");
const ROUTES = ["/portfolio", "/projects", "/certifications", "/history", "/contact-me"];
const ALLOW = JSON.parse(fs.readFileSync(path.join(__dirname, "parity.allow.json"), "utf8"));

const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();

function allowed(kind, route, value) {
    return (ALLOW[kind] || []).some((a) => {
        if (a.route && a.route !== "*" && a.route !== route) return false;
        if (a.match.startsWith("/") && a.match.lastIndexOf("/") > 0) {
            const last = a.match.lastIndexOf("/");
            return new RegExp(a.match.slice(1, last), a.match.slice(last + 1) || "i").test(value);
        }
        return norm(a.match) === norm(value);
    });
}

// Runs in the page: everything we compare.
// The classic sidebar (profile, skills, languages) appears on every classic page; Twilight shows
// that content once, in the Home page's About section (ticket T-04). So the sidebar's text is
// only compared on /portfolio. Menu labels are renamed on purpose (decision D-1), so the classic
// menu text is never compared (its links still are).
function collect(isHome) {
    const skip = (el) => el.closest(".txt-rotate, .art-rtitle, .tw-hero-typing, .art-menu-bar, script, style, noscript") || (!isHome && el.closest(".art-info-bar"));
    const texts = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
        const t = n.textContent.replace(/\s+/g, " ").trim();
        if (t && n.parentElement && !skip(n.parentElement)) texts.push(t);
    }
    const links = [...document.querySelectorAll("a[href]")]
        .map((a) => {
            const href = a.getAttribute("href");
            if (!href || href === "#" || href === "#.") return null;
            const u = new URL(href, location.href);
            const external = u.origin !== location.origin && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("skype:");
            const key = u.origin === location.origin && !/\.(pdf)$/i.test(u.pathname) && !u.pathname.startsWith("/static/")
                ? u.pathname + u.search
                : u.pathname.startsWith("/static/") ? "static:" + u.pathname.split("/").pop().replace(/\.[0-9a-f]{8,}\./, ".") : href;
            return { key, target: a.getAttribute("target") || "", rel: a.getAttribute("rel") || "", external };
        })
        .filter(Boolean);
    const images = [...document.querySelectorAll("img[src]")]
        .map((i) => new URL(i.getAttribute("src"), location.href).pathname.split("/").pop().replace(/\.[0-9a-f]{8,}\./, "."))
        .filter((s) => !s.startsWith("avatar"));
    const form = document.querySelector("form");
    return {
        title: document.title,
        texts,
        links,
        images,
        form: form ? { action: form.getAttribute("action"), method: (form.getAttribute("method") || "").toLowerCase(), fields: [...form.elements].map((e) => e.name).filter(Boolean).sort() } : null,
        // the ?theme= preview parameter is ours, not part of the page
        pageViews: (window.dataLayer || []).map((d) => [...d]).filter((d) => d[0] === "event" && d[1] === "page_view").map((d) => d[2] && d[2].page_path.replace(/[?&]theme=[a-z]+/, "")),
    };
}

async function snapshot(browser, route, theme) {
    const ctx = await browser.newContext({ viewport: { width: 1400, height: 900 }, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.route(/googletagmanager|google-analytics|analytics\.google/, (r) => r.abort());
    await page.goto(`${BASE}${route}?theme=${theme}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    const data = await page.evaluate(collect, route === "/portfolio");
    await ctx.close();
    return data;
}

(async () => {
    const browser = await chromium.launch({
        headless: true,
        executablePath: process.env.CHROME_PATH || undefined,
        channel: process.env.CHROME_PATH ? undefined : "chrome",
    });
    let failures = 0;
    for (const route of ROUTES) {
        const [classic, tw] = [await snapshot(browser, route, "ivory"), await snapshot(browser, route, "twilight")];
        const haystack = norm(tw.texts.join(" "));
        const problems = [];

        const missingText = [...new Set(classic.texts)].filter((t) => norm(t).length >= 3 && !haystack.includes(norm(t)) && !allowed("text", route, t));
        missingText.forEach((t) => problems.push(`text missing: "${t.slice(0, 90)}"`));

        const twLinks = new Set(tw.links.map((l) => `${l.key}|${l.external ? l.target + "|" + l.rel : ""}`));
        const seenLinks = new Set();
        classic.links.forEach((l) => {
            const k = `${l.key}|${l.external ? l.target + "|" + l.rel : ""}`;
            if (seenLinks.has(k)) return;
            seenLinks.add(k);
            if (!twLinks.has(k) && !allowed("link", route, l.key)) problems.push(`link missing: ${l.key}${l.external ? " (target=" + l.target + ", rel=" + l.rel + ")" : ""}`);
        });

        const twImages = new Set(tw.images);
        [...new Set(classic.images)].forEach((i) => {
            if (!twImages.has(i) && !allowed("image", route, i)) problems.push(`image missing: ${i}`);
        });

        if (classic.title !== tw.title && !allowed("title", route, classic.title)) problems.push(`title differs: "${classic.title}" vs "${tw.title}"`);
        if (JSON.stringify(classic.pageViews) !== JSON.stringify(tw.pageViews)) problems.push(`page_view differs: ${JSON.stringify(classic.pageViews)} vs ${JSON.stringify(tw.pageViews)}`);
        if (JSON.stringify(classic.form) !== JSON.stringify(tw.form)) problems.push(`form differs: ${JSON.stringify(classic.form)} vs ${JSON.stringify(tw.form)}`);

        console.log(`${problems.length ? "FAIL" : "ok  "}  ${route}   (classic: ${classic.texts.length} text nodes, ${classic.links.length} links, ${classic.images.length} images; twilight: ${tw.texts.length}, ${tw.links.length}, ${tw.images.length})`);
        problems.forEach((p) => console.log("      - " + p));
        failures += problems.length;
    }
    await browser.close();
    console.log(failures ? `\n${failures} difference(s). Fix them, or allow them with a reason in scripts/parity.allow.json.` : "\nAll routes match.");
    process.exit(failures ? 1 : 0);
})().catch((e) => {
    console.error(e);
    process.exit(2);
});
