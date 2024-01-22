import { Launch } from 'types/Launch';

const baseUrl = 'https://api.spacexdata.com/v5';
// https://api.spacexdata.com/v5/launches/latest

export const getLaunches = async (): Promise<Array<Launch>> => {
  const response = await fetch(`${baseUrl}/launches`);
  const data = await response.json();
  return data;
};
