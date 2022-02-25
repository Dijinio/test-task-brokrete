import React, { useState, useEffect, useRef } from "react";

function TileItem({
  tValue,
  handleGeneratedNumber,
  handleTileRemove,
  handleValueDecrease,
}) {
  const { id, number } = tValue;
  const [largeTile, setLargeTile] = useState(false);

  const valRef = useRef(tValue);

  useEffect(() => {
    const timer = setInterval(() => {
      handleGeneratedNumber(valRef.current.number);
      handleValueDecrease(id);
    }, valRef.current.number * 1000);

    return () => clearInterval(timer);
  }, [number]);

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
