import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
   
      const response = await axios.get(url,
        {
          params: {
            startIndex: pageIndex * 28,
            limit: 28
          }
        }
      );

      console.log("response.data limit = ",response.data.items)
      setData((prevData) => [...prevData, ...response.data.items]);
      setPageIndex((prevIndex) => prevIndex + 1);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, fetchData };
};

export default useFetchData;

