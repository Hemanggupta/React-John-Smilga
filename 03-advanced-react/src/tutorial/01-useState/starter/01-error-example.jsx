const ErrorExample = () => {
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  const decrement = () => {
    count--;
    console.log(count);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <button onClick={decrement} className="btn btn-primary fs-1">
          {' '}
          -{' '}
        </button>
        <h2 className="px-3">{count}</h2>
        <button onClick={increment} className="btn btn-primary fs-1">
          +
        </button>
      </div>
    </>
  );
};

export default ErrorExample;
