import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({ baseURL: 'https://euw1.api.riotgames.com' });

export function useFetch(url, queryOptions) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getData() {
      try {
        const res = await api.get(url);
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();
  }, [queryOptions?.division, queryOptions?.tier, queryOptions?.queue]);

  return { data, isFetching, error };
}
