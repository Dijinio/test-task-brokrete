import React, { useState, useEffect } from "react";
import TileItem from "./Components/TileItem";

const initialValues = [
  { id: 1, number: 2 },
  { id: 2, number: 4 },
  { id: 3, number: 3 },
];

function App() {
  const [tileValues, setTileValues] = useState(initialValues);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);

  function generateNumber() {
    const randomNum = Math.ceil(Math.random() * 9);
    const newNum = { id: Date.now(), number: randomNum };
    setGeneratedNumbers((prev) => [...prev, randomNum]);
    setTileValues((prev) => [...prev, newNum]);
  }

  console.log(generatedNumbers);
  return (
    <div className="app-container">
      <h1>Test Application</h1>
      <p className="generated-numbers">{generatedNumbers.join("")}</p>
      <div className="tile-container">
        {tileValues.map((val) => (
          <TileItem tValue={val.number} key={val.id} />
        ))}
        <span className="tile-item add-btn" onClick={() => generateNumber()}>
          +
        </span>
      </div>
    </div>
  );
}

export default App;
