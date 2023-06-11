import { useState, useEffect } from "react";


const useFetchData = (data_catalog) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

      const newDataSlice = data_catalog.slice(
        page * 28,
        (page + 1) * 28
      );
      setData((prevData) => [...prevData, ...newDataSlice]);
      setPage((prevPage) => prevPage + 1);
      // page = page + 1
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, fetchData };
};

export default useFetchData;
