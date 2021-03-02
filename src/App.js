import React, { useState } from "react";
import { ResultItem } from "./ResultItem";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const [multiplicationBase, setMultiplicationBase] = useState();

  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const onSubmit = (e) => {
    e.preventDefault();
    if (number === "" || isNaN(number)) {
      return;
    }
    setMultiplicationBase(number);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="form">
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <input type="submit" />
      </form>
      <ul className="list">
        {multiplicationBase &&
          listArray.map((_, index) => (
            <ResultItem
              key={index}
              multiBase={multiplicationBase}
              multiplyNum={index + 1}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
