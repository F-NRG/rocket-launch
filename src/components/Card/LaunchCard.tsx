import { Launch } from 'types/Launch';
import { FC } from 'react';
import Image from 'next/image';

type Props = {
  launch: Launch;
};

const LaunchCard: FC<Props> = ({ launch }) => {
  console.log(launch.links.patch.small);
  return (
    <div className="max-w-xs rounded shadow-lg ">
      <Image
        src={launch.links.patch.small ?? 'assets/img/fallback.svg'}
        alt="launch image"
        className="w-1/3 p-1"
        height={200}
        width={200}
      />
      <div className="px-6 py-4 w-96 max-w-full">
        <div className="font-bold text-xl mb-2 over">Name: {launch.name ?? 'Name unknown'}</div>
        <p className="text-gray-700 text-base line-clamp-6">
          <span className="font-bold">details:</span>
          {launch.details ?? 'No details available'}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">date:</span>
          {launch.date_local ?? 'No date available'}
        </p>
      </div>
    </div>
  );
};

export default LaunchCard;
