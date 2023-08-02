export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING;

export const pageview = url => {
  window.gtag &&
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
  window.gtag &&
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
};
