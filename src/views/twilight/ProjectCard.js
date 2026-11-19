import React from "react";

const LABELS = { ai: "ai and rag", ml: "ml and data science", web: "web and mobile" };

// One project as a card: screenshot, title, description and link. Used for the featured work on the
// home page and for every project on the Projects page, so a project looks the same everywhere.
export const ProjectCard = ({ project: p, tilt }) => (
    <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-card tw-fcard"
        style={tilt ? { "--tilt": tilt } : undefined}
    >
        <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
        <span className="tw-fcard-body">
            <span className="tw-mono tw-label">{LABELS[p.category]}</span>
            <h3 className="tw-disp">{p.title}</h3>
            <span className="tw-fcard-desc">{p.description}</span>
            <span className="tw-fcard-cta">{p.category === "ai" ? "Try the live demo ↗" : "Read more ↗"}</span>
        </span>
    </a>
);
