'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Import the production-ready calculator component from Phase 5
import DebtReliefCalculator from './DebtCalculator';

/**
 * State Page Template Component
 * 
 * Reusable template for all 50 US state pages.
 * Accepts state-specific data as props and generates a unique,
 * SEO-optimized page with state context, FAQs, and statute references.
 * 
 * Usage:
 * <StatePage stateData={californiaData} />
 */

const StatePage = ({ stateData }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showStatutes, setShowStatutes] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Destructure state data
  const {
    stateName,
    stateSlug,
    metaDescription,
    introText,
    faqs,
    statutes,
    neighboringStates
  } = stateData;

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Schema: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Debt Calculators",
        "item": "https://debtcalculatorlab.com/debt-calculators/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Debt Relief Calculator",
        "item": "https://debtcalculatorlab.com/debt-relief-calculator/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": stateName,
        "item": `https://debtcalculatorlab.com/debt-relief-calculator/${stateSlug}/`
      }
    ]
  };

  return (
    <div className="state-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .state-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: #f7fafc;
          padding: 12px 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb-nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          color: #667eea;
          text-decoration: none;
          transition: color 0.2s;
        }

        .breadcrumb-link:hover {
          color: #5568d3;
          text-decoration: underline;
        }

        .breadcrumb-separator {
          color: #a0aec0;
        }

        .breadcrumb-current {
          color: #4a5568;
        }

        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 48px 24px;
          text-align: center;
        }

        .page-header h1 {
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .reviewer-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 12px;
        }

        /* Intro Section */
        .intro-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 32px 24px;
          background: #f7fafc;
        }

        .intro-text {
          font-size: 17px;
          line-height: 1.8;
          color: #2d3748;
          margin-bottom: 20px;
        }

        .state-cta {
          display: inline-block;
          padding: 14px 28px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .state-cta:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        /* Calculator Container */
        .calculator-container {
          margin: 48px 0;
        }

        /* Statute Section */
        .statute-section {
          max-width: 900px;
          margin: 48px auto;
          padding: 0 24px;
        }

        .statute-expandable {
          background: #eff6ff;
          border: 2px solid #3b82f6;
          border-radius: 8px;
          overflow: hidden;
        }

        .statute-button {
          width: 100%;
          padding: 20px 24px;
          background: #eff6ff;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: background 0.2s;
        }

        .statute-button:hover {
          background: #dbeafe;
        }

        .statute-title {
          font-size: 17px;
          font-weight: 600;
          color: #1e40af;
          text-align: left;
        }

        .statute-icon {
          color: #3b82f6;
          flex-shrink: 0;
        }

        .statute-content {
          padding: 20px 24px;
          background: white;
          border-top: 1px solid #3b82f6;
        }

        .statute-content p {
          font-size: 15px;
          line-height: 1.8;
          color: #1e3a8a;
          margin-bottom: 12px;
        }

        .statute-content p:last-child {
          margin-bottom: 0;
        }

        .statute-disclaimer {
          font-size: 14px;
          color: #1e40af;
          font-style: italic;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #dbeafe;
        }

        /* FAQ Section */
        .faq-section {
          background: white;
          padding: 48px 24px;
        }

        .faq-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-content h2 {
          font-size: 28px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 32px;
          text-align: center;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question-button {
          width: 100%;
          padding: 20px 24px;
          background: #f7fafc;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          transition: background 0.2s;
        }

        .faq-question-button:hover {
          background: #edf2f7;
        }

        .faq-question-text {
          font-size: 17px;
          font-weight: 600;
          color: #1a202c;
          flex: 1;
        }

        .faq-icon {
          color: #667eea;
          flex-shrink: 0;
        }

        .faq-answer {
          padding: 20px 24px;
          background: white;
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          border-top: 1px solid #e2e8f0;
        }

        /* Neighboring States */
        .neighboring-states {
          max-width: 900px;
          margin: 48px auto;
          padding: 0 24px;
        }

        .neighboring-states h2 {
          font-size: 24px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 20px;
        }

        .neighboring-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .neighboring-link {
          display: block;
          padding: 16px 20px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
        }

        .neighboring-link:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        /* Footer */
        .state-footer {
          background: #f7fafc;
          padding: 32px 24px;
          border-top: 1px solid #e2e8f0;
        }

        .footer-content {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #667eea;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #5568d3;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 28px;
          }

          .faq-content h2 {
            font-size: 24px;
          }

          .neighboring-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="/debt-calculators/" className="breadcrumb-link">Debt Calculators</a>
          <span className="breadcrumb-separator">-º</span>
          <a href="/debt-relief-calculator/" className="breadcrumb-link">Debt Relief Calculator</a>
          <span className="breadcrumb-separator">-º</span>
          <span className="breadcrumb-current">{stateName}</span>
        </nav>
      </div>

      {/* Page Header */}
      <header className="page-header">
        <h1>Debt Relief Calculator - {stateName}</h1>
        <div className="reviewer-badge">
          Calculations reviewed for accuracy by a Certified Public Accountant
        </div>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <p className="intro-text">{introText}</p>
        <a href="#calculator" className="state-cta">Get Your {stateName} Estimate</a>
      </section>

      {/* Calculator Embed */}
      <div className="calculator-container" id="calculator">
        <DebtReliefCalculator initialState={stateName} />
      </div>

      {/* Statute Reference */}
      {statutes && (
        <div className="statute-section">
          <div className="statute-expandable">
            <button
              className="statute-button"
              onClick={() => setShowStatutes(!showStatutes)}
              aria-expanded={showStatutes}
            >
              <span className="statute-title">
                “œ {stateName} Jurisdiction Information
              </span>
              {showStatutes ? (
                <ChevronUp className="statute-icon" size={24} />
              ) : (
                <ChevronDown className="statute-icon" size={24} />
              )}
            </button>
            {showStatutes && (
              <div className="statute-content">
                {statutes.map((statute, index) => (
                  <p key={index}>{statute}</p>
                ))}
                <p className="statute-disclaimer">
                  This information is for educational purposes and does not constitute legal advice. 
                  Consult with a licensed attorney for specific legal guidance in {stateName}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* State FAQs */}
      <div className="faq-section">
        <div className="faq-content">
          <h2>Common Questions from {stateName} Residents</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question-button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={expandedFaq === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="faq-icon" size={24} />
                  ) : (
                    <ChevronDown className="faq-icon" size={24} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neighboring States */}
      {neighboringStates && neighboringStates.length > 0 && (
        <div className="neighboring-states">
          <h2>Debt Relief Calculators for Nearby States</h2>
          <div className="neighboring-grid">
            {neighboringStates.map((neighbor) => (
              <a
                key={neighbor.slug}
                href={`/debt-relief-calculator/${neighbor.slug}/`}
                className="neighboring-link"
              >
                {neighbor.name} Debt Relief Calculator
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="state-footer">
        <div className="footer-content">
          <a href="/debt-relief-calculator/" className="footer-link">Debt Relief Calculator</a>
          <a href="/debt-calculators/" className="footer-link">All Calculators</a>
          <a href="/privacy-policy/" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service/" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default StatePage;
