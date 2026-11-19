import React from "react";
import { PROJECTS } from "data/projects";

const TILTS = ["-0.8deg", "0.6deg", "-0.4deg"];

// The AI & RAG projects as tilted cards that overlap the navy hero band. They come from the same
// data as the Projects page (pulled from GitHub READMEs), so a new README shows up here automatically.
export const FeaturedWork = () => {
    const featured = PROJECTS.filter((p) => p.category === "ai");
    if (!featured.length) return null;
    return (
        <section className="tw-featured" aria-label="Featured work">
            {featured.map((p, i) => (
                <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-card tw-fcard"
                    style={{ "--tilt": TILTS[i % TILTS.length] }}
                >
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                    <span className="tw-fcard-body">
                        <span className="tw-mono tw-label">ai and rag</span>
                        <h3 className="tw-disp">{p.title}</h3>
                        <span className="tw-fcard-desc">{p.description}</span>
                        <span className="tw-fcard-cta">Try the live demo ↗</span>
                    </span>
                </a>
            ))}
        </section>
    );
};
