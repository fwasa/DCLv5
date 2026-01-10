'use client';

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
        About DebtCalculatorLab
      </h1>
      
      <p style={{ fontSize: '20px', color: '#4a5568', lineHeight: '1.7', marginBottom: '40px' }}>
        We're an independent calculator platform providing free, transparent debt relief estimates to help consumers understand their options before making financial decisions.
      </p>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Our Mission
      </h2>
      
      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        DebtCalculatorLab exists to address a critical gap in debt relief transparency. Too many consumers enter debt relief programs without understanding potential outcomes, costs, or alternatives. We believe informed consumers make better financial decisions.
      </p>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '32px' }}>
        Our calculators model realistic scenarios based on industry data, settlement patterns, and mathematical principles-not marketing promises. We show both the current path (continuing minimum payments) and potential relief paths, allowing side-by-side comparison.
      </p>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        What Makes Us Different
      </h2>

      <div style={{ display: 'grid', gap: '24px', marginBottom: '40px' }}>
        <div style={{ background: '#f7fafc', padding: '24px', borderLeft: '4px solid #667eea', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>
            Independent & Educational
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
            We're not a debt relief company trying to enroll you in a program. We're an independent platform focused on education and transparency. Our success depends on providing accurate, honest estimates.
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '24px', borderLeft: '4px solid #059669', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>
            Fee Transparency
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
            Many calculators hide settlement company fees, making programs look cheaper than they are. We include all costs in our estimates because you deserve the complete financial picture.
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '24px', borderLeft: '4px solid #f59e0b', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>
            CPA-Reviewed Methodology
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
            Our calculation methodology is reviewed by a Certified Public Accountant to ensure mathematical accuracy and sound financial principles. The CPA review confirms the calculations work correctly-not that any individual will achieve the estimated results.
          </p>
        </div>

        <div style={{ background: '#f7fafc', padding: '24px', borderLeft: '4px solid #dc2626', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>
            No Misleading Claims
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', margin: 0 }}>
            We don't make guarantees, use countdown timers, or employ pressure tactics. Our estimates are clearly labeled as modeled scenarios, not promises. We believe honest information builds trust.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Who Should Use Our Calculators
      </h2>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        Our tools are designed for consumers with unsecured debt (credit cards, personal loans, medical bills) who want to:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '2', color: '#4a5568', marginBottom: '32px', paddingLeft: '24px' }}>
        <li>Understand potential debt relief outcomes before contacting companies</li>
        <li>Compare their current payment trajectory with settlement scenarios</li>
        <li>See realistic cost estimates including all fees</li>
        <li>Make informed decisions about debt relief strategies</li>
        <li>Verify claims made by debt relief companies</li>
      </ul>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '32px' }}>
        Our calculators work best for debts between $5,000 and $150,000. They're educational tools for exploring possibilities, not substitutes for professional financial or legal advice.
      </p>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Our Commitment to Privacy
      </h2>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        We collect only the information necessary to generate your estimate. Your data is:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '2', color: '#4a5568', marginBottom: '32px', paddingLeft: '24px' }}>
        <li>Encrypted during transmission (SSL/TLS)</li>
        <li>Never sold to third parties</li>
        <li>Shared only with one verified partner if you explicitly opt in</li>
        <li>Protected according to CCPA and PIPEDA standards</li>
      </ul>

      <div style={{ background: '#fffbeb', border: '2px solid #f59e0b', borderRadius: '8px', padding: '24px', marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#92400e' }}>
          Important Limitations
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#92400e', margin: 0 }}>
          DebtCalculatorLab is not a law firm, financial advisor, or debt relief company. We don't provide legal advice, financial advice, or debt relief services. Our calculators model scenarios based on industry averages-actual results depend on creditor participation, program eligibility, and individual circumstances that calculators cannot predict.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a 
          href="/debt-relief-calculator/" 
          style={{
            display: 'inline-block',
            background: '#667eea',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            marginRight: '16px'
          }}
        >
          Try Our Calculator
        </a>
        <a 
          href="/methodology/" 
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '14px 32px',
            border: '2px solid #667eea',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px'
          }}
        >
          View Methodology
        </a>
      </div>
    </div>
  );
}
