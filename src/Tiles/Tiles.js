import React, { useState } from "react";

import Toast from "../Toast/Toast";
import Tile from "../Tile/Tile";
import "./Tiles.css";

const Tiles = () => {
  const [tiles, setTiles] = useState([
    { id: 1, bgColor: "bg-dark", blocked: false },
    { id: 2, bgColor: "bg-dark", blocked: false },
    { id: 3, bgColor: "bg-dark", blocked: false },
    { id: 4, bgColor: "bg-dark", blocked: false },
    { id: 5, bgColor: "bg-dark", blocked: false },
    { id: 6, bgColor: "bg-dark", blocked: false },
    { id: 7, bgColor: "bg-dark", blocked: false },
    { id: 8, bgColor: "bg-dark", blocked: false },
    { id: 9, bgColor: "bg-dark", blocked: false },
  ]);

  const [toasts, setToasts] = useState([
    { id: 1, message: "Begin!", bgColor: "bg-dark" },
  ]);

  const [player, setPlayer] = useState(1);

  const [status, setStatus] = useState("gameOn");

  const onHandleTileClick = (id) => {
    if (status === "gameOver") return;
    const tileIndex = tiles.findIndex((tile) => tile.id === id);
    if (tileIndex !== -1) {
      if (tiles[tileIndex].blocked) {
        createToast(`Tile ${tiles[tileIndex].id} already taken.`, "bg-dark");
        return;
      }
      updateTile(player, tileIndex);
      checkWin(tiles, player);
      return;
    }
    handleError(id);
  };

  const createToast = (message, bgColor) => {
    const newToast = {
      id: new Date().getTime(),
      message: message,
      bgColor: bgColor,
    };
    setToasts((toasts) => [newToast, ...toasts]);
  };

  const updateTile = (plr, index) => {
    const tilesCopy = [...tiles];
    tilesCopy[index].bgColor = plr === 1 ? "bg-green" : "bg-orange";
    tilesCopy[index].blocked = true;
    setTiles((tiles) => [...tiles, tilesCopy[index]]);
    setPlayer(plr === 1 ? 2 : 1);
  };

  const checkWin = (arr, plr) => {
    const bgColor = plr === 1 ? "bg-green" : "bg-orange";
    const player = plr === 1 ? "Green" : "Orange";

    if (
      (arr[0].bgColor === bgColor &&
        arr[1].bgColor === bgColor &&
        arr[2].bgColor === bgColor) ||
      (arr[3].bgColor === bgColor &&
        arr[4].bgColor === bgColor &&
        arr[5].bgColor === bgColor) ||
      (arr[6].bgColor === bgColor &&
        arr[7].bgColor === bgColor &&
        arr[8].bgColor === bgColor) ||
      (arr[0].bgColor === bgColor &&
        arr[3].bgColor === bgColor &&
        arr[6].bgColor === bgColor) ||
      (arr[1].bgColor === bgColor &&
        arr[4].bgColor === bgColor &&
        arr[7].bgColor === bgColor) ||
      (arr[2].bgColor === bgColor &&
        arr[5].bgColor === bgColor &&
        arr[8].bgColor === bgColor) ||
      (arr[0].bgColor === bgColor &&
        arr[4].bgColor === bgColor &&
        arr[8].bgColor === bgColor) ||
      (arr[2].bgColor === bgColor &&
        arr[4].bgColor === bgColor &&
        arr[6].bgColor === bgColor)
    ) {
      createToast(`Player ${player} won!`, bgColor);
      setStatus("gameOver");
      return;
    }

    for (const tile of arr) {
      if (tile.bgColor === "bg-dark") return;
    }

    createToast(`It is a Draw!`, "bg-dark");
  };

  const handleError = (id) => {
    setTimeout(() => {
      console.error(`Error! Tile ${id} not found. Please, reload the page.`);
      createToast(
        `Error! Tile ${id} not found. Please, reload the page.`,
        "bg-red"
      );
    }, 500);
  };

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
      <div className="wrapper">
        <div className="toast-rows">
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tiles;
