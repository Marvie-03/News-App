// useFetchNews.js
import { useState, useEffect } from 'react';

export const useFetchNews = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState(null); // Add error state for handling errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Clear any previous errors
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data?.articles);
      } catch (error) {
        setError(error); // Set error state if fetch fails
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [url]);
  
  return { data, isLoading, error }; // Return all relevant states  
};
