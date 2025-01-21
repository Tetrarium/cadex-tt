import { useCallback, useState } from "react";

export function useFetch<T, Q>(url: string, callback: (data: T) => void) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = useCallback(async (query?: Q) => {
    let fullUrl = url;

    // console.log(query);

    if (query) {
      fullUrl = url + `?${new URLSearchParams(query)}`;
    }

    try {
      setLoading(true);
      const response = await fetch(fullUrl);
      const data = await response.json();
      setData(data);
      setLoading(false);
      callback(data);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, [url, callback]);

  const runFetch = (query?: Q) => {
    console.log('runFetch', query);
    fetchData(query);
  };

  return { data, loading, error, runFetch };
}
