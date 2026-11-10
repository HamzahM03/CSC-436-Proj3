import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  function retry (){
    setRetryCount(prev => prev + 1);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function getData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {signal: controller.signal});

        if (!res.ok){
          throw new Error(`Failed to fetch data (HTTP ${res.status})`);
        }

        const data = await res.json();

        if (!controller.signal.aborted) {
          setData(data);
        }
      

      } catch (err){
        if (!controller.signal.aborted){
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted){
          setLoading(false);
        }
        

      }
      
    }

      getData();

      return () => {
        controller.abort();
      };

  }, [url, retryCount]);

  return {
    data,
    loading,
    error,
    retry
  };
}

export default useFetch;