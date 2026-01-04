import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
  title: 'DebtCalculatorLab - Educational Debt Relief Calculators',
  description: 'Free debt relief calculators reviewed by a CPA. Educational estimates for understanding your debt relief options.',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  // Replace with your actual GA4 Measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </head>
      <body>{children}</body>
    </html>
  );
}
