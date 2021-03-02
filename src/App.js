import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);

  console.log(number);

  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button className="button">Calculate</button>
      <br />
      <ul className="list">
        {number !== 0
          ? listArray.map((_, index) => (
              <li key={index}>
                {number} x {index} = {number * index}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default App;
