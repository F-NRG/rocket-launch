'use client';
import type { ChangeEvent, FC } from 'react';
import Image from 'next/image';
import { submitForm } from 'actions/submitForm';

type Props = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onFilter: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
};
const Search: FC<Props> = ({ onSearch, onFilter }) => {
  return (
    <form
      action={submitForm}
      className="w-full"
    >
      <div className="flex pb-2">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-e-lg border border-s-2 border-gray-300 border-s-gray-50
            bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600
            dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500"
            placeholder="Search for a launch"
            onChange={onSearch}
            required
          />
          <SubmitButton />
        </div>
      </div>
      <FilterButton onFilter={onFilter} />
    </form>
  );
};

const SubmitButton = () => (
  <button
    type="reset"
    className="absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium
      text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600
      dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <Image
      src="assets/svg/cross.svg"
      alt="reset"
      height="15"
      width="15"
    />

    <span className="sr-only">reset</span>
  </button>
);

const filters = ['date', 'success', 'upcoming'];

const FilterButton = ({ onFilter }: { onFilter: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <fieldset className="flex gap-2">
    {filters.map((filter, index) => (
      <div
        key={index}
        className=" flex gap-1"
      >
        <input
          type="checkbox"
          id={filter}
          name="filter"
          value={filter}
          onChange={onFilter}
        />
        <label htmlFor={filter}>{filter}</label>
      </div>
    ))}
  </fieldset>
);

export default Search;
