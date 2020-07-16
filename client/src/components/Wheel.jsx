import React from "react"; 
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Wheel_function from "../utils/wheel";

export class Wheel extends React.Component {
  constructor() {
    super();
    this.places = [":(", "10","50", "100", "150"];
  }

  render() {
    return (
      <div className="App">
        <h1>Spin to win! </h1>
        <Wheel_function items={this.places} />
      </div>
    );
  }
}

export default Wheel;

