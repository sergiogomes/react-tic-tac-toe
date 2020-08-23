import React from "react";

import Tile from "./Tile";
import "./Tiles.css";

const tiles = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

const onHandleTileClick = (id) => {
  console.log(id);
};

const Tiles = () => {
  return (
    <React.Fragment>
      <div className="rows">
        {tiles.slice(0, 3).map((tile) => (
          <Tile
            key={tile.id}
            onHandleTileClick={onHandleTileClick}
            tile={tile}
          />
        ))}
      </div>
      <div className="rows">
        {tiles.slice(3, 6).map((tile) => (
          <Tile
            key={tile.id}
            onHandleTileClick={onHandleTileClick}
            tile={tile}
          />
        ))}
      </div>
      <div className="rows">
        {tiles.slice(6, 9).map((tile) => (
          <Tile
            key={tile.id}
            onHandleTileClick={onHandleTileClick}
            tile={tile}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Tiles;
