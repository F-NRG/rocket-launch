import LaunchListClient from './client';

export default async function Home() {
  return (
    <div className="flex justify-center ">
      <main className="flex w-full ">
        <LaunchListClient />
      </main>
    </div>
  );
}
