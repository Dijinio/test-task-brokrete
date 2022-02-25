import React, { useEffect } from "react";

function TileItem({ tValue, handleGeneratedNumber }) {
  const { id, number } = tValue;

  useEffect(() => {
    const timer = setInterval(() => {
      handleGeneratedNumber(number);
    }, number * 1000);

    return () => clearInterval(timer);
  }, []);

  return <span className="tile-item">{number}</span>;
}

export default TileItem;
