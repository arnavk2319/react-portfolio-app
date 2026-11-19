import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { credlyBadges } from "data/credentials";

// The Twilight Certifications page: every badge from src/data/credentials.js (the same list the
// classic page uses), each linking to its public credential.
export default function TwilightCertifications() {
    const hero = (
        <section className="tw-phero">
            <div className="tw-mono tw-hero-kicker">{"// certifications"}</div>
            <h1 className="tw-disp tw-ptitle">My Credentials</h1>
            <p className="tw-hero-lede">{credlyBadges.length} badges in machine learning, data, and web and backend engineering. Each one opens its public credential.</p>
        </section>
    );

    return (
        <TwilightLayout title="Certifications | Arnav Kaushal" currentHref="/certifications" hero={hero}>
            <div className="tw-pgroups">
                <ul className="tw-badges">
                    {credlyBadges.map((badge) => (
                        <li key={badge.link}>
                            <a href={badge.link} target="_blank" rel="noopener noreferrer" className="tw-card tw-badge" data-track="badge_click" data-track-badge={badge.title} data-track-link-text={badge.title} data-track-location="certifications_page">
                                <img src={badge.image} alt={badge.title} loading="lazy" decoding="async" />
                                <span className="tw-badge-title">{badge.title}</span>
                                <span className="tw-fcard-cta">View badge ↗</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </TwilightLayout>
    );
}
