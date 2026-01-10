'use client';
import React from 'react';
import { Award, ExternalLink, Shield, BookOpen, Building2 } from 'lucide-react';

/**
 * Reviewer Bio Page Component
 * Phase 8 - E-E-A-T Enhancement
 * 
 * Purpose: Establish credibility for "Reviewed by CPA" claim
 * SEO: Person schema for Google Knowledge Graph
 * Compliance: Verifiable credentials for YMYL content
 * 
 * IMPORTANT: Update with actual reviewer details before launch
 */

const ReviewerBioPage = () => {
  // TODO: Replace with actual reviewer information
  const reviewer = {
    name: "[Reviewer Name]",
    credentials: "CPA, [Other Credentials]",
    title: "Certified Public Accountant",
    company: "[Firm Name or Independent]",
    
    // Bio sections
    bio: {
      overview: "With over [X] years of experience in financial analysis and debt relief consulting, [Name] brings deep expertise to reviewing debt calculator methodologies. As a licensed Certified Public Accountant, [he/she] specializes in consumer finance, debt settlement modeling, and financial education tools.",
      
      expertise: [
        "Consumer debt analysis and modeling",
        "Financial calculator methodology review",
        "GAAP-compliant financial projections",
        "Debt settlement program evaluation",
        "Consumer protection compliance"
      ],
      
      education: "[Degree], [University], [Year]",
      
      license: {
        state: "[State]",
        number: "[License Number]",
        verificationUrl: "[State Board URL]"
      },
      
      affiliations: [
        "American Institute of Certified Public Accountants (AICPA)",
        "[State] Society of CPAs",
        "[Other relevant memberships]"
      ]
    },
    
    // Verifiable links for E-E-A-T
    sameAs: [
      "[LinkedIn Profile URL]",
      "[State CPA Board Lookup URL]",
      "[Professional website if applicable]"
    ],
    
    // What they review
    reviewScope: "I review all calculation methodologies, settlement percentage assumptions, fee disclosures, and mathematical accuracy in DebtCalculatorLab's tools. My role is to ensure that estimates are based on sound financial principles and industry data, while clearly communicating limitations and uncertainties."
  };

  // Person Schema for SEO and Knowledge Graph
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": reviewer.name,
    "jobTitle": reviewer.title,
    "description": `${reviewer.credentials} who reviews financial calculator methodologies for accuracy and compliance`,
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Certified Public Accountant",
      "issuedBy": {
        "@type": "Organization",
        "name": `${reviewer.bio.license.state} State Board of Accountancy`
      }
    },
    "sameAs": reviewer.sameAs,
    "knowsAbout": [
      "Financial Analysis",
      "Debt Settlement",
      "Consumer Finance",
      "Financial Calculator Methodology"
    ]
  };

  // BreadcrumbList Schema
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
        "name": "Our Reviewers",
        "item": "https://debtcalculatorlab.com/reviewers/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": reviewer.name,
        "item": `https://debtcalculatorlab.com/reviewers/${reviewer.name.toLowerCase().replace(/\s+/g, '-')}/`
      }
    ]
  };

  return (
    <div className="reviewer-bio-page">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          color: #2d3748;
        }

        .reviewer-bio-page {
          min-height: 100vh;
          background: #f7fafc;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: #ffffff;
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
        }

        .breadcrumb-link {
          color: #667eea;
          text-decoration: none;
        }

        .breadcrumb-link:hover {
          text-decoration: underline;
        }

        .breadcrumb-separator {
          color: #a0aec0;
        }

        /* Header */
        .page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 64px 24px;
          text-align: center;
        }

        .reviewer-credentials {
          font-size: 20px;
          opacity: 0.95;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .reviewer-name {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .reviewer-title {
          font-size: 22px;
          opacity: 0.9;
        }

        /* Main Container */
        .main-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        /* Content Sections */
        .bio-section {
          background: white;
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 32px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .bio-section h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bio-section p {
          color: #4a5568;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .bio-section ul {
          margin-left: 24px;
          margin-bottom: 16px;
        }

        .bio-section li {
          color: #4a5568;
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
        }

        /* Credential Verification */
        .credential-box {
          background: #edf2f7;
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 24px 0;
          border-radius: 8px;
        }

        .credential-box h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 12px;
        }

        .credential-box p {
          color: #4a5568;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .verify-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          margin-top: 12px;
        }

        .verify-link:hover {
          text-decoration: underline;
        }

        /* Expertise List */
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .expertise-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px;
          background: #f7fafc;
          border-radius: 8px;
        }

        .expertise-item svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Review Scope */
        .review-scope-box {
          background: #f0f4ff;
          border: 2px solid #667eea;
          border-radius: 12px;
          padding: 24px;
          margin-top: 24px;
        }

        .review-scope-box h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 12px;
        }

        .review-scope-box p {
          color: #4a5568;
          font-size: 16px;
          line-height: 1.7;
          font-style: italic;
        }

        /* Social Links */
        .social-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          color: #667eea;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
        }

        .social-link:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        /* Footer */
        .page-footer {
          background: #2d3748;
          color: white;
          padding: 48px 24px 24px 24px;
          margin-top: 48px;
        }

        .footer-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-link {
          color: #cbd5e0;
          text-decoration: none;
          margin: 0 12px;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-bottom {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #4a5568;
          font-size: 14px;
          color: #cbd5e0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .reviewer-name {
            font-size: 32px;
          }

          .reviewer-credentials {
            font-size: 18px;
          }

          .reviewer-title {
            font-size: 18px;
          }

          .bio-section {
            padding: 24px 16px;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="/debt-calculators/" className="breadcrumb-link">Debt Calculators</a>
          <span className="breadcrumb-separator">></span>
          <a href="/reviewers/" className="breadcrumb-link">Our Reviewers</a>
          <span className="breadcrumb-separator">></span>
          <span>{reviewer.name}</span>
        </nav>
      </div>

      {/* Header */}
      <header className="page-header">
        <div className="reviewer-credentials">{reviewer.credentials}</div>
        <h1 className="reviewer-name">{reviewer.name}</h1>
        <div className="reviewer-title">{reviewer.title}</div>
      </header>

      <main className="main-container">
        {/* Overview */}
        <section className="bio-section">
          <h2>
            <Shield size={28} />
            Professional Background
          </h2>
          <p>{reviewer.bio.overview}</p>

          <div className="credential-box">
            <h3>CPA License Verification</h3>
            <p><strong>State:</strong> {reviewer.bio.license.state}</p>
            <p><strong>License Number:</strong> {reviewer.bio.license.number}</p>
            <a 
              href={reviewer.bio.license.verificationUrl}
              className="verify-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify License with State Board
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="bio-section">
          <h2>
            <Award size={28} />
            Areas of Expertise
          </h2>
          <div className="expertise-grid">
            {reviewer.bio.expertise.map((area, index) => (
              <div key={index} className="expertise-item">
                <Shield size={20} style={{ color: '#667eea' }} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="bio-section">
          <h2>
            <BookOpen size={28} />
            Education & Credentials
          </h2>
          <p><strong>Education:</strong> {reviewer.bio.education}</p>
          
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginTop: '24px', marginBottom: '12px' }}>
            Professional Affiliations
          </h3>
          <ul>
            {reviewer.bio.affiliations.map((affiliation, index) => (
              <li key={index}>{affiliation}</li>
            ))}
          </ul>
        </section>

        {/* Review Role */}
        <section className="bio-section">
          <h2>
            <Building2 size={28} />
            Role at DebtCalculatorLab
          </h2>
          <p>
            {reviewer.name} serves as the independent methodological reviewer for DebtCalculatorLab's 
            debt analysis tools. This role ensures that all calculator logic, assumptions, and 
            disclosures meet professional standards for financial modeling and consumer transparency.
          </p>

          <div className="review-scope-box">
            <h3>What I Review</h3>
            <p>"{reviewer.reviewScope}"</p>
          </div>

          <p style={{ marginTop: '24px', fontSize: '15px', color: '#718096' }}>
            <strong>Important:</strong> {reviewer.name}'s review confirms mathematical accuracy and 
            methodological soundness-it does not constitute financial advice or guarantee any 
            individual outcomes. Calculator users should consult qualified professionals before 
            making financial decisions.
          </p>
        </section>

        {/* Verifiable Links */}
        <section className="bio-section">
          <h2>
            <ExternalLink size={28} />
            Verify Credentials
          </h2>
          <p>
            For transparency and E-E-A-T compliance, {reviewer.name}'s credentials can be verified 
            through the following independent sources:
          </p>
          <div className="social-links">
            {reviewer.sameAs.map((link, index) => (
              <a 
                key={index}
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verification Link {index + 1}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div>
            <a href="/debt-calculators/" className="footer-link">Debt Calculators</a>
            <a href="/about/" className="footer-link">About</a>
            <a href="/methodology/" className="footer-link">Methodology</a>
            <a href="/privacy-policy/" className="footer-link">Privacy</a>
          </div>
          <div className="footer-bottom">
            <p> 2024 LENURA VENTURES INC. DebtCalculatorLab is a trademark of LENURA VENTURES INC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReviewerBioPage;
