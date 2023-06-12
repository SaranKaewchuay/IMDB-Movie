import { useState, useEffect } from "react";
import FetchAllData from "../component/useFetchAll";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const all = FetchAllData(url)


  const fetchData = async () => {
    setIsLoading(true);

      // const response = await axios.get(url);
      const newDataSlice = all.items.slice(
        page * 28,
        (page + 1) * 28
      );
      setData((prevData) => [...prevData, ...newDataSlice]);
      setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, fetchData };
};

export default useFetchData;
