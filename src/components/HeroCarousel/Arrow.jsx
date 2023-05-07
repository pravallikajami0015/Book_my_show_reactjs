import React from "react";
import "../../css/Style.css";

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{
          Color: "red",
          paddingLeft: "100px",
          paddingRight: "100px",
          zIndex: "4",

          fontSize: "30px",
        }}
        onClick={props.onClick}
      >
        {" "}
      </div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{
          Color: "red",
          paddingLeft: "60px",
          paddingRight: "60px",
          zIndex: "3",

          fontSize: "30px",
        }}
        onClick={props.onClick}
      >
        {" "}
      </div>
    </>
  );
}
