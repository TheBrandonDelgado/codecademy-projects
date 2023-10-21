import React from "react";

export const Tile = ({ name, description }) => {
  const descriptionArray = Object.values(description)

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        descriptionArray.map(value => (
          <p className="tile">{value}</p>
        ))
      }
    </div>
  );
};
