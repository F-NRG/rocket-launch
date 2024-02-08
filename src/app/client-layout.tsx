'use client';

import type { NextPage } from 'next';
import { QueryClient, HydrationBoundary } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

type Props = { children: React.ReactNode; deHydratedState: unknown };

const LaunchDetail: NextPage<Props> = ({ children, deHydratedState }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 6 * 1000 } } }));

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={deHydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};

export default LaunchDetail;
