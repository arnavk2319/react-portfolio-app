import React from "react";
import { RotatingTitle } from "components/RotatingTitle";
import { RotatingText } from "views/examples/RotatingText";
import { COUNTERS, NOW_NOTE } from "data/home";
import photo from "assets/img/default-avatar.png";

// Shown inside the navy band under the header.
export const Hero = () => (
    <section className="tw-hero">
        <div className="tw-hero-text">
            <div className="tw-mono tw-hero-kicker">{"// toronto · full-stack and AI engineer"}</div>
            <h1 className="tw-disp tw-hero-title">
                Hi, I'm Arnav. I take ideas from concept to{" "}
                <span className="tw-highlight">
                    <svg aria-hidden="true" viewBox="0 0 300 14" preserveAspectRatio="none">
                        <path d="M2 9 C 60 2, 140 12, 298 5" />
                    </svg>
                    <span>deployment</span>
                </span>
                .
            </h1>
            <div className="tw-hero-role">
                <span>I make it happen as</span>
                <span className="tw-role-pill"><RotatingTitle variant="twilight" /></span>
                <span className="tw-hand tw-role-note" aria-hidden="true">
                    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M44 24 C 30 26, 14 20, 6 6" />
                        <path d="M2 14 L6 5 L14 10" />
                    </svg>
                    it changes every few seconds
                </span>
            </div>
            <p className="tw-hero-lede">I build RAG systems, LLM tooling and enterprise web apps, and I like taking them all the way to production.</p>
            <div className="tw-hero-typing"><RotatingText /></div>
            <div className="tw-hero-cta">
                <a className="tw-btn tw-btn-sun" href="/projects">See what I've built</a>
                <a className="tw-btn tw-btn-ghost" href="/contact-me">Say hello</a>
            </div>
            <ul className="tw-counters">
                {COUNTERS.map(({ value, label }) => (
                    <li key={label}><span className="tw-disp">{value}</span> {label}</li>
                ))}
            </ul>
        </div>

        <div className="tw-hero-art">
            <figure className="tw-polaroid">
                <img src={photo} alt="Arnav Kaushal" width="130" height="135" />
                <figcaption className="tw-hand">Arnav, Toronto</figcaption>
            </figure>
            <div className="tw-note">
                <div className="tw-mono">NOW</div>
                <div className="tw-hand">{NOW_NOTE}</div>
            </div>
        </div>
    </section>
);
