import { useEffect, useState, useCallback } from 'react';
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const newDataSlice = response.data.items.slice(
        page * 28,
        (page + 1) * 28
      );

      setData((prevData) => [...prevData, ...newDataSlice]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [url, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, fetchData };
};

export default useFetchData;

