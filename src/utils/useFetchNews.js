import { useState, useEffect } from 'react';

export const useFetchNews = () => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fbacd5c457045bdbc49e7938c417f4e';
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData?.articles || []);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
