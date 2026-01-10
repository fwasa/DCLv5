import TermsContent from './TermsContent';

export const metadata = {
  title: 'Terms of Service | DebtCalculatorLab User Agreement',
  description: 'Terms of service for using DebtCalculatorLab debt relief calculators. Educational tool usage terms, warranties, and liability information.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/terms-of-service/'
  },
  openGraph: {
    title: 'Terms of Service | DebtCalculatorLab',
    description: 'Terms of service for using debt relief calculators. Educational tool usage terms and conditions.',
    url: 'https://debtcalculatorlab.com/terms-of-service/',
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
    title: 'Terms of Service | DebtCalculatorLab',
    description: 'Terms of service for using debt relief calculators. Educational tool usage terms.'
  }
};

export default function TermsOfServicePage() {
  return <TermsContent />;
}
