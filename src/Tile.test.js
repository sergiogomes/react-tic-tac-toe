import React from "react";
import { render } from "@testing-library/react";
import Tile from "./Tile";

test("renders learn react link", () => {
  const prop = { id: 5 };
  const handleEvent = () => {};
  const { getByText } = render(
    <Tile onHandleTileClick={handleEvent} tile={prop} />
  );
  const linkElement = getByText(/Tile 5/);
  expect(linkElement).toBeInTheDocument();
});
