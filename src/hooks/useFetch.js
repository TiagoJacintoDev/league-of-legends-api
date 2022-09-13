import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    (async function getData() {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);

  return { data, isFetching };
}
