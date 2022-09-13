import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => setData(res.data));
  }, []);

  return { data };
}
