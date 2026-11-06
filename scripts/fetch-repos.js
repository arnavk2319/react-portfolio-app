/**
 * Pulls the public repositories of the GitHub user in scripts/repos.config.json and writes
 * src/data/repos.json, which the Projects page renders under "More on GitHub".
 *
 * Runs automatically before `npm run build` (the "prebuild" script) and can be run by hand:
 *   npm run fetch-repos
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

function get(url) {
    const headers = { "User-Agent": "portfolio-repo-fetch", Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = "Bearer " + process.env.GITHUB_TOKEN;
    return new Promise((resolve, reject) => {
        https
            .get(url, { headers }, (res) => {
                let body = "";
                res.on("data", (c) => (body += c));
                res.on("end", () => {
                    if (res.statusCode !== 200) return reject(new Error("GitHub API " + res.statusCode + ": " + body.slice(0, 120)));
                    try {
                        resolve(JSON.parse(body));
                    } catch (e) {
                        reject(e);
                    }
                });
            })
            .on("error", reject);
    });
}

async function main() {
    const all = [];
    for (let page = 1; page <= 5; page++) {
        const batch = await get(`https://api.github.com/users/${config.user}/repos?per_page=100&sort=pushed&page=${page}`);
        all.push(...batch);
        if (batch.length < 100) break;
    }

    const always = new Set(config.alwaysInclude.map((n) => n.toLowerCase()));
    const skip = new Set(config.exclude.map((n) => n.toLowerCase()));

    const picked = all
        .filter((r) => {
            const name = r.name.toLowerCase();
            if (always.has(name)) return true;
            if (skip.has(name)) return false;
            if (r.fork && !config.includeForks) return false;
            if (r.archived && !config.includeArchived) return false;
            if (config.requireDescription && !(r.description || "").trim()) return false;
            return true;
        })
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, config.maxRepos)
        .map((r) => ({
            name: r.name,
            description: (r.description || "").trim(),
            url: r.html_url,
            homepage: r.homepage || "",
            language: r.language || "",
            stars: r.stargazers_count,
            topics: r.topics || [],
            pushedAt: r.pushed_at,
        }));

    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    // generatedAt is deliberately left out so the file only changes when the repos do.
    fs.writeFileSync(OUT, JSON.stringify({ user: config.user, repos: picked }, null, 2) + "\n");
    console.log(`fetch-repos: wrote ${picked.length} of ${all.length} repos to src/data/repos.json`);
}

main().catch((err) => {
    console.warn("fetch-repos: could not update repos (" + err.message + "); keeping the existing src/data/repos.json");
    if (!fs.existsSync(OUT)) {
        fs.mkdirSync(path.dirname(OUT), { recursive: true });
        fs.writeFileSync(OUT, JSON.stringify({ user: config.user, repos: [] }, null, 2) + "\n");
    }
});
