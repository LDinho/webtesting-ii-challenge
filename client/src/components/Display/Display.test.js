import React from "react";
import { render, getNodeText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

const dataStats = {
  balls: 3,
  strikes: 2
};

it("should render successfully", () => {
  render(<Display />);

});

it("should render balls stats", () => {
  const { getByText } = render(<Display {...dataStats} />);
  const balls = getByText(/ball/i);

  expect(balls).toBeVisible();
});

it("should render strikes stats", () => {
  const { getByTestId } = render(<Display {...dataStats} />);
  const strikes = getByTestId("strikes");

  expect(getNodeText(strikes)).toBe(dataStats.strikes + "");
});
