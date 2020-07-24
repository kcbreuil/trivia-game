import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { render, Redirect } from "react-dom";
import { withRouter } from "react-router-dom";
import LostWheel from "../components/LostWheel";
import WonWheel from "../components/WonWheel";
import "../styling/wheel.css";
import pointer from "../images/pointer.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

const WheelFunction = () => {
  const { setStep } = useContext(AppContext);
  const list = ["😞", "$10", "$50", "$100", "$150"];
  const initialState = {
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
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // generate canvas wheel on load
    renderWheel();
  }, []);

  const topPosition = (num, angle) => {
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

    setState({
      top: topSpot - 1,
      offset: degreesOff,
    });
  };

  const renderSector = (index, text, start, arc, color) => {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "bold 35px Arial";
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
  };

  const renderWheel = () => {
    // determine number/size of sectors that need to created
    let numOptions = list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    setState({
      angle: arcSize,
    });

    // get index of starting position of selector
    topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    const colors = ["#dedfde", "#f9bb04", "#33a752", "#757575", "#4185f4"];
    for (let i = 0; i < numOptions; i++) {
      let text = list[i];
      renderSector(i + 1, text, angle, arcSize, colors[i]);
      angle += arcSize;
    }
  };

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 2000) + 500;
    setState({
      ...state,
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    // calcalute result after wheel stops spinning
    // setTimeout(() => {
    //   getResult(randomSpin);
    // }, 2000);
  };

  const getResult = (spun) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list

    let netRotation = ((spun % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + state.offset;
    let count = state.top + 1;
    while (travel > 0) {
      travel = travel - state.angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    setState({
      ...state,
      net: netRotation,
      result: result,
    });
  };

  // const reset = () => {
  //   // reset wheel and result
  //   setState({
  //     ...state,
  //     rotate: 0,
  //     easeOut: 0,
  //     result: null,
  //     spinning: false,
  //   });
  // };

  const redirectPage = async () => {
    if (list[state.result] == list[0]) {
      setStep(3);
    } else {
      setStep(4);

      let resultState = Number(list[state.result].substr(1)) * 100; //CONVERTING RESULT IN CENTS
      //console.log(localStorage.getItem("token"))
      //console.log(resultState)
      await axios
        .post(
          "/campaign",
          { data: { result: resultState } },
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(`estou funcionando?`);
        });
    }
  };

  return (
    <div className="App">
      <div style={{ display: "grid", columnCount: "3" }}>
        <canvas
          id="wheel"
          width="500"
          height="500"
          style={{
            WebkitTransform: `rotate(${state.rotate}deg)`,
            WebkitTransition: `-webkit-transform ${state.easeOut}s ease-out`,
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

      {
        state.spinning ? null : spin()
        // &&
        // setTimeout(() => {
        //   prize(state.result)
        // }, 1000)
      }

      <div className="display">
        {/* <span id="readout">
            YOUR RESULT:{"  "}
            <span id="result">{list[state.result]}</span>
          </span> */}
      </div>
      <button className="nextButton" onClick={redirectPage}>
        NEXT {">"}
      </button>
    </div>
  );
};
export default WheelFunction;
