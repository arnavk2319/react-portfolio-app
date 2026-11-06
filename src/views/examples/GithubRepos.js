import React from "react";
import { ProjectTile } from "views/examples/ProjectTile";
import data from "data/repos.json";

const MAX_SHOWN = 9;

// Optional hand-made thumbnails: src/assets/repo-images/<repo-name>.(png|jpg|jpeg|webp)
const overrides = {};
const ctx = require.context("assets/repo-images", false, /\.(png|jpe?g|webp)$/);
ctx.keys().forEach((key) => {
    overrides[key.replace(/^\.\//, "").replace(/\.[^.]+$/, "").toLowerCase()] = ctx(key);
});

const imageFor = (repo) =>
    overrides[repo.name.toLowerCase()] || `https://opengraph.githubassets.com/1/${data.user}/${repo.name}`;
const isCustom = (repo) => Boolean(overrides[repo.name.toLowerCase()]);

const norm = (u) => u.toLowerCase().replace(/\/+$/, "");

/**
 * "More on GitHub": repositories pulled from the GitHub API at build time (see scripts/fetch-repos.js),
 * minus anything already shown as a curated project above.
 */
export function GithubRepos({ curatedLinks = [] }) {
    const curated = new Set(curatedLinks.map(norm));
    const repos = data.repos.filter((r) => !curated.has(norm(r.url))).slice(0, MAX_SHOWN);

    if (!repos.length) return null;

    return (
        <div className="col-lg-12 art-github-section">
            <h2 className="art-projects-title">More on GitHub</h2>
            <div className="art-grid art-grid-2-col art-gallery">
                {repos.map((r) => (
                    <ProjectTile
                        key={r.name}
                        id={"gh-" + r.name}
                        image={imageFor(r)}
                        wide={!isCustom(r)}
                        title={r.name}
                        description={r.description}
                        href={r.homepage || r.url}
                        linkLabel={r.homepage ? "Live demo" : "View on GitHub"}
                        meta={
                            <div className="art-repo-meta mb-15">
                                {r.language && <span className="art-chip-lang">{r.language}</span>}
                                {r.stars > 0 && <span><i className="fas fa-star"></i> {r.stars}</span>}
                                {r.topics.slice(0, 3).map((t) => (
                                    <span key={t} className="art-chip-topic">{t}</span>
                                ))}
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
}
