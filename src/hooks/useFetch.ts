import { useLayoutEffect, useState } from "react";

export function useFetch<T, Q>(url: string, callback: (data: T) => void) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = async (query?: Q) => {

    // if (query) {
    //   url += `?${new URLSearchParams(query)}`;
    // }

    console.log(url);

    try {
      console.log('startFetch');
      const response = await fetch(url);
      console.log('endFetch');
      console.log(response);
      const data = await response.json();
      setData(data);
      setLoading(false);
      callback(data);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  useLayoutEffect(() => { }, [data, loading, error]);

  const runFetch = (query?: Q) => {
    console.log('runFetch', query);
    fetchData(query);
  };

  return { data, loading, error, runFetch };
}
