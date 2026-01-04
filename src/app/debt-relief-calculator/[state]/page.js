import StatePage from '@/components/StatePage';
import { getAllLocationSlugs, getLocationBySlug } from '@/data/all-locations';

// Generate static paths for all 59 states/provinces
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  
  return slugs.map((slug) => ({
    state: slug,
  }));
}

// Generate metadata for each state/province page
export async function generateMetadata({ params }) {
  const { state } = params;
  const stateData = getLocationBySlug(state);
  
  if (!stateData) {
    return {
      title: 'Page Not Found'
    };
  }

  return {
    title: `${stateData.stateName} Debt Relief Calculator | DebtCalculatorLab`,
    description: stateData.metaDescription,
    robots: 'index, follow',
    alternates: {
      canonical: `https://debtcalculatorlab.com/debt-relief-calculator/${state}/`
    },
    openGraph: {
      title: `${stateData.stateName} Debt Relief Calculator | DebtCalculatorLab`,
      description: stateData.metaDescription,
      url: `https://debtcalculatorlab.com/debt-relief-calculator/${state}/`,
      type: 'website'
    }
  };
}

// Page component
export default function StatePageRoute({ params }) {
  const { state } = params;
  const stateData = getLocationBySlug(state);
  
  if (!stateData) {
    return <div>State not found</div>;
  }

  return <StatePage stateData={stateData} />;
}
