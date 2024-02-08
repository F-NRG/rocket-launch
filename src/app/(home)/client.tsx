'use client';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import LaunchList from 'components/LaunchList/LaunchList';
import { getLaunches } from 'utils/api/launches/launches';
import Search from 'components/Search/Search';

const LaunchListClient: NextPage = () => {
  const { data, isLoading } = useQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setFilteredData(data);
    } else {
      const newList = data?.filter((launch) => launch.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredData(newList);
    }
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    console.log('filter', filter);
    if (filter === 'upcoming') {
      const newList = filteredData?.toSorted();
      setFilteredData(newList);
    } else if (filter === 'success') {
      const newList = filteredData?.toSorted((launch) => launch.success);
      setFilteredData(newList);
    } else if (filter === 'date') {
      const newList = filteredData?.toSorted((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setFilteredData(newList);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full p-2">
      <Search
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      {filteredData ? (
        <LaunchList
          list={filteredData}
          router={router}
        />
      ) : null}
    </div>
  );
};
export default LaunchListClient;
