import DisclaimersContent from './DisclaimersContent';

export const metadata = {
  title: 'Important Disclaimers | DebtCalculatorLab Legal Information',
  description: 'Legal disclaimers for DebtCalculatorLab debt relief calculators. Estimates are educational only, not financial or legal advice.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/disclaimers/'
  },
  openGraph: {
    title: 'Important Disclaimers | DebtCalculatorLab',
    description: 'Legal disclaimers for debt relief calculators. Estimates are educational only, not financial or legal advice.',
    url: 'https://debtcalculatorlab.com/disclaimers/',
    type: 'website',
    siteName: 'DebtCalculatorLab',
    images: [
      {
        url: 'https://debtcalculatorlab.com/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'DebtCalculatorLab - Debt Relief Calculators'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Important Disclaimers | DebtCalculatorLab',
    description: 'Legal disclaimers for debt relief calculators. Educational estimates only.'
  }
};

export default function DisclaimersPage() {
  return <DisclaimersContent />;
}
