import React, { useState, useEffect, useRef } from "react";
import TileItem from "./Components/TileItem";

const initialValues = [
  { id: 1, number: 2 },
  { id: 2, number: 4 },
  { id: 3, number: 3 },
];

function App() {
  const [tileValues, setTileValues] = useState(initialValues);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);

  const tileValueRef = useRef(initialValues);

  function generateNumber() {
    const randomNum = Math.ceil(Math.random() * 9);
    const newNum = { id: Date.now(), number: randomNum };

    setTileValues((prev) => [...prev, newNum]);
    tileValueRef.current = [...tileValues, newNum];
  }

  function handleGeneratedNumber(tValue) {
    setGeneratedNumbers((prev) => [...prev, tValue]);
  }

  function handleTileRemove(id) {
    const newTiles = tileValues.filter((v) => v.id !== id);
    setTileValues(newTiles);
  }

  function handleValueDecrease(id) {
    const result = [];

    tileValueRef.current.forEach((val) => {
      if (val.id === id) {
        val.number -= 1;
      }
      if (val.number > 0) {
        result.push(val);
      }
    });

    setTileValues(result);
  }

  return (
    <div className="app-container">
      <h1>Test Application</h1>
      <div className="tile-container">
        <p className="generated-numbers">{generatedNumbers.join("")}</p>
        {tileValues.map((val) => (
          <TileItem
            tValue={val}
            key={val.id}
            handleGeneratedNumber={handleGeneratedNumber}
            handleTileRemove={handleTileRemove}
            handleValueDecrease={handleValueDecrease}
          />
        ))}
        <span className="tile-item add-btn" onClick={() => generateNumber()}>
          +
        </span>
      </div>
    </div>
  );
}

export default App;
