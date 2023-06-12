import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovieDetail = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://imdb-api.com/en/API/Title/k_yfvq3aed/${id}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [id]);

  return data;
};

export default useFetchMovieDetail;
