import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ items }) => {
  return (
    <div>
      {
        items.map((item) => {
          const { name, ...rest } = item
          return <Tile
            name={name}
            description={rest}
          />
        })
      }
    </div>
  );
};
