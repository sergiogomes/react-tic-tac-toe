import React from "react";

import "./Tile.css";

const Tile = (props) => (
  <button className="tile" onClick={props.onHandleTileClick(props.tile.id)}>
    {`Tile ${props.tile.id}`}
  </button>
);

export default Tile;
