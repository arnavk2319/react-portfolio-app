import React from "react";
import { BadgeCarousel } from "views/examples/BadgeCarousel";
import { credlyBadges } from "data/credentials";

// The badge carousel from the classic home page (same component, same badges and links),
// with a link to the full Certifications page.
export const Credentials = () => (
    <section className="tw-section tw-creds" aria-labelledby="tw-creds-title">
        <div className="tw-section-head">
            <div className="tw-mono tw-label">{"// credentials"}</div>
            <h2 id="tw-creds-title" className="tw-disp tw-h2">Badges I've earned</h2>
        </div>
        <div className="tw-card tw-creds-card">
            <BadgeCarousel items={credlyBadges} trackLocation="home_credentials" />
        </div>
        <a className="tw-more-all" href="/certifications" data-track="cta_click" data-track-cta="see_all_certifications" data-track-location="home_credentials">All {credlyBadges.length} certifications →</a>
    </section>
);
