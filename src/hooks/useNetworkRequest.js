import { useState, useCallback, useEffect } from "react";

const useNetworkRequest = (url, mapper = (d) => d) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let mapped = null;

  if (data === null) {
    mapped = data;
  } else {
    mapped = mapper(data);
  }

  return [mapped, loading, fetchData];
};

export default useNetworkRequest;
