import AboutContent from './AboutContent';

export const metadata = {
  title: 'About DebtCalculatorLab | Educational Debt Relief Tools',
  description: 'Independent debt relief calculators reviewed by a CPA. Educational estimates to help consumers understand their options without sales pressure.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/about/'
  },
  openGraph: {
    title: 'About DebtCalculatorLab | Educational Debt Relief Tools',
    description: 'Independent debt relief calculators reviewed by a CPA. Educational estimates without sales pressure.',
    url: 'https://debtcalculatorlab.com/about/',
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
    title: 'About DebtCalculatorLab',
    description: 'Independent debt relief calculators reviewed by a CPA. Educational estimates without sales pressure.'
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
