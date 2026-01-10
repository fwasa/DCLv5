import NationalToolPage from '@/components/NationalToolPage';

export const metadata = {
  title: 'Debt Relief Calculator - Calculate Your Savings | Free CPA-Reviewed Tool',
  description: 'Free debt relief calculator shows potential savings, timeline, and costs. CPA-reviewed calculations in 3 minutes. No credit check, no registration, completely private.',
  keywords: 'debt relief calculator, debt settlement calculator, calculate debt relief, debt savings calculator, debt reduction calculator',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/debt-relief-calculator/'
  },
  openGraph: {
    title: 'Debt Relief Calculator - Calculate Your Savings | Free Tool',
    description: 'Get your personalized debt relief estimate in 3 minutes. Free calculator with CPA-reviewed calculations.',
    url: 'https://debtcalculatorlab.com/debt-relief-calculator/',
    type: 'website',
    siteName: 'DebtCalculatorLab',
    images: [
      {
        url: 'https://debtcalculatorlab.com/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Debt Relief Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Debt Relief Calculator - Free Savings Estimate',
    description: 'Calculate your potential debt relief savings in 3 minutes. No credit check required.'
  }
};

export default function DebtReliefCalculatorPage() {
  return <NationalToolPage />;
}
