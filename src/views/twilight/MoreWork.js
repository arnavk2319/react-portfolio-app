import React from "react";
import { PROJECTS, FILTERS } from "data/projects";

const SHOWN = 4; // per group; the Projects page has all of them

// What kind of link a project has, worked out from its URL.
const kind = (href) => {
    if (href.includes("kaggle.com")) return "kaggle";
    if (href.includes("play.google.com")) return "google play";
    if (href.includes("github.com")) return "github";
    return "web";
};

const GROUPS = ["ml", "web"].map((key) => ({ key, ...FILTERS.find((f) => f.key === key) }));
const KICKERS = { ml: "// ml and data science", web: "// web and mobile" };

// Text rows for the ML and Web & Mobile projects, with a link to the full Projects page.
export const MoreWork = () => (
    <section className="tw-section tw-more" aria-labelledby="tw-more-title">
        <div className="tw-section-head">
            <div className="tw-mono tw-label">{"// more work"}</div>
            <h2 id="tw-more-title" className="tw-disp tw-h2">The rest of the workshop</h2>
        </div>
        <div className="tw-more-groups">
            {GROUPS.map(({ key, label }) => (
                <div className="tw-more-group" key={key}>
                    <div className="tw-more-side">
                        <div className="tw-mono tw-label">{KICKERS[key]}</div>
                        <h3 className="tw-disp">{label}</h3>
                    </div>
                    <ul className="tw-rows">
                        {PROJECTS.filter((p) => p.category === key).slice(0, SHOWN).map((p) => (
                            <li key={p.id}>
                                <a href={p.href} target="_blank" rel="noopener noreferrer" className="tw-row" data-track="project_click" data-track-project-name={p.title} data-track-project-id={p.id} data-track-project-category={label} data-track-location="home_more_work">
                                    <span className="tw-row-title tw-disp">{p.title}</span>
                                    <span className="tw-row-desc">{p.description}</span>
                                    <span className="tw-tag">{kind(p.href)}</span>
                                    {/* the arrow is what tells you the row opens something */}
                                    <span className="tw-row-go" aria-hidden="true">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <a className="tw-more-all" href="/projects" data-track="cta_click" data-track-cta="see_all_projects" data-track-location="home_more_work">See all projects →</a>
    </section>
);
