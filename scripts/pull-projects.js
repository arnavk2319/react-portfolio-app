/*
 * Pulls portfolio projects from my public GitHub repos.
 *
 * A repo is picked up when its README contains the marker
 *     <!-- portfolio: section=ai-rag -->        (ai-rag | ml-ds | web-mobile)
 * From the README it reads: the first "# Title", the first plain paragraph (description),
 * a "**Live demo:** <url>" line (falls back to the repo URL) and the first image
 * (the tile screenshot, downloaded and padded to the 3:2 tile shape).
 *
 * Output: src/data/pulledProjects.json + src/assets/img/pulled/<repo>.webp (both committed, so the
 * site still builds with no network). Any failure leaves the committed files untouched; never fails a build.
 *
 *   npm run pull:projects            (also runs automatically before `npm run build`)
 *   GITHUB_TOKEN=... npm run pull:projects   (optional, raises the API rate limit)
 *   PULL_REF=some-branch npm run pull:projects   (read READMEs from a branch instead of each default branch; for testing)
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const OWNER = "arnavk2319";
const SECTIONS = { "ai-rag": "ai", "ml-ds": "ml", "web-mobile": "web" };
const ROOT = path.join(__dirname, "..");
const OUT_JSON = path.join(ROOT, "src/data/pulledProjects.json");
const OUT_IMG_DIR = path.join(ROOT, "src/assets/img/pulled");
const TILE_W = 1100;
const TILE_H = 733; // 3:2, the shape of the tile frame

function get(url, asBuffer, redirects = 5) {
    return new Promise((resolve, reject) => {
        const headers = { "User-Agent": "portfolio-pull-script", Accept: "application/vnd.github+json" };
        if (process.env.GITHUB_TOKEN && url.startsWith("https://api.github.com")) {
            headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
        }
        https.get(url, { headers }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
                res.resume();
                return resolve(get(new URL(res.headers.location, url).toString(), asBuffer, redirects - 1));
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(res.statusCode + " " + url));
            }
            const chunks = [];
            res.on("data", (c) => chunks.push(c));
            res.on("end", () => {
                const buf = Buffer.concat(chunks);
                resolve(asBuffer ? buf : buf.toString("utf8"));
            });
        }).on("error", reject);
    });
}

function parseReadme(md, repo, branch) {
    const marker = md.match(/<!--\s*portfolio:\s*section=([\w-]+)\s*-->/i);
    if (!marker || !SECTIONS[marker[1].toLowerCase()]) return null;

    const title = (md.match(/^#\s+(.+)$/m) || [])[1];
    if (!title) return null;

    // first paragraph after the title that is plain prose
    const after = md.slice(md.indexOf(title) + title.length);
    const description = after
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .find((p) => p && !/^(!\[|<|#|\*\*Live demo|Keywords:|\||```)/.test(p));

    const demo = (md.match(/\*\*Live demo:?\*\*:?\s*(https?:\/\/\S+)/i) || [])[1];
    const img = (md.match(/!\[[^\]]*\]\(([^)\s]+)\)/) || [])[1];
    if (!description || !img) return null;

    const imageUrl = /^https?:/.test(img)
        ? img
        : `https://raw.githubusercontent.com/${OWNER}/${repo}/${branch}/${img.replace(/^\.?\//, "")}`;

    return {
        id: repo,
        category: SECTIONS[marker[1].toLowerCase()],
        title: title.trim(),
        description: description.replace(/\s*\n\s*/g, " "),
        href: demo || `https://github.com/${OWNER}/${repo}`,
        imageUrl,
    };
}

// Pad (not crop) the screenshot onto a 3:2 canvas filled with its own corner colour, so nothing is cut off.
async function makeTile(buffer, outFile) {
    const sharp = require("sharp");
    const meta = await sharp(buffer).metadata();
    const px = await sharp(buffer).extract({ left: 0, top: 0, width: 1, height: 1 }).removeAlpha().raw().toBuffer();
    const background = { r: px[0], g: px[1], b: px[2] };
    const wide = meta.width / meta.height >= 1.2;
    await sharp(buffer)
        .resize(TILE_W, TILE_H, wide ? { fit: "contain", background } : { fit: "cover", position: "top" })
        .webp({ quality: 82 })
        .toFile(outFile);
}

async function main() {
    const repos = JSON.parse(await get(`https://api.github.com/users/${OWNER}/repos?per_page=100&type=owner`));
    const found = [];
    for (const r of repos) {
        if (r.private || r.fork || r.archived || r.name === "react-portfolio-app") continue;
        try {
            const ref = process.env.PULL_REF || r.default_branch;
            const md = await get(`https://raw.githubusercontent.com/${OWNER}/${r.name}/${ref}/README.md`);
            const p = parseReadme(md, r.name, ref);
            if (!p) continue;
            const file = `${r.name}.webp`;
            fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
            await makeTile(await get(p.imageUrl, true), path.join(OUT_IMG_DIR, file));
            delete p.imageUrl;
            found.push({ ...p, image: file });
            console.log(`pull-projects: ${r.name} -> ${p.category}`);
        } catch (e) {
            console.warn(`pull-projects: skipped ${r.name} (${e.message})`);
        }
    }
    found.sort((a, b) => a.id.localeCompare(b.id));
    fs.writeFileSync(OUT_JSON, JSON.stringify(found, null, 2) + "\n");
    // drop images of repos that no longer qualify
    const keep = new Set(found.map((f) => f.image));
    for (const f of fs.existsSync(OUT_IMG_DIR) ? fs.readdirSync(OUT_IMG_DIR) : []) {
        if (!keep.has(f)) fs.unlinkSync(path.join(OUT_IMG_DIR, f));
    }
}

if (require.main === module) {
    main().catch((e) => {
        console.warn("pull-projects: kept the committed data (" + e.message + ")");
    });
}

module.exports = { parseReadme };
