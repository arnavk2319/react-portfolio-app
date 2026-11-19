import React from "react";
import { TwilightLayout } from "components/TwilightLayout";
import { About } from "views/twilight/About";

// The Twilight home page. Sections are added ticket by ticket, in this order:
// hero (T-06), featured work (T-07), more work (T-08), what I do (T-09), about (T-04),
// credentials (T-10), contact (T-11).
export default function TwilightHome() {
    return (
        <TwilightLayout title="Home | Arnav Kaushal" currentHref="/portfolio">
            <About />
        </TwilightLayout>
    );
}
