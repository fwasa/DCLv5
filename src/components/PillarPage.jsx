'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle, Lock, ChevronDown, ChevronUp, Calculator, TrendingDown, BarChart3 } from 'lucide-react';

const PillarPageDebtCalculators = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ data - all 10 category-level FAQs
  const faqs = [
    {
      question: "What does a debt calculator do?",
      answer: "A debt calculator is an educational tool that models potential debt relief scenarios based on your financial information. It takes your debt amount, interest rates, payment status, and other factors to create estimates showing different paths forward. These calculators help you visualize what your current trajectory looks like versus potential relief options, allowing you to explore scenarios before making any commitments. The calculations are based on industry data, settlement patterns, and mathematical modeling-”not guarantees or financial advice."
    },
    {
      question: "What types of debt calculators are available?",
      answer: "Debt calculators come in several forms, each designed for different purposes. Debt settlement calculators model potential savings through negotiated reductions with creditors. Debt consolidation calculators show how combining multiple debts into one payment might work. Minimum payment calculators illustrate how long it takes to pay off debt making only minimum payments. Debt-free date calculators project when you'll be out of debt based on different payment amounts. DebtCalculatorLab focuses on debt relief and settlement modeling, with plans to expand to additional calculator types in the future."
    },
    {
      question: "Is using a debt calculator the same as getting financial advice?",
      answer: "No. Debt calculators provide modeled estimates based on mathematical formulas and industry data-”they are educational tools, not personalized financial advice. A calculator can show you what might happen under different scenarios, but it cannot tell you what you should do, evaluate your complete financial picture, or consider factors unique to your situation. Financial advisors, credit counselors, and certified public accountants provide advice tailored to your specific circumstances. Think of calculators as a starting point for understanding your options, not a replacement for professional guidance."
    },
    {
      question: "How accurate are debt calculators?",
      answer: "Debt calculators provide reasonable estimates based on industry averages, settlement patterns, and mathematical modeling. However, actual results depend on many factors the calculator cannot predict: whether your specific creditors will negotiate, what settlement percentages they'll accept, how your personal circumstances evolve, and whether you can complete a relief program. Our calculators are reviewed for mathematical accuracy by a Certified Public Accountant, but this review confirms the calculations work correctly-”not that any individual will achieve the estimated results. Use calculator estimates as a general guide, not a guarantee."
    },
    {
      question: "Is my information safe when I use a debt calculator?",
      answer: "Reputable debt calculators prioritize data security and privacy. DebtCalculatorLab uses SSL encryption to protect information during transmission and follows privacy best practices aligned with CCPA (California Consumer Privacy Act) and PIPEDA (Canada's Personal Information Protection and Electronic Documents Act). We collect only the information necessary to generate your estimate and share it only with one verified partner if you explicitly opt in to be contacted. We never sell calculator data to third parties. Always check a calculator's privacy policy before entering personal information, and look for security indicators like SSL certificates."
    },
    {
      question: "Who benefits from using debt calculators?",
      answer: "Debt calculators are most valuable for people exploring their options before making decisions. They're helpful if you're considering debt relief but want to understand potential outcomes first, comparing different debt resolution strategies, wondering how long current minimum payments will take, or need to explain debt scenarios to a family member or advisor. Calculators work best for people with unsecured debt (credit cards, personal loans, medical bills) between $5,000 and $150,000. If you're current on payments and managing well, a calculator might confirm you're on track. If you're struggling, it can help you understand what relief might look like."
    },
    {
      question: "What can't a debt calculator tell me?",
      answer: "Debt calculators have important limitations. They cannot predict whether your specific creditors will settle or at what percentage, determine if you'll qualify for any particular relief program, account for sudden changes in your financial situation, evaluate how debt relief will affect your credit score and recovery timeline, replace legal or tax advice about debt consequences, or tell you definitively what you should do. Calculators model scenarios based on averages and assumptions. They're valuable for understanding possibilities, but professional guidance is essential for making actual decisions about debt relief strategies."
    },
    {
      question: "What should I do after getting my estimate?",
      answer: "After reviewing your calculator results, consider these next steps: First, review the methodology to understand how the estimate was created. Second, compare multiple scenarios by adjusting variables to see how different factors affect outcomes. Third, research the specific relief strategies the calculator modeled. Fourth, consult with qualified professionals-”credit counselors (often free through nonprofit agencies), licensed debt relief companies for detailed program information, or financial advisors for comprehensive planning. Finally, evaluate your full situation including income stability, expense flexibility, and stress tolerance. Calculator estimates are a starting point, not an endpoint."
    },
    {
      question: "When should I talk to a professional instead of using a calculator?",
      answer: "Debt calculators are educational tools, but certain situations require professional guidance from the start. Consult a professional if you're facing immediate legal action like lawsuits or wage garnishment, considering bankruptcy as an option, dealing with tax debt or student loans (which have unique rules), unsure if your debt is beyond the statute of limitations, experiencing severe financial hardship with no clear income source, or feeling overwhelmed and unable to evaluate options objectively. Nonprofit credit counseling agencies offer free initial consultations. Attorneys can assess legal risks. CPAs can address tax implications. Use calculators to explore, but seek professional help for decisions."
    },
    {
      question: "Why should I trust DebtCalculatorLab's calculators?",
      answer: "DebtCalculatorLab's calculators are built on several trust principles: transparent methodology that explains exactly how estimates are calculated, mathematical accuracy reviewed by a Certified Public Accountant, data sources from credible institutions like the Federal Trade Commission and Consumer Financial Protection Bureau, clear disclaimers about what calculators can and cannot do, and privacy-first design that never sells your information. We're not a debt relief company trying to enroll you in a program-”we're an independent calculator platform focused on education. Our success depends on providing accurate, honest estimates that help people make informed decisions, not on making unrealistic promises."
    }
  ];

  // Schema.org JSON-LD for FAQPage
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

  return (
    <div className="pillar-page">
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

        .pillar-page {
          min-height: 100vh;
          background: #ffffff;
        }

        /* Header */
        .page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 48px 24px;
          text-align: center;
        }

        .header-logo {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .header-tagline {
          font-size: 16px;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Trust Bar */
        .trust-bar {
          background: #f7fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 16px 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #4a5568;
          font-weight: 500;
        }

        /* Main Content */
        .page-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        h1 {
          font-size: 36px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        h2 {
          font-size: 28px;
          font-weight: 600;
          color: #1a202c;
          margin-top: 48px;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 3px solid #667eea;
        }

        h3 {
          font-size: 22px;
          font-weight: 600;
          color: #2d3748;
          margin-top: 32px;
          margin-bottom: 16px;
        }

        p {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 16px;
        }

        .intro-text {
          font-size: 18px;
          color: #2d3748;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        /* Tool Cards */
        .tools-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 32px;
        }

        .tool-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
          transform: translateY(-2px);
        }

        .tool-card.active {
          border-color: #667eea;
          background: linear-gradient(135deg, #f7fafc 0%, #eff6ff 100%);
        }

        .tool-card.placeholder {
          opacity: 0.6;
          cursor: default;
        }

        .tool-card.placeholder:hover {
          transform: none;
          box-shadow: none;
          border-color: #e2e8f0;
        }

        .tool-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .tool-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 12px;
        }

        .tool-trademark {
          font-size: 12px;
          vertical-align: super;
        }

        .tool-purpose {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .tool-availability {
          font-size: 14px;
          color: #718096;
          margin-bottom: 20px;
          font-style: italic;
        }

        .tool-cta {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .tool-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .placeholder-text {
          font-size: 16px;
          color: #a0aec0;
          font-style: italic;
        }

        /* Methodology Section */
        .methodology-section {
          background: #f7fafc;
          border-left: 4px solid #667eea;
          padding: 32px;
          border-radius: 8px;
          margin-top: 32px;
        }

        .reviewer-badge {
          background: #f0fdf4;
          border: 2px solid #22c55e;
          border-radius: 8px;
          padding: 16px 20px;
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .reviewer-badge-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .reviewer-badge-text {
          font-size: 15px;
          color: #166534;
          font-weight: 600;
          margin: 0;
        }

        /* Lists */
        ul, ol {
          margin-left: 24px;
          margin-bottom: 16px;
        }

        li {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.8;
          margin-bottom: 8px;
        }

        /* FAQ Section */
        .faq-list {
          margin-top: 32px;
        }

        .faq-item {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 16px;
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

        /* Location Explorer */
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 32px;
        }

        .location-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
        }

        .location-card h3 {
          margin-top: 0;
          margin-bottom: 16px;
        }

        .location-link {
          display: inline-block;
          margin-top: 16px;
          padding: 10px 20px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }

        .location-link:hover {
          background: #5568d3;
          transform: translateY(-1px);
        }

        .canada-disclaimer {
          font-size: 14px;
          color: #92400e;
          background: #fffbeb;
          padding: 12px;
          border-radius: 6px;
          border-left: 3px solid #f59e0b;
          margin-top: 12px;
        }

        /* Footer */
        .page-footer {
          background: #1a202c;
          color: #a0aec0;
          padding: 48px 24px;
          margin-top: 64px;
        }

        .footer-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 32px;
        }

        .footer-column h4 {
          color: white;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .footer-link {
          display: block;
          color: #a0aec0;
          text-decoration: none;
          margin-bottom: 8px;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 24px;
          text-align: center;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header {
            padding: 32px 20px;
          }

          .header-logo {
            font-size: 24px;
          }

          .trust-bar {
            gap: 16px;
          }

          .trust-item {
            font-size: 13px;
          }

          .page-content {
            padding: 32px 20px;
          }

          h1 {
            font-size: 28px;
          }

          h2 {
            font-size: 24px;
            margin-top: 40px;
          }

          h3 {
            font-size: 20px;
          }

          .location-grid {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .tool-card {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .trust-bar {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="page-header">
        <div className="header-logo">
          <Shield size={32} />
          DebtCalculatorLab
        </div>
        <p className="header-tagline">
          Educational debt analysis tools reviewed by a CPA
        </p>
      </header>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-item">
          <CheckCircle size={18} style={{color: '#22c55e'}} />
          <span>CPA Reviewed</span>
        </div>
        <div className="trust-item">
          <Shield size={18} style={{color: '#667eea'}} />
          <span>Privacy-First Design</span>
        </div>
        <div className="trust-item">
          <Lock size={18} style={{color: '#3b82f6'}} />
          <span>SSL Encrypted</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="page-content">
        <h1>Debt Calculators - Understand Your Options</h1>

        <p className="intro-text">
          Explore educational debt analysis tools designed to help you model potential debt relief 
          scenarios. Our calculators provide transparent estimates based on industry data and 
          mathematical modeling-”not guarantees or financial advice. Each tool is reviewed for 
          accuracy by a Certified Public Accountant.
        </p>

        {/* Our Debt Analysis System */}
        <section>
          <h2>Our Debt Analysis System</h2>

          <h3>What These Calculators Do</h3>
          <p>
            Our debt calculators are educational modeling tools that help you visualize different 
            financial paths forward. They take your debt amount, interest rates, payment status, 
            income, and expenses to create side-by-side comparisons of your current trajectory 
            versus potential relief options.
          </p>
          <p>
            Think of these calculators as financial "what-if" scenarios. They show you what could 
            happen if you continue making minimum payments versus pursuing debt settlement or other 
            relief strategies. The estimates are based on real industry data-”settlement percentages 
            that creditors have historically accepted, typical program durations, and standard fee 
            structures.
          </p>
          <p>
            These tools are designed to help you explore options before making commitments, compare 
            different debt resolution strategies, understand potential timelines and costs, and have 
            informed conversations with financial professionals or family members.
          </p>

          <h3>How We Approach Debt Modeling</h3>
          <p>
            Our calculators use transparent, mathematically sound approaches to debt modeling. We 
            don't hide our methodology or make our formulas mysterious-”we believe you deserve to 
            understand exactly how your estimates are calculated.
          </p>
          <p>
            For current-path calculations, we model standard amortization with compound interest, 
            showing how long it takes to pay off debt making minimum payments. For relief-path 
            calculations, we use settlement percentage lookup tables based on debt age, payment 
            status, and debt type-”factors that influence how willing creditors are to negotiate. 
            We include industry-standard fees (typically 20-25% of enrolled debt) in all cost 
            estimates so you see the complete financial picture.
          </p>
          <p>
            Every calculation is reviewed for mathematical accuracy by a Certified Public Accountant. 
            This doesn't mean the CPA guarantees you'll achieve these results-”that depends on factors 
            beyond any calculator's control. But it does mean the math is correct and the logic is sound.
          </p>

          <h3>What Calculators Cannot Do (Limitations)</h3>
          <p>
            It's critical to understand what debt calculators cannot do. They cannot predict whether 
            your specific creditors will negotiate or settle. They cannot determine if you'll qualify 
            for any particular relief program. They cannot account for sudden changes in your financial 
            situation-”job loss, medical emergencies, or unexpected expenses.
          </p>
          <p>
            Calculators model scenarios based on industry averages and mathematical formulas. Your 
            individual results will vary based on creditor participation, your ability to maintain 
            payments throughout a relief program, changes in your income or expenses, and many other 
            factors unique to your situation.
          </p>
          <p>
            <strong>These calculators provide modeled estimates, not financial advice.</strong> They 
            cannot tell you what you should do or evaluate your complete financial picture. Think of 
            them as educational tools that help you understand possibilities-”not as replacements for 
            professional guidance from credit counselors, financial advisors, or attorneys.
          </p>
        </section>

        {/* Available Tools */}
        <section>
          <h2>Available Tools</h2>

          <div className="tools-grid">
            {/* Active Tool */}
            <div className="tool-card active">
              <div className="tool-icon">
                <TrendingDown size={28} color="white" />
              </div>
              <h3 className="tool-name">
                Debt Relief Savings Estimator<span className="tool-trademark">(TM)</span>
              </h3>
              <p className="tool-purpose">
                Model how debt settlement could affect your monthly payments and payoff timeline. 
                This educational tool compares your current path with a potential relief scenario, 
                showing estimated monthly savings and total debt reduction based on your specific 
                financial situation.
              </p>
              <p className="tool-availability">
                Available for 50 U.S. states and 9 Canadian provinces (excluding Quebec)
              </p>
              <a href="/debt-relief-calculator/" className="tool-cta">
                Explore This Tool
              </a>
            </div>

            {/* Future Tool Placeholders */}
            <div className="tool-card placeholder">
              <div className="tool-icon">
                <BarChart3 size={28} color="white" />
              </div>
              <h3 className="tool-name">Additional Calculators</h3>
              <p className="placeholder-text">
                Additional debt analysis tools coming soon. We're developing calculators for 
                minimum payment scenarios, debt consolidation modeling, and debt-free timeline 
                projections.
              </p>
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section>
          <h2>Our Methodology</h2>

          <h3>Data Sources</h3>
          <p>
            Our calculators are built on credible, authoritative data sources rather than assumptions 
            or marketing claims. We rely on Federal Trade Commission (FTC) debt relief program reports 
            spanning 2020-2024, Consumer Financial Protection Bureau (CFPB) settlement pattern data, 
            and documented industry averages for settlement percentages by debt age and type.
          </p>
          <p>
            For interest rate calculations, we use Federal Reserve consumer credit data and industry 
            standard amortization formulas. For settlement company fees, we reference FTC-documented 
            industry standards showing typical charges of 20-25% of enrolled debt. When we incorporate 
            state-specific information, we reference applicable consumer protection statutes from each 
            jurisdiction's legal code.
          </p>
          <p>
            We update our data sources regularly to ensure calculations reflect current industry 
            conditions. However, debt relief patterns can shift over time based on economic conditions, 
            creditor policies, and regulatory changes. Our calculators provide estimates based on 
            historical patterns-”not predictions about future creditor behavior.
          </p>

          <h3>Calculation Principles</h3>
          <p>
            Every calculator follows core principles designed to provide realistic, honest estimates. 
            We use conservative assumptions rather than optimistic ones. For example, our settlement 
            percentage lookup tables reflect what creditors have historically accepted on average-”not 
            best-case scenarios. We include all relevant costs including settlement company fees, not 
            just the settled debt amount.
          </p>
          <p>
            Our calculations model scenarios, they don't make promises. We show ranges where appropriate 
            (such as monthly savings estimates) to reflect variability in outcomes. We disclose our 
            methodology openly rather than treating calculations as proprietary "black boxes." And we 
            always frame results as estimates for educational purposes-”never as guarantees or predictions.
          </p>
          <p>
            The variables we use-”debt amount, interest rates, payment status, debt age, employment 
            status, income, expenses, and hardship factors-”are the same factors that influence real-world 
            debt relief outcomes. We weight these variables based on their documented impact on settlement 
            likelihood and program success rates.
          </p>

          <h3>Reviewer Oversight</h3>
          <div className="methodology-section">
            <p>
              All calculations are reviewed for mathematical accuracy by a Certified Public Accountant 
              licensed to practice in the relevant jurisdictions where we operate. This review ensures 
              that our formulas are mathematically sound, our amortization calculations are correct, 
              and our settlement modeling follows logical principles.
            </p>
            <p>
              <strong>Scope of Review:</strong> The CPA reviewer examines calculation logic, formula 
              implementation, and mathematical accuracy. The reviewer verifies that when you input 
              specific numbers, the calculator produces mathematically correct outputs based on its 
              stated methodology.
            </p>
            <p>
              <strong>What the Reviewer Does NOT Guarantee:</strong> The CPA review does not guarantee 
              that any individual user will achieve the estimated results. It does not evaluate whether 
              creditors will actually negotiate, whether settlement percentages will match historical 
              averages, or whether any specific person should pursue debt relief. The review confirms 
              mathematical accuracy, not individual outcomes.
            </p>

            <div className="reviewer-badge">
              <CheckCircle className="reviewer-badge-icon" size={24} />
              <p className="reviewer-badge-text">
                Calculations reviewed for accuracy by a Certified Public Accountant
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section>
          <h2>Who This Is For</h2>

          <h3>Intended Users</h3>
          <p>
            Our debt calculators are designed for people who want to explore debt relief options 
            before making decisions. You might benefit from these tools if you're:
          </p>
          <ul>
            <li>Considering debt settlement but want to understand potential outcomes first</li>
            <li>Comparing different debt resolution strategies (settlement vs. minimum payments vs. consolidation)</li>
            <li>Wondering how long your current minimum payment approach will take</li>
            <li>Trying to explain debt scenarios to a spouse, family member, or financial advisor</li>
            <li>Researching whether the debt amount and monthly payments make sense for relief programs</li>
            <li>Looking for realistic estimates rather than marketing promises</li>
          </ul>
          <p>
            These calculators work best for people with unsecured debt-”credit cards, personal loans, 
            medical bills-”typically between $5,000 and $150,000. They're educational tools for 
            exploration and understanding, not enrollment or commitment.
          </p>

          <h3>Who Should Seek Professional Advice Instead</h3>
          <p>
            While calculators are valuable educational tools, certain situations require professional 
            guidance from the start. You should consult qualified professionals rather than relying 
            solely on calculators if you're:
          </p>
          <ul>
            <li>Facing immediate legal action such as lawsuits, wage garnishment, or asset liens</li>
            <li>Considering bankruptcy as a potential option</li>
            <li>Dealing with tax debt, student loans, or other debt types with unique legal rules</li>
            <li>Unsure whether your debt is beyond the statute of limitations in your state</li>
            <li>Experiencing severe financial hardship with no stable income source</li>
            <li>Feeling overwhelmed and unable to evaluate options objectively</li>
            <li>Needing advice about credit score impact and recovery timelines</li>
          </ul>
          <p>
            Nonprofit credit counseling agencies offer free initial consultations. Attorneys can assess 
            legal risks and bankruptcy options. Certified Public Accountants can address tax implications 
            of debt forgiveness. Use calculators to explore possibilities, but seek professional guidance 
            for actual decisions about your financial future.
          </p>
        </section>

        {/* FAQs */}
        <section>
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
        </section>

        {/* Explore by Location */}
        <section>
          <h2>Explore by Location</h2>

          <div className="location-grid">
            <div className="location-card">
              <h3>United States</h3>
              <p>
                Our debt relief calculator is available for all 50 U.S. states. Each state page 
                provides jurisdiction-specific context and references applicable consumer protection 
                statutes where relevant.
              </p>
              <a href="/debt-relief-calculator/#states" className="location-link">
                See All U.S. State Calculators
              </a>
            </div>

            <div className="location-card">
              <h3>Canada (Excluding Quebec)</h3>
              <p>
                Available across 9 Canadian provinces including Ontario, British Columbia, Alberta, 
                and others. Our Canadian calculators reference PIPEDA privacy standards and provide 
                province-specific information.
              </p>
              <div className="canada-disclaimer">
                Available across many Canadian provinces (excluding Quebec).
              </div>
              <a href="/debt-relief-calculator/#provinces" className="location-link">
                See Canadian Province Calculators
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Calculators</h4>
              <a href="/debt-relief-calculator/" className="footer-link">Debt Relief Calculator</a>
              <a href="/debt-calculators/" className="footer-link">All Calculators</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about/" className="footer-link">About</a>
              <a href="/methodology/" className="footer-link">How We Calculate</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="/privacy-policy/" className="footer-link">Privacy Policy</a>
              <a href="/terms-of-service/" className="footer-link">Terms of Service</a>
              <a href="/disclaimers/" className="footer-link">Disclaimers</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 LENURA VENTURES INC. DebtCalculatorLab and Debt Relief Savings Estimator are trademarks of LENURA VENTURES INC.</p>
            <p style={{marginTop: '12px', fontSize: '13px', color: '#718096'}}>
              DebtCalculatorLab is not a law firm, financial advisor, or credit counseling service. 
              Calculators provide educational estimates only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PillarPageDebtCalculators;
