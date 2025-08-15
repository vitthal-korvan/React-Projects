import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function minus() {
    console.log("minus is clicked");
    if (count > 0) {
      setCount((count) => (count = count - 1));
      console.log(count);
    }
  }
  function plus() {
    console.log("plus is clicked");
    setCount((count) => (count = count + 1));
    console.log(count);
  }

  return (
    <div className="counter">
      <h1>Counter Using UseState</h1>
      <div className="main-counter">
        <button onClick={minus}>-</button>
        <h2> {count} </h2>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Counter;
