import LaunchListClient from './client';

export default async function Home() {
  return (
    <div className="flex justify-center gap-2">
      <aside className="hidden min-h-screen w-1/5 overflow-hidden bg-gray-700 p-2 text-white md:block">
        <h1>Very nice sidebar to give some additional information. </h1>
      </aside>
      <main className="flex md:w-4/5 ">
        <LaunchListClient />
      </main>
    </div>
  );
}
