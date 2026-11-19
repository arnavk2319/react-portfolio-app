import React from "react";
import Resume from "assets/img/Arnav_Kaushal_2025_ML.pdf";
import { NAV } from "data/navigation";
import { SOCIAL } from "data/profile";

// Bottom tab bar (phones). Certifications is reachable from the footer, the home page and Experience.
const TABS = [
    { href: "/portfolio", label: "Home", icon: "M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" },
    { href: "/projects", label: "Work", icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" },
    { href: "/history", label: "Experience", icon: "M3 8h18v12H3zM9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" },
    { href: "/contact-me", label: "Contact", icon: "M4 5h16v11H8l-4 4z" },
];

const SOCIAL_LABELS = { "fab fa-linkedin-in": "LinkedIn", "fab fa-github": "GitHub", "fa fa-envelope": "Email" };

/**
 * The Twilight page shell: a navy band holding the header (and an optional page hero), the page
 * content below it, and a navy footer. It takes the same props as the classic PageLayout.
 *  - hero: content shown inside the navy band under the header
 *  - children: the page content on the light surface
 */
export const TwilightLayout = ({ title, currentHref, hero, children }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    const toTop = () => {
        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    };

    return (
        <div className="tw">
            <a className="tw-skip" href="#tw-main">Skip to content</a>

            <div className="tw-band tw-grain">
                <span className="tw-band-orb" aria-hidden="true"></span>
                <header className="tw-header">
                    <a className="tw-brand" href="/portfolio" aria-label="Arnav Kaushal, home">
                        <span className="tw-mark" aria-hidden="true">AK</span>
                        <span className="tw-brand-name">Arnav Kaushal</span>
                    </a>
                    <nav className="tw-nav" aria-label="Main">
                        {NAV.map(({ href, label }) => (
                            <a key={href} href={href} aria-current={href === currentHref ? "page" : undefined}>{label}</a>
                        ))}
                    </nav>
                    <a className="tw-btn tw-btn-ghost tw-resume" href={Resume} target="_blank" rel="noopener noreferrer" download aria-label="Download résumé">
                        <span className="tw-long">Download résumé</span><span className="tw-short">Résumé</span>
                    </a>
                </header>
                {hero}
            </div>

            <main id="tw-main" className="tw-main" tabIndex="-1">
                {children}
            </main>

            <nav className="tw-tabbar" aria-label="Quick navigation">
                {TABS.map(({ href, label, icon }) => (
                    <a key={href} href={href} aria-current={href === currentHref ? "page" : undefined}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon} /></svg>
                        {label}
                    </a>
                ))}
            </nav>

            <footer className="tw-footer tw-grain">
                <div className="tw-footer-inner">
                    <div className="tw-footer-top">
                        <span className="tw-hand tw-signoff">thanks for looking around</span>
                        <nav className="tw-footer-nav" aria-label="Footer">
                            {NAV.map(({ href, label }) => (
                                <a key={href} href={href}>{label}</a>
                            ))}
                        </nav>
                        <div className="tw-footer-social">
                            {SOCIAL.map(({ href, icon }) => (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={SOCIAL_LABELS[icon] || href}>
                                    <i className={icon} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="tw-footer-bottom">
                        <span>© {new Date().getFullYear()} Arnav Kaushal · Toronto, Canada</span>
                        <button type="button" className="tw-totop" onClick={toTop}>
                            <i className="fas fa-chevron-up" aria-hidden="true"></i> Back to top
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};
