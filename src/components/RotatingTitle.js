import React from "react";
import { TITLES } from "data/titles";

const INTERVAL_MS = 2800;

// Index derived from the wall clock, so every instance on the page (sidebar and hero) always shows the same title.
const currentIndex = () => Math.floor(Date.now() / INTERVAL_MS) % TITLES.length;

/**
 * The rotating professional title. All titles share one grid cell, so the box is as wide as the longest
 * one (no layout jump) and the change is a crossfade. `variant` picks the size: "sidebar" or "hero".
 */
export const RotatingTitle = ({ variant = "sidebar" }) => {
    const [index, setIndex] = React.useState(currentIndex);

    React.useEffect(() => {
        let timer;
        const tick = () => {
            setIndex(currentIndex());
            timer = setTimeout(tick, INTERVAL_MS - (Date.now() % INTERVAL_MS));
        };
        timer = setTimeout(tick, INTERVAL_MS - (Date.now() % INTERVAL_MS));
        return () => clearTimeout(timer);
    }, []);

    return (
        <span className={"art-rtitle art-rtitle-" + variant}>
            {/* screen readers get the full list once instead of a changing live region */}
            <span className="art-sr-only">{TITLES.join(", ")}</span>
            <span className="art-rtitle-stack" aria-hidden="true">
                {TITLES.map((t, i) => (
                    <span key={t} className={i === index ? "art-rtitle-item art-on" : "art-rtitle-item"}>{t}</span>
                ))}
            </span>
        </span>
    );
};
