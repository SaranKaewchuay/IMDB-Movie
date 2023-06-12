import { useState, useEffect } from "react";
import axios from "axios";

// เปลี่ยนไปใช้ prevPage
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  let page = 0;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      fetchData(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      
      const newDataSlice = response.data.items.slice(
        page * 28,
        (page + 1) * 28
      );

      setData((prevData) => [...prevData, ...newDataSlice]);
      page = page + 1;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return { data, isLoading, fetchData };
};

export default useFetchData;
