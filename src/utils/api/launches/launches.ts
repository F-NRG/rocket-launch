import type { Launch } from 'types/Launch';

const baseUrl = 'https://api.spacexdata.com/v5';

export const getLaunches = async (): Promise<Array<Launch>> => {
  const response = await fetch(`${baseUrl}/launches`);

  if (!response.ok) throw new Error('Error fetching launches');

  return response.json();
};
