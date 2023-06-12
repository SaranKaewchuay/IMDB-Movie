import { useEffect } from "react";


const useInfiniteScroll = (callback) => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);
};

export default useInfiniteScroll;