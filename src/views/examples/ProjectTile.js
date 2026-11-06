import React from "react";

/**
 * A project card that fades in the first time it scrolls into view.
 * `image` may be omitted (or fail to load); a gradient placeholder with the title is shown instead.
 * `wide` uses the 1200x630 social-preview aspect ratio so those images are not cropped.
 * `meta` is an optional footer row (language, stars, ...).
 */
export function ProjectTile({ id, image, wide, title, description, href, meta, linkLabel = "Read more" }) {
    const ref = React.useRef(null);
    const [seen, setSeen] = React.useState(false);
    const [imgFailed, setImgFailed] = React.useState(false);

    React.useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setSeen(true);
            return undefined;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    io.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div id={id} className="art-grid-item">
            <div ref={ref} className={seen ? "art-tile art-in" : "art-tile"}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={"art-a art-portfolio-item-frame art-horizontal" + (wide ? " art-wide" : "")}>
                    {image && !imgFailed ? (
                        <img src={image} alt={title} loading="lazy" onError={() => setImgFailed(true)}></img>
                    ) : (
                        <span className="art-tile-placeholder">{title}</span>
                    )}
                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                </a>

                <div className="art-item-description">
                    <h5 className="mb-15">{title}</h5>
                    <div className="mb-15">{description}</div>
                    {meta}
                    <a href={href} target="_blank" rel="noopener noreferrer" className="art-link art-color-link art-w-chevron">{linkLabel}</a>
                </div>
            </div>
        </div>
    );
}
