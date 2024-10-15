/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Cta = ({ property1, className, borderClassName, text = "Open dApp" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "hover",
  });

  return (
    <button
      className={`CTA ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="open-dapp">{text}</div>
      {state.property1 === "default" && <div className={`border ${borderClassName}`} />}
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Cta.propTypes = {
  property1: PropTypes.oneOf(["default", "hover"]),
  text: PropTypes.string,
};
