import { useEffect, useCallback } from "react";

const useInfiniteScroll = (callback) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    const handleScrollEvent = () => handleScroll();

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [handleScroll]);

  return handleScroll;
};

export default useInfiniteScroll;
