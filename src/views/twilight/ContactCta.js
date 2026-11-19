import React from "react";
import { ContactGrid } from "views/examples/ContactGrid";

// The closing call to action. The five contact tiles are the existing ContactGrid component
// (Kaggle, GitHub, Credly, LinkedIn, Email), so their links and centring are unchanged.
export const ContactCta = () => (
    <section className="tw-section tw-cta-wrap" aria-labelledby="tw-cta-title">
        <div className="tw-cta tw-grain">
            <div className="tw-cta-text">
                <h2 id="tw-cta-title" className="tw-disp">Got something in mind?</h2>
                <p>Tell me what you're building and where it needs to go.</p>
                <a className="tw-btn tw-btn-sun" href="/contact-me">Send me a message</a>
                <span className="tw-hand tw-cta-sign" aria-hidden="true">- Arnav</span>
            </div>
            <div className="tw-cta-grid">
                <ContactGrid />
            </div>
        </div>
    </section>
);
