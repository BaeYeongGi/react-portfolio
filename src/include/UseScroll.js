import { useState, useEffect } from "react";

export const useScroll = () => {
  const [ scrollState, setScrollState ] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setScrollState({
      y: window.pageYOffset,
      x: window.pageXOffset,
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);
  return scrollState;
}