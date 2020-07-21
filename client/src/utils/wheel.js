import React from "react";
import { render, Redirect } from "react-dom";
import { withRouter } from "react-router-dom";
import LostWheel from "../components/LostWheel";
import WonWheel from "../components/WonWheel";
import "../styling/wheel.css";
import pointer from "../images/pointer.png";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { Link } from "react-router-dom";

class WheelFunction extends React.Component {
  state = {
    list: ["😞", "$10", "$50", "$100", "$150"],

    radius: 75, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false,
  };

  componentDidMount() {
    // generate canvas wheel on load
    this.renderWheel();
  }

  renderWheel() {
    // determine number/size of sectors that need to created
    let numOptions = this.state.list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    this.setState({
      angle: arcSize,
    });

    // get index of starting position of selector
    this.topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    const colors = ["#dedfde", "#33a752", "#4185f4", "#f9bb04", "#757575"];
    for (let i = 0; i < numOptions; i++) {
      let text = this.state.list[i];
      this.renderSector(i + 1, text, angle, arcSize, colors[i]);
      angle += arcSize;
    }
  }

  topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    this.setState({
      top: topSpot - 1,
      offset: degreesOff,
    });
  };

  renderSector(index, text, start, arc, color) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = this.state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "35px Arial";
    ctx.fillStyle = "white";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 2000) + 500;
    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const { angle, top, offset, list } = this.state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    this.setState({
      net: netRotation,
      result: result,
    });
  };

  reset = () => {
    // reset wheel and result
    this.setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false,
    });
  };

  // prize = (item) => {
  //   if (item === 0) {
  //     console.log(`you lose ${item}`);
  //     return (
  //       <div>
  //         <LostWheel />
  //       </div>
  //     );
  //   } else {
  //     console.log(`you win ${item}`);
  //     return (
  //       <div>
  //         <WonWheel />
  //       </div>
  //     );
  //   }
  // };

  redirectPage = () => {
    //we have to create a condition in here,
    //if result == list[0] the "/lostwheel", else "/winning"
    const { history } = this.props;
    if (this.state.list[this.state.result] == this.state.list[0]) {
      if (history) history.push("/lostwheel");
    } else {
      if (history) history.push("/winning");
    }
  };

  render() {
    return (
      <div className="App">
        <div style={{ display: "grid", columnCount: "3" }}>
          <canvas
            id="wheel"
            width="500"
            height="500"
            style={{
              WebkitTransform: `rotate(${this.state.rotate}deg)`,
              WebkitTransition: `-webkit-transform ${this.state.easeOut}s ease-out`,
              backgroundColor: "transparent",
              gridColumn: "2",
              gridRow: "1",
              zIndex: "-4",
            }}
          ></canvas>
          <div
            style={{
              backgroundColor: "transparent",
              borderColor: "#D7503F",
              borderWidth: "25px",
              borderStyle: "solid",
              borderRadius: "50%",
              gridColumn: "2",
              gridRow: "1",
              width: "300px",
              height: "300px",
              marginTop: "75px",
              marginLeft: "75px",
              boxShadow: "inset 0.5px 0.5px 20px 3px black",
              zIndex: "200",
            }}
          >
            <img
              src={pointer}
              style={{ marginTop: "60px", height: "140px", width: "auto" }}
            />
          </div>
        </div>

        {this.state.spinning
          ? null
          : this.spin({})
            // &&
            // setTimeout(() => {
            //   this.prize(this.state.result)
            // }, 1000)
        }
        {/* 
        <div className="display">
          <span id="readout">
            YOUR RESULT:{"  "}
            <span id="result">{this.state.list[this.state.result]}</span>
          </span>
        </div> */}
        <button className="nextButton" onClick={this.redirectPage}>NEXT {'>'}</button>
      </div>
    );
  }
}
export default withRouter(WheelFunction);
