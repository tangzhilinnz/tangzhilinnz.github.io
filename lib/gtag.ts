// Google Analytics utility functions
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

// Hardcoded Measurement ID for GitHub Pages deployment
export const GA_MEASUREMENT_ID = 'G-C01XVER36J';

// Track page views
export const pageview = (url: string) => {
    if (!window.gtag) return;
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

// Track custom events
interface EventParams {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

export const event = ({action, category, label, value}: EventParams) => {
    if (!window.gtag) return;
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
