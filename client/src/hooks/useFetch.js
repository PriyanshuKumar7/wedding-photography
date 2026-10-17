/* Feature: Custom Hook for API Fetching */
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: BACKEND CONNECT - Fetch logic
    setLoading(false);
  }, [url]);

  return { data, loading, error };
};
export default useFetch;