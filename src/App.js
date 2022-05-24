import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2 className={count % 2 === 0 ? "green" : "red"}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decreament
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
}
