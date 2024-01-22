import type { Metadata } from 'next';
import './globals.css';
import Header from 'components/Layout/Header/Header';

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
        <Header
          navItems={[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
