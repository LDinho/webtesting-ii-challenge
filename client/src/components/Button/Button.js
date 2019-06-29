import React from "react";

const Button = (props) => {

  return (

    <button data-testid={props.statName}
            onClick={() => {
              return props.updateStat(props.statName)
            }}
    >
      {props.statName}

    </button>
  )

};

export default Button;
