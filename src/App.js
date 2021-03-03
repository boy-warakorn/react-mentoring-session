import React, { useState } from "react";
import { ResultItem } from "./components/ResultItem";
import "./App.css";

const ARRAY_SIZE = 12;

const App = () => {
  const [number, setNumber] = useState(0);
  const [multiplicationBase, setMultiplicationBase] = useState();

  // const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const listArray = [...Array(ARRAY_SIZE + 1).keys()].slice(1);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(number)) {
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
          max={100}
          min={-100}
        />
        <input type="submit" />
      </form>
      <ul className="list">
        {multiplicationBase &&
          listArray.map((number, index) => (
            <ResultItem
              key={index}
              multiBase={multiplicationBase}
              multiplyNum={number}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
