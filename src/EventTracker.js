import { useEffect } from "react";
import { trackEvent } from "./analytics";

/*
 * Click and scroll analytics. Event names and parameters are listed in docs/analytics.md.
 *
 * Clicks: put data-track="event_name" on a link or button, plus data-track-* attributes for the
 * parameters (data-track-project-name="X" is sent as project_name). This one listener does the rest,
 * so components never call gtag themselves. link_url and link_text are added automatically.
 *
 * Scroll: scroll_depth fires once per page view at 25, 50, 75, 90 and 100 percent of the page.
 */

const MAX = 100; // GA4 truncates parameter values at 100 characters
const DEPTHS = [25, 50, 75, 90, 100];
const PRIVATE = /^(mailto|tel|skype|sms):/i;

const snake = (key) => key.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");

const paramsFrom = (el) => {
    const params = {};
    Object.keys(el.dataset).forEach((key) => {
        if (key.startsWith("track") && key !== "track") params[snake(key.slice(5))] = String(el.dataset[key]).slice(0, MAX);
    });
    return params;
};

export default function EventTracker() {
    useEffect(() => {
        const onClick = (e) => {
            const el = e.target.closest && e.target.closest("[data-track]");
            if (!el) return;
            const params = paramsFrom(el);
            const href = el.getAttribute("href");
            if (href) {
                if (PRIVATE.test(href)) {
                    // never send an email address or phone number to analytics, only the kind of contact
                    params.contact_method = params.contact_method || href.split(":")[0].toLowerCase();
                } else {
                    const url = new URL(href, window.location.href);
                    const shown = url.origin === window.location.origin ? url.pathname + url.search : url.href;
                    // built files carry a content hash in their name (résumé.1a2b3c4d.pdf); drop it so reports group by file
                    params.link_url = shown.replace(/\.[0-9a-f]{8}\./, ".").slice(0, MAX);
                }
            }
            if (!params.link_text) {
                const text = (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim();
                // a whole card's text is not a label; those events carry their own name parameter instead
                if (text && text.length <= 40) params.link_text = text;
            }
            params.page_path = window.location.pathname;
            trackEvent(el.dataset.track, params);
        };

        const fired = new Set();
        let waiting = false;
        const onScroll = () => {
            if (waiting) return;
            waiting = true;
            window.requestAnimationFrame(() => {
                waiting = false;
                const doc = document.documentElement;
                if (doc.scrollHeight <= window.innerHeight) return;
                const percent = Math.round(((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100);
                DEPTHS.forEach((depth) => {
                    if (percent >= depth && !fired.has(depth)) {
                        fired.add(depth);
                        trackEvent("scroll_depth", { percent_scrolled: depth, page_path: window.location.pathname });
                    }
                });
            });
        };

        document.addEventListener("click", onClick, true);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            document.removeEventListener("click", onClick, true);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return null;
}
