import PillarPage from '@/components/PillarPage';

export const metadata = {
  title: 'Free Debt Relief Calculator | CPA-Reviewed Savings Estimate | DebtCalculatorLab',
  description: 'Calculate potential debt relief savings in 3 minutes with our free, CPA-reviewed calculator. Get personalized estimates for debt settlement and payoff options across all 50 states.',
  keywords: 'debt relief calculator, debt settlement calculator, debt payoff calculator, debt reduction calculator, calculate debt relief savings, free debt calculator',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/debt-calculators/'
  },
  openGraph: {
    title: 'Free Debt Relief Calculator | CPA-Reviewed Savings Estimate',
    description: 'Get personalized debt relief estimates in 3 minutes. Free calculator with CPA-reviewed calculations for all 50 US states and Canadian provinces.',
    url: 'https://debtcalculatorlab.com/debt-calculators/',
    type: 'website',
    siteName: 'DebtCalculatorLab',
    images: [
      {
        url: 'https://debtcalculatorlab.com/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'DebtCalculatorLab - Free Debt Relief Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Debt Relief Calculator | CPA-Reviewed',
    description: 'Calculate your potential debt relief savings in 3 minutes. Free, CPA-reviewed, no registration required.'
  }
};

export default function DebtCalculatorsPage() {
  return <PillarPage />;
}
