import React from 'react';
// import ReactDOM from 'react-dom';

import { render, fireEvent, getNodeText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import App from './App';

// xit('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("should render successfully", () => {
  render(<App />);

});

it("should update display on button clicks", () => {
  const { debug, getByTestId } = render(<App />);

  const strikeButton = getByTestId("strikes");
  const ballButton = getByTestId("balls");


  const strikesDisplayed = getByTestId("strikes-stat");

  const initialStrikes = Number(getNodeText(strikesDisplayed));

  expect(initialStrikes).toBe(0);

  fireEvent.click(strikeButton);

  const followingStrike = Number(getNodeText(strikesDisplayed));

  expect(followingStrike).toBe(initialStrikes + 1);


  const ballsDisplayed = getByTestId("balls-stat");

  const initialBalls = Number(getNodeText(ballsDisplayed));

  debug(ballsDisplayed); // debugger - like console.log. Helps to see the DOM

  expect(initialBalls).toBe(0);

  fireEvent.click(ballButton);

  const followingBall = Number(getNodeText(strikesDisplayed));

  expect(followingBall).toBe(initialBalls + 1);

});
