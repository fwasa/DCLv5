'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Google Analytics 4 Component
 * Phase 9 - Analytics & Tracking
 * 
 * Tracks:
 * - Page views
 * - Calculator interactions
 * - Form submissions
 * - CTA clicks
 * - Performance metrics
 */

function GoogleAnalyticsTracking({ measurementId }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (!measurementId || typeof window === 'undefined') return;

    const url = pathname + (searchParams ? searchParams.toString() : '');
    
    if (window.gtag) {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics({ measurementId }) {
  if (!measurementId) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracking measurementId={measurementId} />
      </Suspense>
    </>
  );
}

/**
 * Event Tracking Functions
 * 
 * Use these throughout the application to track user interactions
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Calculator Events
export const trackCalculatorStarted = (location = 'unknown') => {
  trackEvent('calculator_started', {
    event_category: 'calculator',
    event_label: location,
    value: 1
  });
};

export const trackCalculatorCompleted = (debtAmount, location = 'unknown') => {
  trackEvent('calculator_completed', {
    event_category: 'calculator',
    event_label: location,
    debt_amount_range: getDebtRange(debtAmount),
    value: 1
  });
};

export const trackCalculatorStep = (stepNumber, stepName) => {
  trackEvent('calculator_step', {
    event_category: 'calculator',
    event_label: `${stepNumber}: ${stepName}`,
    value: stepNumber
  });
};

export const trackCalculatorAbandoned = (stepNumber, stepName) => {
  trackEvent('calculator_abandoned', {
    event_category: 'calculator',
    event_label: `${stepNumber}: ${stepName}`,
    value: stepNumber
  });
};

// CTA Events
export const trackCtaClick = (ctaType, location) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaType} - ${location}`,
    cta_type: ctaType,
    page_location: location
  });
};

export const trackPhoneNumberClick = (location) => {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: location,
    value: 1
  });
};

// Form Events
export const trackFormStarted = (formType) => {
  trackEvent('form_started', {
    event_category: 'form',
    event_label: formType
  });
};

export const trackFormSubmitted = (formType, optedIn) => {
  trackEvent('form_submitted', {
    event_category: 'form',
    event_label: formType,
    opted_in: optedIn ? 'yes' : 'no',
    value: 1
  });
};

// Navigation Events
export const trackNavigation = (from, to) => {
  trackEvent('navigation', {
    event_category: 'navigation',
    from_page: from,
    to_page: to
  });
};

export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link', {
    event_category: 'outbound',
    event_label: linkText,
    link_url: url
  });
};

// FAQ Events
export const trackFaqClick = (question, pageLocation) => {
  trackEvent('faq_click', {
    event_category: 'engagement',
    event_label: question,
    page_location: pageLocation
  });
};

// Performance Events
export const trackPerformance = (metric, value) => {
  trackEvent('performance_metric', {
    event_category: 'performance',
    metric_name: metric,
    metric_value: value
  });
};

// Helper Functions
function getDebtRange(amount) {
  if (!amount || isNaN(amount)) return 'unknown';
  
  const num = parseInt(amount);
  if (num < 5000) return 'under_5k';
  if (num < 10000) return '5k_10k';
  if (num < 25000) return '10k_25k';
  if (num < 50000) return '25k_50k';
  if (num < 100000) return '50k_100k';
  return 'over_100k';
}

/**
 * Custom Hook for Tracking
 */
export function useAnalytics() {
  return {
    trackEvent,
    trackCalculatorStarted,
    trackCalculatorCompleted,
    trackCalculatorStep,
    trackCalculatorAbandoned,
    trackCtaClick,
    trackPhoneNumberClick,
    trackFormStarted,
    trackFormSubmitted,
    trackNavigation,
    trackExternalLink,
    trackFaqClick,
    trackPerformance
  };
}

export default GoogleAnalytics;
