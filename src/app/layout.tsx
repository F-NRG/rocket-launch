import type { Metadata } from 'next';
import './globals.css';
import Navigation from 'components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'Rocket launch',
  description: 'Created for assessment purposes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation
            navItems={[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
            ]}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
