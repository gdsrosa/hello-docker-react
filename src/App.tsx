import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="App">
        <header className="App-header">
          <a href="https://reactjs.org">learn react</a>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React + TS + Docker
          </p>
          <p>Count: {count}</p>
          <div className="control">
            <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
            <button type="button" onClick={() => {
              if(count > 0) {
                setCount(count - 1)
              }
            }}>
              Decrement
            </button>
            <button type="button" onClick={() => setCount(count + 2)}>Double Increment</button>
            <button type="button" onClick={() => setCount(0)}>Reset Counter</button>
          </div>
        </header>
    </div>
  );
}

export default App;
