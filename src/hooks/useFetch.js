import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getData() {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  return { data, isFetching, error };
}
