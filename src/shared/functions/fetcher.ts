import token from '../variables/token';

const cacheData: Map<string, { data: any; timestamp: number }> = new Map();
const cacheTimeout = 10 * 60 * 1000;

const fetcher = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const currentTime = new Date().getTime();

  if (cacheData.has(path) && currentTime - cacheData.get(path)!.timestamp < cacheTimeout) {
    return cacheData.get(path)!.data;
  }

  try {
    const url = `/api${path}`;
    const response = await fetch(url, { ...options, headers: { Authorization: `Bearer ${token}` } });

    if (!response.ok) {
      throw new Error('Error during the request: ' + response.status);
    }

    const data = await response.json();
    cacheData.set(path, {
      data,
      timestamp: currentTime,
    });

    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

export default fetcher;
