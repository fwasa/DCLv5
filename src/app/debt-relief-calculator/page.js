import NationalToolPage from '@/components/NationalToolPage';

export const metadata = {
  title: 'Debt Relief Calculator | Free Estimate | DebtCalculatorLab',
  description: 'Calculate potential debt relief savings. Free, private estimate models your monthly savings and timeline. No credit check, no obligation.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/debt-relief-calculator/'
  },
  openGraph: {
    title: 'Debt Relief Calculator | Free Estimate | DebtCalculatorLab',
    description: 'Calculate potential debt relief savings. Free, private estimate.',
    url: 'https://debtcalculatorlab.com/debt-relief-calculator/',
    type: 'website'
  }
};

export default function DebtReliefCalculatorPage() {
  return <NationalToolPage />;
}
