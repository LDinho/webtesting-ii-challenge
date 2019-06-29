import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

it("should render successfully", () => {
  render(<Dashboard />);
});

it("should render buttons", () => {
  const { getByText } = render(<Dashboard />);

  const buttonBall = getByText(/ball/i);
  const buttonStrike = getByText(/strike/i);
  const buttonHit = getByText(/hit/i);
  const buttonFoul = getByText(/foul/i);

  expect(buttonBall).toBeVisible();
  expect(buttonStrike).toBeVisible();
  expect(buttonHit).toBeVisible();
  expect(buttonFoul).toBeVisible();

});
