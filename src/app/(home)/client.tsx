'use client';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import LaunchList from 'components/LaunchList/LaunchList';
import { getLaunches } from 'utils/api/launches/launches';
import type { Launch } from 'types/Launch';

type Props = { launches: Array<Launch> };

const LaunchListClient: NextPage<Props> = ({ launches }) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const router = useRouter();

  if (isLoading) return <div className="flex w-full justify-center p-5">Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <div>
      <LaunchList
        list={data ?? launches}
        router={router}
      />
    </div>
  );
};
export default LaunchListClient;
