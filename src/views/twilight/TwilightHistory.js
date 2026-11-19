import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { EDUCATION, WORK } from "data/history";
import certifications from "data/certifications";

const Entry = ({ item, current }) => (
    <article className={current ? "tw-card tw-entry tw-entry-current" : "tw-card tw-entry"}>
        <div className="tw-entry-head">
            <h3 className="tw-disp">{item.org}</h3>
            <span className="tw-mono tw-entry-when">{item.when}</span>
        </div>
        <div className="tw-entry-role">{item.role}</div>
        <div className="tw-entry-place">{item.place}</div>
        {item.text.map((t, i) => (
            <p key={i}>{t}</p>
        ))}
    </article>
);

// The Twilight Experience (History) page: work history, education and certifications, with the
// same entries, wording and dates as the classic page (src/data/history.js, src/data/certifications.js).
export default function TwilightHistory() {
    const hero = (
        <section className="tw-phero">
            <div className="tw-mono tw-hero-kicker">{"// experience"}</div>
            <h1 className="tw-disp tw-ptitle">Where I've worked and studied.</h1>
            <p className="tw-hero-lede">Seven years across fintech platforms, mobile and web apps, and now AI systems.</p>
        </section>
    );

    return (
        <TwilightLayout title="History | Arnav Kaushal" currentHref="/history" hero={hero}>
            <div className="tw-exp">
                <section className="tw-exp-main" aria-labelledby="tw-work-title">
                    <h2 id="tw-work-title" className="tw-disp tw-pgroup-title">Work History</h2>
                    <div className="tw-entries">
                        {WORK.map((item, i) => (
                            <Entry key={item.org + item.when} item={item} current={i === 0} />
                        ))}
                    </div>
                </section>

                <div className="tw-exp-side">
                    <section aria-labelledby="tw-edu-title">
                        <h2 id="tw-edu-title" className="tw-disp tw-pgroup-title">Education</h2>
                        <div className="tw-entries">
                            {EDUCATION.map((item) => (
                                <Entry key={item.org} item={item} />
                            ))}
                        </div>
                    </section>

                    {certifications.length > 0 && (
                        <section aria-labelledby="tw-cert-title">
                            <h2 id="tw-cert-title" className="tw-disp tw-pgroup-title">Certifications</h2>
                            <div className="tw-entries">
                                {certifications.map(({ title, issuer, link, date }) => (
                                    <a key={title} href={link} target="_blank" rel="noopener noreferrer" className="tw-card tw-entry tw-cert">
                                        <h3 className="tw-disp">{title}</h3>
                                        <div className="tw-entry-role">{issuer}</div>
                                        {date && <div className="tw-entry-place">{date}</div>}
                                        <span className="tw-fcard-cta">View credential ↗</span>
                                    </a>
                                ))}
                            </div>
                            <a className="tw-more-all" href="/certifications">See all certifications →</a>
                        </section>
                    )}
                </div>
            </div>
        </TwilightLayout>
    );
}
