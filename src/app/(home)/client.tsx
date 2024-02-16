'use client';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import LaunchList from 'components/LaunchList/LaunchList';
import { getLaunches } from 'utils/api/launches/launches';
import Search from 'components/Search/Search';
import { Spinner } from 'components/Spinner/Spinner';

const LaunchListClient: NextPage = () => {
  const { data, isLoading } = useQuery({ queryKey: ['launches'], queryFn: getLaunches });
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();
  const filters = ['date', 'success', 'upcoming'];

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

    if (filter === 'upcoming' && e.target.checked) {
      const newList = filteredData?.toSorted((a, b) => {
        console.log(a.upcoming, b.upcoming);
        if (a.upcoming && !b.upcoming) return -1;
        if (b.upcoming && !a.upcoming) return 1;
        return 0;
      });
      setFilteredData(newList);
    }
    if (filter === 'success' && e.target.checked) {
      const newList = filteredData?.toSorted((a, b) => {
        console.log(a.success, b.success);
        if (a.success && !b.success) return -1;
        if (b.success && !a.success) return 1;
        return 0;
      });
      setFilteredData(newList);
    }
    if (filter === 'date' && e.target.checked) {
      const newList = filteredData?.toSorted((a, b) => new Date(a.date_local).getTime() - new Date(b.date_local).getTime());
      setFilteredData(newList);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="w-full p-2">
      <Search
        onSearch={handleSearch}
        onFilter={handleFilter}
        filters={filters}
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
