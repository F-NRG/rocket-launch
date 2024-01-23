import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
