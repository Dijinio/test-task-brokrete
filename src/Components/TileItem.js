import React, { useEffect } from "react";

function TileItem({ tValue, handleGeneratedNumber, handleTileRemove }) {
  const { id, number } = tValue;

  useEffect(() => {
    const timer = setInterval(() => {
      handleGeneratedNumber(number);
    }, number * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="tile-item">
      <span className="close-btn" onClick={() => handleTileRemove(id)}>
        X
      </span>
      {number}
    </span>
  );
}

export default TileItem;
