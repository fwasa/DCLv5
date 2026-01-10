import PrivacyContent from './PrivacyContent';

export const metadata = {
  title: 'Privacy Policy | DebtCalculatorLab Data Protection',
  description: 'DebtCalculatorLab privacy policy. Learn how we collect, use, and protect your personal information. CCPA and PIPEDA compliant.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/privacy-policy/'
  },
  openGraph: {
    title: 'Privacy Policy | DebtCalculatorLab',
    description: 'Learn how we collect, use, and protect your personal information. CCPA and PIPEDA compliant.',
    url: 'https://debtcalculatorlab.com/privacy-policy/',
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
    title: 'Privacy Policy | DebtCalculatorLab',
    description: 'How we collect, use, and protect your personal information. CCPA and PIPEDA compliant.'
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
