'use client';
import type { ChangeEvent, FC } from 'react';
import Image from 'next/image';
import { submitForm } from 'actions/submitForm';

type Props = {
  filters: Array<string>;
  onFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: FC<Props> = ({ onSearch, onFilter, filters }) => {
  return (
    <form
      action={submitForm}
      className=" flex w-full justify-center p-4"
    >
      <div className="flex w-3/5 flex-col gap-2 focus-visible:border-secondary">
        <div className="relative w-full focus-visible:border-secondary">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-lg border border-s-2 border-gray-300
            border-s-gray-50 bg-primary p-2.5 text-sm text-tertiary placeholder:text-tertiary focus-visible:border-secondary"
            placeholder="Search for a launch"
            onChange={onSearch}
            required
          />
          <SubmitButton />
        </div>
        <FilterButtons
          onFilter={onFilter}
          filters={filters}
        />
      </div>
    </form>
  );
};

const SubmitButton = () => (
  <button
    type="reset"
    className="absolute end-0 top-0 h-full rounded-e-lg border-inherit bg-tertiary p-2.5  text-sm
      font-medium hover:bg-secondary focus:bg-secondary focus:text-tertiary
      focus:outline-none focus:ring-4"
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

const FilterButtons = ({ onFilter, filters }: { filters: Array<string>; onFilter: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <fieldset className=" flex gap-2">
    <p>Filter: </p>
    {filters.map((filter, index) => (
      <div
        key={index}
        className=" flex gap-1"
      >
        <input
          type="radio"
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
