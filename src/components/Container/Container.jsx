/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Container = ({
  property1,
  imgClassName,
  img = "https://c.animaapp.com/Zndjl2ps/img/7avabzyytaliootvgguafuelphu-svg.svg",
  img1 = "https://c.animaapp.com/Zndjl2ps/img/l1ntbtj8px6kzrliscis56etwre-svg.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className="container"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlay">
        <div className="overlap-group-wrapper">
          <div className={`overlap-group property-1-0-${state.property1}`}>
            <div className="rectangle" />
            <div className="div" />
            <div className="rectangle-2">
              {state.property1 === "hover" && (
                <>
                  <div className="text-wrapper">&lt;</div>
                  <div className="text-wrapper-2">&lt;</div>
                </>
              )}
            </div>
            <div className="rectangle-3" />
            <div className="frame">
              {state.property1 === "default" && (
                <>
                  <div className="text-wrapper-3">&lt;</div>
                  <div className="text-wrapper-4">&lt;</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="paragraph">
          <div className="heading-open">Trade Optimizer</div>
          <p className="p">
            Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the
            most of every opportunity.
          </p>
        </div>
      </div>
      <div className="div-2">
        <div className="overlay-2">
          <img
            className={`img ${imgClassName}`}
            alt="Img"
            src={
              state.property1 === "hover"
                ? "https://c.animaapp.com/Zndjl2ps/img/7avabzyytaliootvgguafuelphu-svg-1.svg"
                : img
            }
          />
          <div className="border-2" />
          <div className="div-3">
            <div className="heading">
              <div className="text-wrapper-5"> Market Insight</div>
            </div>
            <p className="stay-ahead-of-the">
              Stay ahead of the market. Get real-time updates on market trends, track top traders&#39; movements, and
              spot signals from key influencers.
            </p>
          </div>
        </div>
        <div className={`overlay-shadow property-1-6-${state.property1}`}>
          <div className="heading-key">Our features</div>
          <div className="border-3" />
        </div>
      </div>
      <div className="overlay-3">
        <img
          className="img-2"
          alt="Img"
          src={
            state.property1 === "hover"
              ? "https://c.animaapp.com/Zndjl2ps/img/l1ntbtj8px6kzrliscis56etwre-svg-1.svg"
              : img1
          }
        />
        <div className="border-4" />
        <div className="div-4">
          <div className="risk-guard">
            {state.property1 === "default" && <>Risk Guard</>}

            {state.property1 === "hover" && <>Risk Guard Agent</>}
          </div>
          <p className="text-wrapper-6">
            Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you
            navigate volatility and stay prepared for anything.
          </p>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };
  }

  return state;
}

Container.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  img: PropTypes.string,
  img1: PropTypes.string,
};
