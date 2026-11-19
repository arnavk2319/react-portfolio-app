import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { Hero } from "views/twilight/Hero";
import { FeaturedWork } from "views/twilight/FeaturedWork";
import { MoreWork } from "views/twilight/MoreWork";
import { WhatIDo } from "views/twilight/WhatIDo";
import { About } from "views/twilight/About";

// The Twilight home page. Sections are added ticket by ticket, in this order:
// hero (T-06), featured work (T-07), more work (T-08), what I do (T-09), about (T-04),
// credentials (T-10), contact (T-11).
export default function TwilightHome() {
    return (
        <TwilightLayout title="Home | Arnav Kaushal" currentHref="/portfolio" hero={<Hero />}>
            <FeaturedWork />
            <MoreWork />
            <WhatIDo />
            <About />
        </TwilightLayout>
    );
}
