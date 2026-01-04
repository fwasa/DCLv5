'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, ChevronRight } from 'lucide-react';
// Import the production-ready calculator component from Phase 5
import DebtReliefCalculator from './DebtCalculator';

const NationalToolPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Tool-specific FAQs (8 total)
  const faqs = [
    {
      question: "What does the Debt Relief Savings Estimator calculate?",
      answer: "The Debt Relief Savings Estimator calculates two distinct scenarios: your current path (continuing to make minimum payments) and a potential debt relief path (through debt settlement). For the current path, it models how long it will take to pay off your debt with compound interest, showing total costs and timeline. For the relief path, it estimates potential settlement amounts based on your debt age, payment status, and other factors, then calculates monthly payments and total program costs including settlement company fees. The tool provides a side-by-side comparison so you can see potential monthly savings, total debt reduction, and time to becoming debt-free under each scenario."
    },
    {
      question: "What information do I need to use this calculator?",
      answer: "You'll need to provide 12 pieces of information to get your estimate. Financial details include your total unsecured debt amount, current monthly minimum payments, average interest rate, and the type of debt (credit cards, medical, etc.). You'll also indicate your oldest debt's age and current payment status. Personal financial information includes your employment status, monthly household income, and essential monthly expenses. Optionally, you can indicate any hardship circumstances you've experienced. Finally, to see your results, you'll provide basic contact information (name, email, phone). Having recent credit card statements or loan documents handy makes the process faster, but you can estimate if exact numbers aren't immediately available."
    },
    {
      question: "How long does it take to get my estimate?",
      answer: "Most people complete the calculator in 2-3 minutes. The tool uses a 12-question flow designed to be quick while gathering the information needed for accurate estimates. Each question is straightforward—many use sliders or dropdown menus for faster input. You can move back and forth between questions if you need to review or change answers. Once you complete all questions and submit, your personalized estimate appears immediately on screen. There's no waiting period, email verification, or credit check required. The entire process from start to viewing your results typically takes less than five minutes, even if you need to look up exact figures from statements."
    },
    {
      question: "How accurate is my debt relief estimate?",
      answer: "Our estimates are based on industry data, settlement patterns, and mathematical modeling reviewed by a Certified Public Accountant. However, accuracy depends on factors the calculator cannot predict. The settlement percentages we use reflect historical averages from FTC and CFPB data—what creditors have typically accepted. Your actual results will vary based on whether your specific creditors agree to negotiate, what settlement percentage they'll accept, how your financial situation evolves during a program, and whether you can maintain payments throughout the process. Think of the estimate as an educated projection based on thousands of similar cases, not a guarantee. The math is correct, but real-world outcomes depend on creditor participation and your individual circumstances."
    },
    {
      question: "Do I have to opt in to use the calculator?",
      answer: "No. You can use the calculator and view your complete results without opting in to anything. The calculator's purpose is education—helping you understand potential debt relief scenarios before making any decisions. At the final step, you'll provide contact information to see your results, but there's an optional consent checkbox if you'd like to receive a one-time phone call to discuss your estimate. This consent is explicitly optional and clearly marked. You can check it or leave it unchecked—either way, you'll see your full results. Consent is not a condition of using the calculator. We believe you should understand your options first, then decide if you want to speak with someone."
    },
    {
      question: "What happens after I complete the calculator?",
      answer: "After completing all 12 questions, you'll immediately see your personalized results screen showing a side-by-side comparison of your current path versus potential relief path, estimated monthly savings and total debt reduction, projected timeline to becoming debt-free, and an explanation of how we calculated your specific estimates. Based on your situation, you may see either a phone number to call a debt relief specialist (if your profile suggests settlement might be beneficial) or an optional form to request a consultation (for exploratory cases). You're never obligated to take any action—the results are educational. If you opted in for contact, a representative may call to discuss your estimate. If you didn't opt in, that's the end of the process unless you choose to reach out."
    },
    {
      question: "What's the difference between 'Current Path' and 'Relief Path'?",
      answer: "The Current Path shows what happens if you continue making minimum payments on your debt without seeking relief. We calculate how long it takes to pay off your debt with compound interest, the total amount you'll pay (principal plus all interest), and your monthly payment amount. This path assumes nothing changes—same interest rates, same minimum payments. The Relief Path models a debt settlement scenario where you work with a settlement company to negotiate reduced balances with your creditors. This calculation factors in typical settlement percentages based on your debt age and payment status, settlement company fees (usually 20-25% of enrolled debt), and a realistic monthly payment based on your disposable income. The side-by-side comparison shows potential savings and trade-offs between these approaches."
    },
    {
      question: "Does my estimate include settlement company fees?",
      answer: "Yes. All cost estimates in the Relief Path include settlement company fees, which typically range from 20-25% of your enrolled debt amount. Many calculators show only the settled debt amount, making relief programs look cheaper than they actually are. We include fees because we want you to see the complete financial picture. Our estimates show the settled amount (what you'll pay creditors), the settlement company fees, and the total program cost (both combined). This transparency means your estimated 'total reduction' accounts for fees—it's your true savings compared to paying debts in full. When you see potential savings on the results screen, those numbers already factor in all costs, not just the negotiated debt reduction."
    }
  ];

  // US States for geographic selector
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

  // Canadian Provinces (excluding Quebec)
  const canadianProvinces = [
    'Ontario', 'British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba',
    'New Brunswick', 'Nova Scotia', 'Prince Edward Island', 'Newfoundland and Labrador'
  ];

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

  // Schema: WebApplication
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Debt Relief Savings Estimator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate potential debt relief savings. Free, private estimate shows monthly payment reductions and payoff timeline.",
    "url": "https://debtcalculatorlab.com/debt-relief-calculator/"
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
      }
    ]
  };

  return (
    <div className="national-tool-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .national-tool-page {
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

        .page-header-subtitle {
          font-size: 18px;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Content Sections */
        .content-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        .content-section h2 {
          font-size: 28px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 3px solid #667eea;
        }

        .content-section h3 {
          font-size: 22px;
          font-weight: 600;
          color: #2d3748;
          margin-top: 32px;
          margin-bottom: 16px;
        }

        .content-section p {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 16px;
        }

        .content-section ul {
          margin-left: 24px;
          margin-bottom: 16px;
        }

        .content-section li {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 8px;
        }

        /* Calculator Container */
        .calculator-container {
          margin: 48px 0;
        }

        /* Methodology Link */
        .methodology-link {
          display: inline-block;
          margin-top: 16px;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .methodology-link:hover {
          text-decoration: underline;
        }

        /* FAQ Section */
        .faq-section {
          background: #f7fafc;
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
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question-button {
          width: 100%;
          padding: 20px 24px;
          background: white;
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
          background: #f7fafc;
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
          background: #fafbfc;
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          border-top: 1px solid #e2e8f0;
        }

        /* Geographic Selector */
        .geo-section {
          max-width: 900px;
          margin: 48px auto;
          padding: 0 24px;
        }

        .geo-section h2 {
          font-size: 28px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 24px;
          text-align: center;
        }

        .geo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 32px;
        }

        .geo-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 32px;
        }

        .geo-card h3 {
          font-size: 22px;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 16px;
        }

        .geo-card p {
          font-size: 15px;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .state-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-top: 20px;
        }

        .state-link {
          padding: 8px 12px;
          background: #f7fafc;
          border-radius: 6px;
          color: #667eea;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s;
          display: block;
        }

        .state-link:hover {
          background: #667eea;
          color: white;
        }

        .canada-disclaimer {
          font-size: 14px;
          color: #92400e;
          background: #fffbeb;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #f59e0b;
          margin-bottom: 20px;
        }

        /* Compliance Footer */
        .compliance-footer {
          background: #1a202c;
          color: #a0aec0;
          padding: 48px 24px;
        }

        .compliance-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .compliance-disclaimer {
          background: #2d3748;
          padding: 24px;
          border-radius: 8px;
          border-left: 4px solid #f59e0b;
          margin-bottom: 32px;
        }

        .compliance-disclaimer h3 {
          color: #fbbf24;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .compliance-disclaimer p {
          color: #e2e8f0;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .compliance-disclaimer p:last-child {
          margin-bottom: 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid #2d3748;
        }

        .footer-link {
          color: #a0aec0;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #667eea;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 28px;
          }

          .content-section h2 {
            font-size: 24px;
          }

          .content-section h3 {
            font-size: 20px;
          }

          .geo-grid {
            grid-template-columns: 1fr;
          }

          .state-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
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
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Debt Relief Calculator</span>
        </nav>
      </div>

      {/* Page Header */}
      <header className="page-header">
        <h1>Debt Relief Calculator — Estimate Your Savings</h1>
        <p className="page-header-subtitle">
          Model how debt settlement could affect your monthly payments and payoff timeline. 
          Get your personalized estimate in 2 minutes.
        </p>
      </header>

      {/* Calculator Embed */}
      <div className="calculator-container">
        <DebtReliefCalculator />
      </div>

      {/* How This Calculator Works */}
      <section className="content-section">
        <h2>How This Calculator Works</h2>

        <h3>What We Calculate</h3>
        <p>
          This calculator models two distinct financial scenarios to help you understand your options. 
          First, we calculate your <strong>current path</strong>—what happens if you continue making 
          minimum payments on your existing debt. This shows how long it will take to become debt-free, 
          how much total interest you'll pay, and what your financial trajectory looks like without 
          intervention.
        </p>
        <p>
          Second, we model a <strong>potential relief path</strong> through debt settlement. This scenario 
          estimates what could happen if you work with a settlement company to negotiate reduced balances 
          with your creditors. We calculate potential settlement amounts based on industry data, add 
          realistic program fees, and show what your monthly payments and total costs might be under 
          this approach.
        </p>
        <p>
          The side-by-side comparison reveals potential monthly savings, total debt reduction, and timeline 
          differences between these paths. This visualization helps you weigh the trade-offs and understand 
          whether debt relief might be worth exploring further.
        </p>

        <h3>Variables We Use</h3>
        <p>
          Our calculations incorporate 12 key variables that influence debt relief outcomes. Financial 
          variables include your total unsecured debt amount, current monthly minimum payments, average 
          interest rate, and the predominant type of debt (credit cards, medical bills, personal loans, 
          or mixed). These numbers directly affect both your current payment timeline and settlement 
          potential.
        </p>
        <p>
          Situational variables shape settlement likelihood: how old your oldest unpaid debt is, your 
          current payment status (current, occasionally late, frequently missing, or 60+ days behind), 
          and your employment status. Creditors negotiate differently based on these factors—older debts 
          in default typically settle for larger reductions than recent debts where you're current on payments.
        </p>
        <p>
          Personal financial variables determine affordability: your monthly household income, essential 
          monthly expenses, and optionally, any documented hardship circumstances (job loss, medical emergency, 
          divorce, etc.). These factors help us calculate realistic monthly payment amounts and program 
          durations based on your actual ability to pay.
        </p>

        <h3>Understanding Your Results</h3>
        <p>
          Your results screen shows comprehensive information to help you evaluate both paths. For the 
          current path, you'll see the total amount you'll pay over time (including all interest), your 
          monthly payment amount, and how many months or years until you're debt-free. If your minimum 
          payment doesn't even cover the monthly interest charges, we'll flag this as "unsustainable" 
          and explain why this path leads nowhere.
        </p>
        <p>
          For the relief path, results include the estimated settled amount (what you'd pay creditors 
          after negotiation), settlement company fees (typically 20-25% of enrolled debt), total program 
          cost (settled amount plus fees), estimated monthly payment based on your disposable income, 
          and program duration (usually 24-48 months). We show potential monthly savings and total debt 
          reduction compared to your current path.
        </p>
        <p>
          Results also include a confidence score that determines whether we suggest speaking with a debt 
          relief specialist (high confidence) or simply offer an optional consultation form (exploratory 
          cases). This routing is based on factors like debt amount, payment status, and debt-to-income 
          ratio—indicators that settlement might be particularly beneficial in your situation.
        </p>

        <a href="/debt-calculators/" className="methodology-link">
          Explore all our debt calculators →
        </a>
      </section>

      {/* What Your Estimate Means */}
      <section className="content-section">
        <h2>What Your Estimate Means</h2>

        <h3>Current Path vs. Relief Path</h3>
        <p>
          The <strong>Current Path</strong> represents your financial trajectory if nothing changes. We 
          use standard amortization formulas with compound interest to calculate exactly how long it takes 
          to pay off your debt making minimum payments. Every month, interest accrues on your remaining 
          balance, and only the portion of your payment exceeding that interest reduces your principal. 
          This path shows the reality of minimum payments—often taking 5-10+ years with total costs far 
          exceeding your original debt amount due to accumulated interest.
        </p>
        <p>
          The <strong>Relief Path</strong> models a debt settlement scenario where you stop making payments 
          to creditors and instead save money in a dedicated account. Once sufficient funds accumulate, a 
          settlement company negotiates lump-sum payments with your creditors for less than the full balance. 
          This path typically takes 24-48 months, reduces your total debt burden, and can lower monthly 
          payments—but it involves stopping payments (which damages credit), settlement company fees, and 
          the uncertainty of creditor cooperation.
        </p>
        <p>
          Neither path is universally "better"—the right choice depends on your specific situation, financial 
          goals, and circumstances. The comparison helps you understand the trade-offs: the current path 
          maintains your credit but may be financially unsustainable, while the relief path offers potential 
          savings but comes with credit consequences and fees.
        </p>

        <h3>Settlement Percentages Explained</h3>
        <p>
          Settlement percentages represent what portion of your debt you'd actually pay after negotiation. 
          For example, a 50% settlement percentage means you'd pay 50 cents on the dollar—a $10,000 debt 
          might settle for $5,000. These percentages aren't arbitrary; they're based on documented patterns 
          from Federal Trade Commission and Consumer Financial Protection Bureau data showing what creditors 
          have historically accepted.
        </p>
        <p>
          Several factors influence settlement percentages. <strong>Debt age</strong> is crucial—creditors 
          are more willing to negotiate on older debts, especially those approaching statute of limitations. 
          <strong>Payment status</strong> matters significantly; accounts in severe default (60+ days behind) 
          typically settle for larger reductions than current accounts. <strong>Debt type</strong> affects 
          negotiations too; medical debt often settles more favorably than credit card debt because medical 
          providers are less aggressive collectors.
        </p>
        <p>
          Our calculator uses a lookup table with base percentages by debt age, then applies modifiers for 
          payment status, debt type, documented hardship, and high debt-to-income ratios. The final percentage 
          is clamped between 40% and 75%—meaning settlements range from paying 40 cents on the dollar (best 
          case, 60% debt reduction) to 75 cents on the dollar (conservative case, 25% reduction). Your individual 
          percentage depends on your specific circumstances as entered in the calculator.
        </p>

        <h3>Fees and Total Costs</h3>
        <p>
          All relief path estimates include settlement company fees because transparency matters. Settlement 
          companies typically charge 20-25% of your <em>enrolled debt amount</em> (what you owe when you 
          start, not what you settle for). This is an industry standard and it's legal, but many calculators 
          hide these fees to make programs look cheaper than they are.
        </p>
        <p>
          Here's an example: if you enroll $30,000 in debt and settle it at 50% ($15,000 to creditors), 
          the settlement company might charge 22.5% of the original $30,000, which is $6,750. Your total 
          program cost would be $21,750 ($15,000 settled + $6,750 fees), not just the $15,000 settlement 
          amount. Our calculator shows you both numbers clearly so you understand the complete financial picture.
        </p>
        <p>
          The "estimated total reduction" you see in results accounts for these fees. If we show potential 
          savings of $8,250, that's your true savings after paying both creditors and settlement company 
          fees—compared to paying your debts in full via minimum payments. This honest accounting helps you 
          make informed decisions rather than discovering hidden costs later in the process.
        </p>
      </section>

      {/* FAQs */}
      <div className="faq-section">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
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

      {/* Geographic Selector */}
      <div className="geo-section" id="states">
        <h2>Available in Your State or Province</h2>

        <div className="geo-grid">
          {/* US States */}
          <div className="geo-card">
            <h3>United States</h3>
            <p>
              Our calculator is available for all 50 U.S. states. Select your state below for 
              jurisdiction-specific information and estimates.
            </p>
            <div className="state-list">
              {usStates.slice(0, 10).map(state => (
                <a 
                  key={state} 
                  href={`/debt-relief-calculator/${state.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="state-link"
                >
                  {state}
                </a>
              ))}
            </div>
            <a href="#all-states" className="methodology-link" style={{display: 'block', marginTop: '16px'}}>
              See all 50 states →
            </a>
          </div>

          {/* Canadian Provinces */}
          <div className="geo-card" id="provinces">
            <h3>Canada</h3>
            <div className="canada-disclaimer">
              Available across many Canadian provinces (excluding Quebec).
            </div>
            <p>
              Our calculator serves 9 Canadian provinces with PIPEDA-compliant privacy standards 
              and province-specific context.
            </p>
            <div className="state-list">
              {canadianProvinces.map(province => (
                <a 
                  key={province}
                  href={`/debt-relief-calculator/${province.toLowerCase().replace(/\s+/g, '-')}/`}
                  className="state-link"
                >
                  {province}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Footer */}
      <footer className="compliance-footer">
        <div className="compliance-content">
          <div className="compliance-disclaimer">
            <h3>⚠️ Important Disclosure</h3>
            <p>
              Debt Calculator Lab is not a law firm or financial advisor. Results shown are modeled 
              estimates for educational purposes only. Actual results depend on creditor participation, 
              eligibility, and personal financial history.
            </p>
            <p>
              This calculator does not guarantee debt relief, settlement acceptance, or specific outcomes. 
              Individual results vary based on creditor willingness to negotiate, your ability to maintain 
              payments throughout a program, and changes in your financial situation.
            </p>
            <p>
              Settlement programs may negatively impact your credit score. Creditors are not obligated 
              to settle or reduce your debt. Settlement companies typically charge 20-25% of enrolled 
              debt as fees.
            </p>
            <p>
              Consider speaking with a financial advisor, attorney, or nonprofit credit counselor before 
              enrolling in any debt relief program.
            </p>
          </div>

          <div className="footer-links">
            <a href="/debt-calculators/" className="footer-link">All Calculators</a>
            <a href="/privacy-policy/" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-service/" className="footer-link">Terms of Service</a>
            <a href="/methodology/" className="footer-link">Methodology</a>
            <a href="/about/" className="footer-link">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NationalToolPage;
