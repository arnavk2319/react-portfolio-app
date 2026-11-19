// The active theme is the data-theme attribute on <html>, set before first paint by public/index.html.
// It never changes while the app is running, so reading it once at render time is enough.
export const isTwilight = () => document.documentElement.getAttribute("data-theme") === "twilight";
