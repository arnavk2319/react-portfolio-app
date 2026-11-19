import React from "react";
import { PROJECTS } from "data/projects";
import { ProjectCard } from "views/twilight/ProjectCard";

const TILTS = ["-0.8deg", "0.6deg", "-0.4deg"];

// The AI & RAG projects as tilted cards that overlap the navy hero band. They come from the same
// data as the Projects page (pulled from GitHub READMEs), so a new README shows up here automatically.
export const FeaturedWork = () => {
    const featured = PROJECTS.filter((p) => p.category === "ai");
    if (!featured.length) return null;
    return (
        <section className="tw-featured" aria-labelledby="tw-featured-title">
            <h2 id="tw-featured-title" className="tw-sr">Featured work</h2>
            {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} tilt={TILTS[i % TILTS.length]} location="home_featured" />
            ))}
        </section>
    );
};
