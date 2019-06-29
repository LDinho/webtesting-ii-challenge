import React from "react";

const Display = (props) => {

  return (

    <div className="batter-stats-container">
      <h2>Display</h2>

      <div className="stats">
        <div>Balls: </div>
        <div data-testid="balls-stat">{props.balls}</div>
      </div>
      <div className="stats">
        <div>Strikes: </div>
        <div data-testid="strikes-stat">{props.strikes}</div>
      </div>
    </div>
  )

};

export default Display;
