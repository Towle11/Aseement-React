import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file for styling


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
 

  const decrement = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);

};
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="screen">Count: {count}</p>
      <div className="button-container">
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={decrement}>-</button>
        <button className="button" onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
