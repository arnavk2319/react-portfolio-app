export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
    });
  }
};

// Custom events. `transport_type: 'beacon'` makes the browser send the hit even when the click
// leaves the page straight away (same-tab links, the contact form posting to Formspree).
export const trackEvent = (action, params) => {
  if (window.gtag) {
    window.gtag('event', action, { transport_type: 'beacon', ...params });
  }
};
