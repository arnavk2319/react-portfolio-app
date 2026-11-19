import React from "react";
import { PageLayout } from "components/PageLayout";
import { PROJECTS, FILTERS, SECTION_ORDER } from "data/projects";

// A project card that fades in the first time it scrolls into view.
function Tile({ project: p }) {
    const ref = React.useRef(null);
    const [seen, setSeen] = React.useState(false);

    React.useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setSeen(true);
            return undefined;
        }
        // Observe against the page's own scroller, starting a little before the tile enters view.
        // Failsafe: a tile never stays hidden, whatever the observer does (long pages, fast scrolling, jumps).
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    io.disconnect();
                }
            },
            { root: document.getElementById("scrollbar"), rootMargin: "0px 0px 200px 0px", threshold: 0 }
        );
        io.observe(el);
        const failsafe = setTimeout(() => setSeen(true), 2500);
        return () => {
            io.disconnect();
            clearTimeout(failsafe);
        };
    }, []);

    return (
        <div id={p.id} className="art-grid-item">
            <div ref={ref} className={seen ? "art-tile art-in" : "art-tile"}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="art-a art-portfolio-item-frame art-horizontal">
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async"></img>
                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                </a>

                <div className="art-item-description">
                    <h5 className="mb-15">{p.title}</h5>
                    <div className="mb-15">{p.description}</div>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="art-link art-color-link art-w-chevron">Read more</a>
                </div>
            </div>
        </div>
    );
}

function ProjectsPage() {
    const [filter, setFilter] = React.useState("all");
    const heading = FILTERS.find((f) => f.key === filter).heading;
    const visible = PROJECTS
        .filter((p) => filter === "all" || p.category === filter)
        .sort((a, b) => SECTION_ORDER.indexOf(a.category) - SECTION_ORDER.indexOf(b.category)); // stable, keeps order within a section
    const tabs = FILTERS.filter((f) => f.key === "all" || PROJECTS.some((p) => p.category === f.key));

    return (
        <PageLayout title="Portfolio | Arnav Kaushal" currentHref="/projects" currentLabel="Portfolio">
            <div className="container-fluid-projects">
                <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                    <div className="col-lg-12">
                        <div className="art-filter mb-30" style={{ padding: "20px" }}>
                            {tabs.map(({ key, label }) => (
                                <a
                                    key={key}
                                    href="#."
                                    className={filter === key ? "art-link art-current" : "art-link"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFilter(key);
                                    }}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        {/* keyed by the tab so the title fades in again on every switch */}
                        <h2 className="art-projects-title" key={filter}>{heading}</h2>
                    </div>

                    <div className="art-grid art-grid-2-col art-gallery">
                        {visible.map((p) => (
                            <Tile project={p} key={p.id} />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ProjectsPage;
