'use client';

export default function MethodologyPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '16px', color: '#1a202c' }}>
        How We Calculate Debt Relief Estimates
      </h1>
      
      <p style={{ fontSize: '18px', color: '#718096', marginBottom: '40px' }}>
        Our calculations are based on industry data, settlement patterns, and mathematical modeling reviewed by a Certified Public Accountant.
      </p>

      <div style={{ background: '#fffbeb', border: '2px solid #f59e0b', borderRadius: '8px', padding: '20px', marginBottom: '40px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>
          <strong>Important:</strong> Results shown are modeled estimates for educational purposes only. Actual results depend on creditor participation, eligibility, and personal financial history. This calculator does not guarantee debt relief or specific outcomes. Individual results vary.
        </p>
      </div>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Current Path Calculation
      </h2>
      
      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        The "Current Path" shows what happens if you continue making minimum payments without seeking relief. We calculate how long it takes to pay off your debt with compound interest accumulating monthly.
      </p>

      <div style={{ background: '#f7fafc', borderLeft: '4px solid #667eea', padding: '20px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#2d3748' }}>Algorithm:</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#4a5568', lineHeight: '1.8' }}>
          <li>Each month, calculate interest charge (balance × rate ÷ 12)</li>
          <li>Subtract interest from your minimum payment to find principal reduction</li>
          <li>If minimum payment doesn't cover interest, path is "Unsustainable"</li>
          <li>Continue until balance reaches $0 or 50 years (whichever comes first)</li>
        </ul>
      </div>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Settlement Percentage Calculation
      </h2>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        Settlement percentages reflect what creditors historically accept based on FTC and CFPB data. The percentage represents what you'd pay, not what's forgiven.
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
        <thead>
          <tr style={{ background: '#f7fafc', borderBottom: '2px solid #e2e8f0' }}>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>Debt Age</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>Base Settlement %</th>
            <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>Debt Reduction</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>Less than 6 months</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>65%</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#059669' }}>35% off</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>6-12 months</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>60%</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#059669' }}>40% off</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>1-2 years</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>55%</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#059669' }}>45% off</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>2-3 years</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>50%</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#059669' }}>50% off</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>3+ years</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#4a5568' }}>45%</td>
            <td style={{ padding: '12px', fontSize: '14px', color: '#059669' }}>55% off</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px', color: '#2d3748' }}>
        Settlement Modifiers
      </h3>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '16px' }}>
        We adjust the base settlement percentage based on these factors:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '2', color: '#4a5568', marginBottom: '24px' }}>
        <li><strong>Payment Status:</strong> 60+ days behind: -5% settlement | Frequently missing: -3%</li>
        <li><strong>Debt Type:</strong> Medical debt: -5% (creditors more willing to negotiate)</li>
        <li><strong>Hardship:</strong> Documented hardship: -3%</li>
        <li><strong>Debt-to-Income:</strong> DTI over 50%: -3%</li>
      </ul>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Relief Path Calculation
      </h2>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '20px' }}>
        The "Relief Path" models a debt settlement scenario including all costs:
      </p>

      <div style={{ background: '#f7fafc', borderLeft: '4px solid #059669', padding: '20px', marginBottom: '24px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', margin: 0 }}>
          <strong>1. Settled Amount:</strong> Total debt × settlement percentage
          <br />
          <strong>2. Settlement Fees:</strong> Total debt × 22.5% (industry average)
          <br />
          <strong>3. Total Program Cost:</strong> Settled amount + fees
          <br />
          <strong>4. Monthly Payment:</strong> Based on 50% of disposable income
          <br />
          <strong>5. Duration:</strong> 24-48 months (industry standard)
        </p>
      </div>

      <div style={{ background: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '8px', padding: '20px', marginTop: '32px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#92400e' }}>
          Why We Include Fees
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#92400e', margin: 0 }}>
          Many calculators show only the settled debt amount, making programs look cheaper than they are. We include settlement company fees (typically 20-25% of enrolled debt) because we want you to see the complete financial picture. Your estimated savings already account for all costs.
        </p>
      </div>

      <h2 style={{ fontSize: '32px', fontWeight: '600', marginTop: '48px', marginBottom: '24px', color: '#2d3748' }}>
        Limitations
      </h2>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '16px' }}>
        Our calculator cannot predict:
      </p>

      <ul style={{ fontSize: '16px', lineHeight: '2', color: '#4a5568', marginBottom: '32px' }}>
        <li>Whether your specific creditors will negotiate or settle</li>
        <li>What settlement percentage they'll ultimately accept</li>
        <li>How your financial situation will evolve during a program</li>
        <li>Your eligibility for any particular relief program</li>
        <li>Credit score impact or recovery timeline</li>
      </ul>

      <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568', marginBottom: '32px' }}>
        Think of estimates as educated projections based on thousands of similar cases, not guarantees. The math is correct, but real-world outcomes depend on creditor participation and your individual circumstances.
      </p>

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
            fontSize: '16px'
          }}
        >
          Try the Calculator
        </a>
      </div>
    </div>
  );
}
