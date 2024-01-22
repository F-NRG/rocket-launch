import LaunchCard from 'components/Card/LaunchCard';
import Search from 'components/Search/Search';
import { getLaunches } from 'utils/api/launches/launches';

export default async function Home() {
  const latestLaunches = await getLaunches();
  console.log(latestLaunches);
  return (
    <div className="flex justify-center gap-2">
      <aside className="w-1/5 bg-gray-700 text-white p-2">
        <h1>Mooie uitleg over de pagina </h1>
      </aside>
      <main className="w-4/5 flex flex-wrap gap-2 p-4">
        <Search />
        {latestLaunches.map((launch) => (
          <LaunchCard
            key={launch.id}
            launch={launch}
          />
        ))}
      </main>
    </div>
  );
}
