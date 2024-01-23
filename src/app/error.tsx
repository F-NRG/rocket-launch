'use client';
import type { NextPage } from 'next';
import { useEffect } from 'react';

type Props = { error: Error & { digest?: string }; reset: () => void };

const Error: NextPage<Props> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};
export default Error;
