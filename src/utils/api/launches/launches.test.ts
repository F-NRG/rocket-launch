import { getLaunches } from './launches';
import { launchMock } from 'mocks/launchMock';

export const assetsFetchMock = () =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => [launchMock],
  } as Response);

describe('getLaunches function', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fetchMock: any = undefined;

  beforeEach(() => {
    fetchMock = jest.spyOn(global, 'fetch').mockImplementation(assetsFetchMock);
  });
  it('should fetch launches successfully', async () => {
    const launches = await getLaunches();

    expect(fetchMock).toHaveBeenCalled();
    expect(launches).toEqual([launchMock]);
  });

  it('should throw an error when fetching launches fails', async () => {
    // Mocking the fetch function
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     ok: false,
    //   })
    // );

    await expect(getLaunches()).rejects.toThrow('Error fetching launches');
  });
});
