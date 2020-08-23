import React from "react";
import { render } from "@testing-library/react";
import Toast from "../Toast/Toast";

test("renders learn react link", () => {
  const prop = { id: 1, message: "Tile already taken.", bgColor: "bg-dark" };
  const { getByText } = render(<Toast toast={prop} />);
  const linkElement = getByText(/Tile already taken/);
  expect(linkElement).toBeInTheDocument();
});
