import fetcher from '@/shared/functions/fetcher';
import { useState, useEffect } from 'react';

const useFetch = <T>(path: string, options: RequestInit = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetcher<T>(path, options);
        setData(data);
      } catch (e: any) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return { data, loading, error };
};

export default useFetch;
