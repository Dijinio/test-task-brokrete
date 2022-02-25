import React, { useState, useEffect } from "react";
import TileItem from "./Components/TileItem";
import TileAddBtn from "./Components/TileAddBtn";

const initialValues = [
  { id: 1, number: 2 },
  { id: 2, number: 4 },
  { id: 3, number: 3 },
];

function App() {
  const [tileValues, setTileValues] = useState(initialValues);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);

  function handleGeneratedNumber(num) {}

  return (
    <div className="app-container">
      <h1>Test Application</h1>
      <div className="tile-container">
        {tileValues.map((val) => (
          <TileItem tValue={val.number} />
        ))}
        <TileAddBtn handleGeneratedNumber={handleGeneratedNumber} />
      </div>
    </div>
  );
}

export default App;
