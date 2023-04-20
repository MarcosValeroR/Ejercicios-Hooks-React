import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: null,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  //Si la url cambia vuelve a hacer la petición
  useEffect(() => {
    getFetch(url);
  }, [url]);

  return { ...state };
};
