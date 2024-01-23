'use client';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import LaunchList from 'components/LaunchList/LaunchList';
import { getLaunches } from 'utils/api/launches/launches';

const LaunchListClient: NextPage = () => {
  const { data, isLoading } = useQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data ? (
        <LaunchList
          list={data}
          router={router}
        />
      ) : null}
    </div>
  );
};
export default LaunchListClient;
