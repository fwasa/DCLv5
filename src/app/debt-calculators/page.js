import PillarPage from '@/components/PillarPage';

export const metadata = {
  title: 'Debt Calculators - Understand Your Options | DebtCalculatorLab',
  description: 'Explore debt calculators from DebtCalculatorLab. Model your options with tools reviewed by a CPA. Educational estimates, not financial advice.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://debtcalculatorlab.com/debt-calculators/'
  },
  openGraph: {
    title: 'Debt Calculators - Understand Your Options | DebtCalculatorLab',
    description: 'Explore debt calculators from DebtCalculatorLab. Model your options with tools reviewed by a CPA.',
    url: 'https://debtcalculatorlab.com/debt-calculators/',
    type: 'website'
  }
};

export default function DebtCalculatorsPage() {
  return <PillarPage />;
}
