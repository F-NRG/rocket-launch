'use client';

import type { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = { children: React.ReactNode };

const LaunchDetail: NextPage<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>;
};

export default LaunchDetail;
