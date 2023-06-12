import { useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1
      ) {
        callback();
      }
    };

    const handleScrollEvent = () => handleScroll();

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
    
  }, [callback]);

};

export default useInfiniteScroll;