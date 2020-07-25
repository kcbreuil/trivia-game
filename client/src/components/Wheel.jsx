import React from "react";
import WheelFunction from "../utils/wheel";

const Wheel = () => {
  return (
    <div className="App">
      <h1 style={{ fontWeight: "800", marginTop: "5vh", fontSize: "42px" }}>
        SPIN TO WIN!
      </h1>

      <WheelFunction />
    </div>
  );
};

export default Wheel;
