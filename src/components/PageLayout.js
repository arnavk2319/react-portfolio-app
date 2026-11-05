import React from "react";
import { Sidebar } from "components/Sidebar";
import { MenuBar } from "components/MenuBar";

/**
 * Shared page shell: profile sidebar, hero background, scroll frame, footer and menu bar.
 * Each page passes only its own content as children.
 */
export const PageLayout = ({ title, currentHref, currentLabel, children }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    const [artActiveInfoBar, setArtActiveInfoBar] = React.useState(false);
    const [artActiveMenuBar, setArtActiveMenuBar] = React.useState(false);

    return (
        <>
            <div className="art-app">
                <div className="art-mobile-top-bar"></div>

                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <Sidebar isActive={artActiveInfoBar} onToggle={() => setArtActiveInfoBar(!artActiveInfoBar)} />

                        <div className={artActiveMenuBar ? "art-content art-active" : "art-content"}>
                            <div className="art-curtain"></div>

                            <div className="art-top-bg" style={{ backgroundImage: "url(" + require("assets/img/bg11.webp") + ")" }}>
                                <div className="art-top-bg-overlay"></div>
                            </div>

                            <div className="transition-fade" id="swup">
                                <div id="scrollbar" tabIndex="-1" className="art-scroll-frame" style={{ outline: "none" }}>
                                    <div className="scroll-content" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                        {children}

                                        <div className="container-fluid">
                                            <footer>
                                                <div>© 2025 Arnav Kaushal</div>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MenuBar
                            isActive={artActiveMenuBar}
                            onToggle={() => setArtActiveMenuBar(!artActiveMenuBar)}
                            currentHref={currentHref}
                            currentLabel={currentLabel}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
