import MethodologyContent from './MethodologyContent';

export const metadata = {
  title: 'How We Calculate Debt Relief Estimates | DebtCalculatorLab Methodology',
  description: 'Learn how our CPA-reviewed debt relief calculator estimates savings. Transparent methodology using FTC data and industry settlement patterns.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/methodology/'
  },
  openGraph: {
    title: 'How We Calculate Debt Relief Estimates | Methodology',
    description: 'CPA-reviewed calculation methodology using FTC data and real settlement patterns. Transparent and educational.',
    url: 'https://debtcalculatorlab.com/methodology/',
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
    title: 'How We Calculate Debt Relief Estimates',
    description: 'CPA-reviewed calculation methodology using FTC data and real settlement patterns.'
  }
};

export default function MethodologyPage() {
  return <MethodologyContent />;
}
