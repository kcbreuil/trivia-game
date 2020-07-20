import React from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import WheelFunction from "../utils/wheel";
import Losing from "./LostWheel";

export class Wheel extends React.Component {
  constructor() {
    super();
    this.places = [":(", "10", "50", "100", "150"];
  }

  render() {
    return (
      <div className="App">
        <h1>Spin to win! </h1>

        <WheelFunction items={this.places} />
      </div>
    );
  }
}

export default Wheel;
