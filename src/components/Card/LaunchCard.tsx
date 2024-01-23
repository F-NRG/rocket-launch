import type { FC } from 'react';
import Image from 'next/image';
import type { Launch } from 'types/Launch';

type Props = {
  launch: Launch;
  onClick: () => void;
};

const LaunchCard: FC<Props> = ({ launch, onClick }) => (
  <ul
    className="max-w-xs cursor-pointer rounded shadow-lg hover:shadow-md"
    onClick={onClick}
  >
    <Image
      src={launch.links.patch.small ?? 'assets/img/fallback.svg'}
      alt="launch image"
      className="w-1/3 p-1"
      height={200}
      width={200}
    />
    <div className="w-96 max-w-full px-6 py-4">
      <div className="mb-2 text-xl font-bold">Name: {launch.name ?? 'Name unknown'}</div>
      <p className="line-clamp-6 text-base text-gray-700">
        <span className="font-bold">details:</span>
        {launch.details ?? 'No details available'}
      </p>
      <p className="text-base text-gray-700">
        <span className="font-bold">date:</span>
        {launch.date_local ?? 'No date available'}
      </p>
    </div>
  </ul>
);

export default LaunchCard;
