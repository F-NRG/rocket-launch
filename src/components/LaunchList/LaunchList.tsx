import type { useRouter } from 'next/navigation';
import type { FC } from 'react';
import LaunchCard from 'components/Card/LaunchCard';
import type { Launch } from 'types/Launch';

type Props = {
  list: Array<Launch>;
  router: ReturnType<typeof useRouter>;
};

const LaunchList: FC<Props> = ({ list, router }) => {
  return (
    <li className="flex  flex-wrap gap-2 p-4">
      {list.map((launch) => (
        <LaunchCard
          key={launch.id}
          launch={launch}
          onClick={() => router.push(`/${launch.id}`)}
        />
      ))}
    </li>
  );
};

export default LaunchList;
