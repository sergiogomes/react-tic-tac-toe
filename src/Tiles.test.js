import React from "react";
import { render } from "@testing-library/react";
import Tiles from "./Tiles";

test("renders learn react link", () => {
  const { getByText } = render(<Tiles />);
  const linkElement = getByText(/Tile 9/);
  expect(linkElement).toBeInTheDocument();
});
