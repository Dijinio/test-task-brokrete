import React, { useState, useEffect } from "react";

function TileItem({ tValue, handleGeneratedNumber, handleTileRemove }) {
  const { id, number } = tValue;
  const [largeTile, setLargeTile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleGeneratedNumber(number);
    }, number * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className={`tile-item ${largeTile && "large-tile"}`}
      onClick={() => setLargeTile((prev) => !prev)}
    >
      <span className="close-btn" onClick={() => handleTileRemove(id)}>
        X
      </span>
      {number}
    </span>
  );
}

export default TileItem;
