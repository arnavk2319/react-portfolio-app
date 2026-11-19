import React from "react";
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";
import { PROFILE, LANGUAGES, SKILLS, KNOWLEDGE, SOCIAL } from "data/profile";

const CIRCLE_PATH = "M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93";
const SOCIAL_LABELS = { "fab fa-linkedin-in": "LinkedIn", "fab fa-github": "GitHub", "fa fa-envelope": "Email" };

// Everything the old left sidebar showed now lives here: profile facts, languages, skills,
// knowledge lines, résumé and social links. Data comes from src/data/profile.js.
export const About = () => (
    <section className="tw-section tw-about" aria-labelledby="tw-about-title">
        <div className="tw-section-head">
            <div className="tw-mono tw-label">{"// about"}</div>
            <h2 id="tw-about-title" className="tw-disp tw-h2">The details</h2>
        </div>

        <div className="tw-about-grid">
            <div className="tw-about-side">
                <dl className="tw-card tw-facts">
                    {PROFILE.map(({ label, value }) => (
                        <div key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="tw-card tw-langs">
                    {LANGUAGES.map((language) => (
                        <div className="tw-lang" key={language}>
                            <div className="tw-ring" role="img" aria-label={language + ", 100 percent"}>
                                <svg viewBox="0 0 100 100" aria-hidden="true">
                                    <path d={CIRCLE_PATH} className="tw-ring-track" />
                                    <path d={CIRCLE_PATH} className="tw-ring-fill" pathLength="100" />
                                </svg>
                                <span aria-hidden="true">100</span>
                            </div>
                            <span className="tw-lang-name">{language}</span>
                        </div>
                    ))}
                </div>

                <div className="tw-about-links">
                    <a className="tw-btn tw-btn-sun" href={Resume} target="_blank" rel="noopener noreferrer" download>
                        Download cv <i className="fas fa-download" aria-hidden="true"></i>
                    </a>
                    <div className="tw-about-social">
                        {SOCIAL.map(({ href, icon }) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={SOCIAL_LABELS[icon] || href}>
                                <i className={icon} aria-hidden="true"></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="tw-about-main">
                <ul className="tw-skills">
                    {SKILLS.map(({ name, bar, label }) => (
                        <li key={name}>
                            <div className="tw-skill-top"><span>{name}</span><span className="tw-mono">{label}</span></div>
                            <div className="tw-skill-bar" aria-hidden="true"><span style={{ width: bar + "%" }}></span></div>
                        </li>
                    ))}
                </ul>
                <ul className="tw-knowledge">
                    {KNOWLEDGE.map((item) => (
                        <li key={item} className="tw-tag">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);
