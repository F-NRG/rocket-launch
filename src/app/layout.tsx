import type { Metadata } from 'next';
import './globals.css';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import ClientLayout from './client-layout';
import Header from 'components/Layout/Header/Header';
import { getLaunches } from 'utils/api/launches/launches';

export const metadata: Metadata = {
  title: 'Rocket launch',
  description: 'Created for assessment purposes',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const deHydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className="m-8 ">
        <Header navItems={[{ name: 'Home', path: '/' }]} />
        <ClientLayout deHydratedState={deHydratedState}>{children}</ClientLayout>
      </body>
    </html>
  );
}
