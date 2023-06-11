import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/style.css";
import NavBar from "./navbar";

function TVCard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let page = 0
  window.innerHeight = 751
  document.documentElement.scrollTop = 0
  document.documentElement.offsetHeight = 160

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://imdb-api.com/en/API/Top250TVs/k_58ifr915"
      );
      const newDataSlice = response.data.items.slice(
        page * 28,
        (page + 1) * 28
      );
      console.log(page * 28,(page + 1) * 28)
      
      setData((prevData) => [...prevData, ...newDataSlice]);
      page = page + 1

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    // console.log("window.innerHeight = ",window.innerHeight)
    // console.log("document.documentElement.scrollTop =",document.documentElement.scrollTop)
    // console.log("document.documentElement.offsetHeight  =",document.documentElement.offsetHeight )
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      fetchData();
    }
  };
  

  useEffect(() => {
    console.log("window.innerHeight = ",window.innerHeight)
    console.log("document.documentElement.scrollTop =",document.documentElement.scrollTop)
    console.log("document.documentElement.offsetHeight  =",document.documentElement.offsetHeight )

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div>
      <NavBar />
      <div className="grid">
        {data.map((data) => (
            <div class="row">
              <div class="card column">
                <img src={data.image} alt={data.title} className="card-image" />
                <div className="text-center padding-10">
                  <p className="card-title ellipsis-title">{data.title}</p>
                  <p className="card-description ellipsis-description">
                    {data.crew}
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
      <div style={{ textAlign:"center"}}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
}

export default TVCard;
