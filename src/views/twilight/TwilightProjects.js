import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { ProjectCard } from "views/twilight/ProjectCard";
import { PROJECTS, FILTERS, SECTION_ORDER } from "data/projects";

const TILTS = ["-0.8deg", "0.6deg", "-0.4deg"];

// The Twilight Projects page. Same behaviour as the classic page: four tabs (All, AI & RAG,
// ML & Data Science, Web & Mobile), a tab with no projects is hidden, the "All" view lists the
// sections in order (AI, ML, Web), and the heading follows the tab.
export default function TwilightProjects() {
    const [filter, setFilter] = React.useState("all");
    const tabs = FILTERS.filter((f) => f.key === "all" || PROJECTS.some((p) => p.category === f.key));
    const heading = FILTERS.find((f) => f.key === filter).heading;
    const keys = filter === "all" ? SECTION_ORDER : [filter];
    const groups = keys
        .map((key) => ({ key, label: FILTERS.find((f) => f.key === key).label, items: PROJECTS.filter((p) => p.category === key) }))
        .filter((g) => g.items.length);

    const hero = (
        <section className="tw-phero tw-phero-flat">
            <div className="tw-mono tw-hero-kicker">{"// work"}</div>
            {/* keyed by the tab so the heading is announced and refreshed on every switch */}
            <h1 className="tw-disp tw-ptitle" key={filter}>{heading}</h1>
            <p className="tw-hero-lede">AI and RAG systems first, then machine learning, then web and mobile apps. Every project links to a live demo, a notebook or the store.</p>
            <div className="tw-pills" role="group" aria-label="Filter projects">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        type="button"
                        className="tw-pill"
                        aria-pressed={filter === key}
                        data-track="filter_click"
                        data-track-filter={label}
                        onClick={() => setFilter(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );

    return (
        <TwilightLayout title="Portfolio | Arnav Kaushal" currentHref="/projects" hero={hero}>
            <div className="tw-pgroups tw-pgroups-flat">
                {groups.map(({ key, label, items }) => (
                    <section key={key} className="tw-pgroup" aria-label={label}>
                        <h2 className={filter === "all" ? "tw-disp tw-pgroup-title" : "tw-sr"}>{label}</h2>
                        <div className="tw-pgrid">
                            {items.map((p, i) => (
                                <ProjectCard key={p.id} project={p} tilt={key === "ai" ? TILTS[i % TILTS.length] : undefined} location="projects_page" />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </TwilightLayout>
    );
}
