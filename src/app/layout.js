import Script from 'next/script';

export const metadata = {
  title: 'DebtCalculatorLab - Educational Debt Relief Calculators',
  description: 'Free debt relief calculators reviewed by a CPA. Educational estimates for understanding your debt relief options.',
  charset: 'utf-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K8DM171YNM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K8DM171YNM');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
