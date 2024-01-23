'use client';

import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { getLaunches } from 'utils/api/launches/launches';

type Props = { id: string };

const LaunchDetail: NextPage<Props> = ({ id }) => {
  const { data, isLoading } = useQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const launch = data?.find((launch) => launch.id === id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-col justify-center">
      <h1 className="mb-2 text-xl font-bold">Name: {launch?.name ?? 'Name unknown'}</h1>
      <p className="line-clamp-6 text-base text-gray-700">
        <span className="font-bold">details:</span>
        {launch?.details ?? 'No details available'}
      </p>
      <p className="text-base text-gray-700">
        <span className="font-bold">date:</span>
        {launch?.date_local ?? 'No date available'}
      </p>
    </div>
  );
};

export default LaunchDetail;
