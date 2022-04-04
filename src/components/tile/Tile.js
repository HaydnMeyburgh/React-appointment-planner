import React from "react";

export const Tile = ({value}) => {

  const arr = Object.values(value)
  return (
    <div className="tile-container">
      {arr.map((values, index) => {
        if (index === 0) {
          return  <p className="tile-title" key={index}>{values}</p>;
        } else {
          return <p className="tile" key={index}>{values}</p>;
        }
      })}
    </div>
  );
};
