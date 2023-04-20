import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

const url = "https://api.breakingbadquotes.xyz/v1/quotes";

function MultipleCustomHooks() {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`${url}/${counter}`);

  function Loading() {
    return <div className="alert alert-info text-center">Loading...</div>;
  }

  function printInfo() {
    if(data === null) return;
    return (
      <>
        {data.map((quote,index) => (
          <div className="info" key={index}>
            <h1 className="text-primary">Quote: {quote.quote}</h1>
            <p className="text-secondary">Author: {quote.author}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? Loading() : printInfo()}
      <button className="btn btn-success mx-2" onClick={() => increment(1)}>
        Add quote
      </button>
      <button className="btn btn-danger mx-2" onClick={() => decrement(1)}>
        Delete quote
      </button>
    </>
  );
}

export default MultipleCustomHooks;
