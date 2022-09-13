import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const res = await axios.get(url);
      setData(res.data);
    })();
  }, []);

  return { data };
}
