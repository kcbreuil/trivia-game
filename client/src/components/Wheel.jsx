import React from "react";
import WheelFunction from "../utils/wheel";
import "../styling/app.css";

const Wheel = () => {
  return (
    <div className="wheelPage">
      <h1>SPIN TO WIN!</h1>
      <WheelFunction />
    </div>
  );
};

export default Wheel;
