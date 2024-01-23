import LaunchListClient from './client';
import { getLaunches } from 'utils/api/launches/launches';

export default async function Home() {
  const launches = await getLaunches();

  return (
    <div className="flex justify-center gap-2">
      <aside className="min-h-screen w-1/5 bg-gray-700 p-2 text-white">
        <h1>Very nice sidebar to give some additional information. </h1>
      </aside>
      <main className="w-4/5">
        <LaunchListClient launches={launches} />
      </main>
    </div>
  );
}
