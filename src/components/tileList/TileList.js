import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = ({info}) => {
  return (
    <div>
      {info.map((contact, index) => (
        <Tile key={index} 
          value={contact} 
        />
      ))}
    </div>
  );
};
