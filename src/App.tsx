import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleCounterIncrement() {
    setCount(count + 1);
  }
  function handleCounterDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleCounterDoubleIncrement() {
    setCount(count + 2);
  }
  function handleCounterReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://reactjs.org">learn react</a>
        <p>React + TS + Docker</p>
        <p>Count: {count}</p>
        <div className="control">
          <button type="button" onClick={handleCounterIncrement}>
            Increment
          </button>
          <button type="button" onClick={handleCounterDecrement}>
            Decrement
          </button>
          <button type="button" onClick={handleCounterDoubleIncrement}>
            Double Increment
          </button>
          <button type="button" onClick={handleCounterReset}>
            Reset Counter
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
