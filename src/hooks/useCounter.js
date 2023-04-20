import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  //Funcionalidades del contador, suma o resta el valor que se le especifique a cada función

  //INCREMENTA
  function increment(diferentialValue = 1) {
    setCounter(counter + diferentialValue);
  }
  //DECREMENTA
  function decrement(diferentialValue = 1) {
    if(counter - diferentialValue < 0) return;
    setCounter(counter - diferentialValue);
  }

  //RESET
  function reset() {
    setCounter(initialValue);
  }

  return { counter, increment, decrement, reset };
};
