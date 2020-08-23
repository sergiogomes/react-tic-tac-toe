import React from "react";

import "./Tile.css";

const Tile = (props) => {
  const emitTileClick = () => {
    props.onHandleTileClick(props.tile.id);
  };

  return (
    <button
      disabled={props.tile.blocked}
      className={`tile ${props.tile.bgColor}`}
      onClick={emitTileClick}
    >
      {`Tile ${props.tile.id}`}
    </button>
  );
};

export default Tile;
