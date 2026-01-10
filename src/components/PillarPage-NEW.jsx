'use client';
import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Shield, TrendingDown } from 'lucide-react';

export default function PillarPage() {
  const [selectedState, setSelectedState] = useState('');

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const canadianProvinces = [
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Saskatchewan'
  ];

  const allLocations = [
    ...usStates.map(s => ({ name: s, slug: s.toLowerCase().replace(/\s+/g, '-'), country: 'US' })),
    ...canadianProvinces.map(p => ({ name: p, slug: p.toLowerCase().replace(/\s+/g, '-'), country: 'CA' }))
  ];

  const handleCalculatorStart = () => {
    if (selectedState) {
      const location = allLocations.find(l => l.name === selectedState);
      if (location) {
        window.location.href = `/debt-relief-calculator/${location.slug}/`;
      }
    } else {
      window.location.href = '/debt-relief-calculator/';
    }
  };

  const faqData = [
    {
      question: "How accurate are debt relief calculators?",
      answer: "Our calculators provide estimates based on industry data and historical settlement patterns. While the math is CPA-reviewed for accuracy, actual results depend on creditor willingness to negotiate, your specific circumstances, and program completion. Use estimates as a general guide, not a guarantee."
    },
    {
      question: "Do I need to provide personal information?",
      answer: "No. You can explore the calculator and see example estimates without providing any contact information. Personal details are only requested at the final step if you want to save your results or connect with a debt relief specialist."
    },
    {
      question: "What makes this calculator different?",
      answer: "Unlike many calculators that show only best-case scenarios, we model realistic outcomes based on your debt age, payment status, and other risk factors. We also include all fees in our estimates and provide state-specific legal information."
    },
    {
      question: "Is this free to use?",
      answer: "Yes, completely free. No credit card required, no hidden charges, no subscription. Our educational calculator is designed to help you understand your options before making any financial decisions."
    }
  ];

  return (
    <div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.6;
          color: #1e293b;
        }

        /* Hero Section - Calculator First */
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 20px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 20px;
          margin-bottom: 30px;
          opacity: 0.95;
        }

        .trust-badges {
          display: flex;
          gap: 30px;
          margin-top: 30px;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .trust-badge svg {
          width: 20px;
          height: 20px;
        }

        /* Calculator Card */
        .calculator-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .calculator-card h2 {
          font-size: 24px;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .calculator-card p {
          color: #64748b;
          margin-bottom: 24px;
        }

        .state-selector {
          margin-bottom: 20px;
        }

        .state-selector label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 8px;
        }

        .state-selector select {
          width: 100%;
          padding: 14px 16px;
          font-size: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .state-selector select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }

        .cta-button {
          width: 100%;
          padding: 16px 24px;
          font-size: 18px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102,126,234,0.4);
        }

        .quick-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }

        .quick-fact {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
        }

        .quick-fact svg {
          width: 16px;
          height: 16px;
          color: #10b981;
        }

        /* Benefits Section */
        .benefits {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .benefits h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 16px;
        }

        .benefits-subtitle {
          text-align: center;
          font-size: 18px;
          color: #64748b;
          margin-bottom: 60px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .benefit-card {
          text-align: center;
          padding: 32px 24px;
        }

        .benefit-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit-icon svg {
          width: 32px;
          height: 32px;
          color: white;
        }

        .benefit-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .benefit-card p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.7;
        }

        /* How It Works */
        .how-it-works {
          background: #f8fafc;
          padding: 80px 20px;
        }

        .how-it-works-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .how-it-works h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 60px;
        }

        .steps {
          display: grid;
          gap: 32px;
        }

        .step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .step-number {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          color: white;
        }

        .step-content h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .step-content p {
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        /* FAQ Section */
        .faq {
          max-width: 900px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .faq h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 60px;
        }

        .faq-item {
          margin-bottom: 24px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: 20px 24px;
          background: white;
          border: none;
          font-size: 18px;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s;
        }

        .faq-question:hover {
          background: #f8fafc;
        }

        .faq-answer {
          padding: 0 24px 20px 24px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 20px;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .cta-section .cta-button {
          max-width: 400px;
          margin: 0 auto;
          background: white;
          color: #667eea;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-content h1 {
            font-size: 36px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .step {
            grid-template-columns: 1fr;
          }

          .quick-facts {
            grid-template-columns: 1fr;
          }
        }

        /* Footer */
        .footer {
          background: #1e293b;
          color: #94a3b8;
          padding: 60px 20px 40px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          color: white;
          font-size: 16px;
          margin-bottom: 16px;
        }

        .footer-section p {
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .footer-legal {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      {/* Hero Section with Calculator */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Free Debt Relief Calculator</h1>
            <p>
              Get personalized estimates in 3 minutes. See potential savings, timelines, and costs
              with our CPA-reviewed calculator trusted by thousands.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield />
                <span>CPA Reviewed</span>
              </div>
              <div className="trust-badge">
                <CheckCircle />
                <span>No Credit Check</span>
              </div>
              <div className="trust-badge">
                <TrendingDown />
                <span>Free Forever</span>
              </div>
            </div>
          </div>

          <div className="calculator-card">
            <h2>Start Your Estimate</h2>
            <p>Choose your location for state-specific information</p>

            <div className="state-selector">
              <label htmlFor="state-select">Your State or Province (Optional)</label>
              <select 
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">National Calculator</option>
                <optgroup label="United States">
                  {usStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </optgroup>
                <optgroup label="Canada">
                  {canadianProvinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </optgroup>
              </select>
            </div>

            <button className="cta-button" onClick={handleCalculatorStart}>
              <Calculator size={20} />
              Calculate My Savings
              <ArrowRight size={20} />
            </button>

            <div className="quick-facts">
              <div className="quick-fact">
                <CheckCircle />
                <span>Takes 3 minutes</span>
              </div>
              <div className="quick-fact">
                <CheckCircle />
                <span>No registration</span>
              </div>
              <div className="quick-fact">
                <CheckCircle />
                <span>100% private</span>
              </div>
              <div className="quick-fact">
                <CheckCircle />
                <span>No obligations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Why Use Our Debt Relief Calculator?</h2>
        <p className="benefits-subtitle">Trusted by thousands to understand their debt relief options</p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <Shield />
            </div>
            <h3>CPA-Reviewed Accuracy</h3>
            <p>
              Every calculation reviewed by a Certified Public Accountant for mathematical
              accuracy and realistic modeling.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <TrendingDown />
            </div>
            <h3>State-Specific Information</h3>
            <p>
              Get estimates tailored to your jurisdiction with relevant debt laws, statute of
              limitations, and exemption data.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <CheckCircle />
            </div>
            <h3>Complete Transparency</h3>
            <p>
              We include all fees in our estimates and show you both current path and relief
              path side-by-side for honest comparison.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="how-it-works-container">
          <h2>How It Works</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Answer 12 Simple Questions</h3>
                <p>
                  Tell us about your debt amount, monthly payments, employment status, and financial
                  situation. Most people complete this in 2-3 minutes using our intuitive form.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>See Your Personalized Estimate</h3>
                <p>
                  Get immediate results showing your current payment path vs. potential debt relief
                  path, including estimated savings, timelines, and monthly payments.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Explore Your Options</h3>
                <p>
                  Review the detailed breakdown, understand how we calculated your estimate, and
                  optionally connect with a debt relief specialist if you want to discuss further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question">{faq.question}</button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>Ready to Understand Your Options?</h2>
        <p>Start your free debt relief estimate in less than 3 minutes</p>
        <button className="cta-button" onClick={handleCalculatorStart}>
          <Calculator size={20} />
          Calculate My Savings Now
          <ArrowRight size={20} />
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>DebtCalculatorLab</h3>
              <p>
                Independent debt relief calculators providing transparent, CPA-reviewed estimates
                to help consumers understand their options.
              </p>
              <p>(c) 2025 LENURA VENTURES INC. All rights reserved.</p>
            </div>

            <div className="footer-section">
              <h3>Calculators</h3>
              <div className="footer-links">
                <a href="/debt-relief-calculator/" className="footer-link">Debt Relief Calculator</a>
                <a href="/debt-calculators/" className="footer-link">All Calculators</a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Company</h3>
              <div className="footer-links">
                <a href="/about/" className="footer-link">About Us</a>
                <a href="/methodology/" className="footer-link">Methodology</a>
                <a href="/disclaimers/" className="footer-link">Disclaimers</a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <div className="footer-links">
                <a href="/privacy-policy/" className="footer-link">Privacy Policy</a>
                <a href="/terms-of-service/" className="footer-link">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>DebtCalculatorLab - Educational debt relief estimates</p>
            <div className="footer-legal">
              <span>Not financial advice</span>
              <span>Independent platform</span>
              <span>CPA-reviewed calculations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
