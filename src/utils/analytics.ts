/**
 * Sends an event to Google Analytics via gtag
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('gtag not found');
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_status: success ? 'success' : 'error'
  });
};

/**
 * Track outbound links
 */
export const trackOutboundLink = (url: string, linkText: string = '') => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaId: string, ctaText: string = '') => {
  trackEvent('cta_click', {
    cta_id: ctaId,
    cta_text: ctaText
  });
};