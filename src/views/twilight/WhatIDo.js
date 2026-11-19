import React from "react";
import { SERVICE_GROUPS } from "data/services";

// All nine services from the classic home page, grouped under four headings.
export const WhatIDo = () => (
    <section className="tw-section tw-what" aria-labelledby="tw-what-title">
        <div className="tw-what-side">
            <div className="tw-mono tw-label">{"// what I do"}</div>
            <h2 id="tw-what-title" className="tw-disp tw-h2">Where I'm useful</h2>
        </div>
        <div className="tw-what-list">
            {SERVICE_GROUPS.map(({ name, services }) => (
                <div className="tw-what-group" key={name}>
                    <span className="tw-bullet" aria-hidden="true"></span>
                    <div>
                        <h3 className="tw-disp">{name}</h3>
                        <ul>
                            {services.map(({ title, description, href }) => (
                                <li key={title}>
                                    <a href={href} data-track="service_click" data-track-service={title} data-track-location="home_what_i_do">
                                        <strong>{title}</strong>
                                        <span>{description}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
