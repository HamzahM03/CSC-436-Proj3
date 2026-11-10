import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok){
          throw new Error(`Failed to fetch data (HTTP ${res.status})`);
        }

        const data = await res.json();
        setData(data);

      } catch (err){
        setError(err.message);

      } finally {
        setLoading(false);

      }
      
    }

      getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;