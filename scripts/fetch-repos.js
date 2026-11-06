/**
 * Pulls the public repositories of the GitHub user in scripts/repos.config.json and writes
 * src/data/repos.json, which the Projects page renders under "More on GitHub".
 *
 * Runs automatically before `npm run build` (the "prebuild" script) and can be run by hand:
 *   npm run fetch-repos
 *
 * A repo is shown only if it: is public, not a fork/archived (unless configured), has a description,
 * mentions config.requiredPhrase ("portfolio application") in its description, topics or README, and has at
 * least one screenshot (non-badge image) in its README. The first screenshot becomes the card image.
 * Tune all of this in scripts/repos.config.json; `alwaysInclude` bypasses the phrase/screenshot checks.
 *
 * - No token is needed. Set GITHUB_TOKEN in the environment to raise the API rate limit
 *   (60/hour unauthenticated). Never commit a token.
 * - If GitHub cannot be reached (offline, rate limited), the existing src/data/repos.json is kept
 *   and the script exits 0, so a build never fails because of this step.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const config = require("./repos.config.json");
const OUT = path.join(__dirname, "..", "src", "data", "repos.json");

function get(url, { raw = false } = {}) {
    const headers = { "User-Agent": "portfolio-repo-fetch", Accept: raw ? "application/vnd.github.raw+json" : "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
    return new Promise((resolve, reject) => {
        https
            .get(url, { headers }, (res) => {
                let body = "";
                res.on("data", (c) => (body += c));
                res.on("end", () => {
                    if (res.statusCode === 404 && raw) return resolve(null); // repo has no README
                    if (res.statusCode !== 200) return reject(new Error("GitHub API " + res.statusCode + ": " + body.slice(0, 120)));
                    try {
                        resolve(raw ? body : JSON.parse(body));
                    } catch (e) {
                        reject(e);
                    }
                });
            })
            .on("error", reject);
    });
}

const BADGE = /shields\.io|badgen|badge|travis-ci|codecov|coveralls|\.svg(\?|$)|github\.com\/[^/]+\/[^/]+\/(actions|workflows)|visitor|komarev|capsule-render/i;

/** Screenshot-like images referenced by a README (markdown or <img>), as absolute URLs. Badges and SVGs are ignored. */
function readmeImages(readme, repo) {
    const found = [];
    const md = /!\[[^\]]*\]\(\s*<?([^)\s>]+)/g;
    const html = /<img[^>]+src=["']([^"']+)["']/gi;
    for (const re of [md, html]) {
        let m;
        while ((m = re.exec(readme))) found.push(m[1]);
    }
    return found
        .filter((u) => !BADGE.test(u))
        .map((u) => {
            if (/^https?:\/\//i.test(u)) {
                // github.com/<u>/<r>/blob/<branch>/<path>  ->  raw.githubusercontent.com/<u>/<r>/<branch>/<path>
                return u.replace(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\//, "https://raw.githubusercontent.com/$1/$2/").replace(/\?raw=true$/, "");
            }
            return `https://raw.githubusercontent.com/${config.user}/${repo.name}/${repo.default_branch}/${u.replace(/^\.?\//, "")}`;
        })
        .filter((u, i, a) => a.indexOf(u) === i);
}

const normalise = (t) => t.toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ");

async function main() {
    const all = [];
    for (let page = 1; page <= 5; page++) {
        const batch = await get(`https://api.github.com/users/${config.user}/repos?per_page=100&sort=pushed&page=${page}`);
        all.push(...batch);
        if (batch.length < 100) break;
    }

    const always = new Set(config.alwaysInclude.map((n) => n.toLowerCase()));
    const skip = new Set(config.exclude.map((n) => n.toLowerCase()));

    const candidates = all
        .filter((r) => {
            const name = r.name.toLowerCase();
            if (always.has(name)) return true;
            if (skip.has(name)) return false;
            if (r.fork && !config.includeForks) return false;
            if (r.archived && !config.includeArchived) return false;
            if (config.requireDescription && !(r.description || "").trim()) return false;
            return true;
        })
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    const phrase = config.requiredPhrase ? normalise(config.requiredPhrase) : "";
    const picked = [];
    for (const r of candidates) {
        // The README is only fetched for repos that already passed the cheap checks above.
        // A real API error (rate limit, network) throws, so we keep the previous file instead of publishing a partial list.
        const readme = (await get(`https://api.github.com/repos/${config.user}/${r.name}/readme`, { raw: true })) || "";
        const forced = always.has(r.name.toLowerCase());
        if (!forced) {
            const haystack = normalise([r.description || "", (r.topics || []).join(" "), readme].join(" "));
            if (phrase && !haystack.includes(phrase)) continue;
        }
        const screenshots = readmeImages(readme, r);
        if (!forced && config.requireScreenshots && !screenshots.length) continue;
        picked.push({
            name: r.name,
            description: (r.description || "").trim(),
            url: r.html_url,
            homepage: r.homepage || "",
            language: r.language || "",
            stars: r.stargazers_count,
            topics: r.topics || [],
            screenshots: screenshots.slice(0, 3),
            pushedAt: r.pushed_at,
        });
        if (picked.length >= config.maxRepos) break;
    }

    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    // generatedAt is deliberately left out so the file only changes when the repos do.
    fs.writeFileSync(OUT, JSON.stringify({ user: config.user, repos: picked }, null, 2) + "\n");
    console.log(`fetch-repos: wrote ${picked.length} of ${all.length} repos (${candidates.length} passed the basic filters) to src/data/repos.json`);
}

main().catch((err) => {
    console.warn("fetch-repos: could not update repos (" + err.message + "); keeping the existing src/data/repos.json");
    if (!fs.existsSync(OUT)) {
        fs.mkdirSync(path.dirname(OUT), { recursive: true });
        fs.writeFileSync(OUT, JSON.stringify({ user: config.user, repos: [] }, null, 2) + "\n");
    }
});
