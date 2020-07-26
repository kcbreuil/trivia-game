import React from "react";
import "../styling/wheel.css";
import pointer from "../images/pointer.png";
import axios from "axios";
import moment from "moment";
import "moment-timezone";
import { AppContext } from "../context/AppContext";

class WheelFunction extends React.Component {
  static contextType = AppContext;

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
    const colors = ["#dedfde", "#f9bb04", "#33a752", "#D7503F", "#4185f4"];
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
    let textRadius = baseSize - 170;

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
  }

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    const context = this.context;
    let outcomes = [1300, 1250, 1200, 1100, 1000];

    if (context.prize150 === 0) {
      const item = 1000;
      let index = outcomes.indexOf(item);
      outcomes.splice(index, 1);
    }
    if (context.prize100 === 0) {
      const item = 1100;
      let index = outcomes.indexOf(item);
      outcomes.splice(index, 1);
    }
    if (context.prize50 === 0) {
      const item = 1200;
      let index = outcomes.indexOf(item);
      outcomes.splice(index, 1);
    }
    if (context.prize10 === 0) {
      const item = 1250;
      let index = outcomes.indexOf(item);
      outcomes.splice(index, 1);
    }

    let randomSpin = outcomes[Math.floor(Math.random() * outcomes.length)];
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

  getResult = async (spin) => {
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

  redirectPage = async () => {
    const context = this.context;

    const currentDate = moment().tz("America/Los_Angeles").format("YYYY-MM-DD");
    const weekOneStart = moment("2020-07-27").format("YYYY-MM-DD");
    const weekOneEnd = moment("2020-08-02").format("YYYY-MM-DD");
    const weekTwoStart = moment("2020-08-03").format("YYYY-MM-DD");
    const weekTwoEnd = moment("2020-08-09").format("YYYY-MM-DD");
    const weekThreeStart = moment("2020-08-10").format("YYYY-MM-DD");
    const weekThreeEnd = moment("2020-08-16").format("YYYY-MM-DD");
    const weekFourStart = moment("2020-08-17").format("YYYY-MM-DD");
    const weekFourEnd = moment("2020-08-23").format("YYYY-MM-DD");
    const weekFiveStart = moment("2020-08-24").format("YYYY-MM-DD");
    const weekFiveEnd = moment("2020-08-30").format("YYYY-MM-DD");

    if (this.state.result === 4) {
      if (weekOneStart <= currentDate && currentDate <= weekOneEnd) {
        await axios.patch("/rewards/5f1dcf5730b2bf134ccee5ba", {
          maxPerWeek: context.prize150 - 1,
        });
      }
      if (weekTwoStart <= currentDate && currentDate <= weekTwoEnd) {
        await axios.patch("/rewards/5f1dce1330b2bf134ccee5aa", {
          maxPerWeek: context.prize150 - 1,
        });
      }
      if (weekThreeStart <= currentDate && currentDate <= weekThreeEnd) {
        await axios.patch("/rewards/5f1dce4a30b2bf134ccee5ae", {
          maxPerWeek: context.prize150 - 1,
        });
      }
      if (weekFourStart <= currentDate && currentDate <= weekFourEnd) {
        await axios.patch("/rewards/5f1dce9d30b2bf134ccee5b2", {
          maxPerWeek: context.prize150 - 1,
        });
      }
      if (weekFiveStart <= currentDate && currentDate <= weekFiveEnd) {
        await axios.patch("/rewards/5f1dcedb30b2bf134ccee5b6", {
          maxPerWeek: context.prize150 - 1,
        });
      }
    }

    if (this.state.result === 3) {
      if (weekOneStart <= currentDate && currentDate <= weekOneEnd) {
        await axios.patch("/rewards/5f1dcf5130b2bf134ccee5b9", {
          maxPerWeek: context.prize100 - 1,
        });
      }
      if (weekTwoStart <= currentDate && currentDate <= weekTwoEnd) {
        await axios.patch("/rewards/5f1dce0430b2bf134ccee5a9", {
          maxPerWeek: context.prize100 - 1,
        });
      }
      if (weekThreeStart <= currentDate && currentDate <= weekThreeEnd) {
        await axios.patch("/rewards/5f1dce4030b2bf134ccee5ad", {
          maxPerWeek: context.prize100 - 1,
        });
      }
      if (weekFourStart <= currentDate && currentDate <= weekFourEnd) {
        await axios.patch("/rewards/5f1dce9030b2bf134ccee5b1", {
          maxPerWeek: context.prize100 - 1,
        });
      }
      if (weekFiveStart <= currentDate && currentDate <= weekFiveEnd) {
        await axios.patch("/rewards/5f1dced330b2bf134ccee5b5", {
          maxPerWeek: context.prize100 - 1,
        });
      }
    }
    if (this.state.result === 2) {
      if (weekOneStart <= currentDate && currentDate <= weekOneEnd) {
        await axios.patch("/rewards/5f1dcf4930b2bf134ccee5b8", {
          maxPerWeek: context.prize50 - 1,
        });
      }
      if (weekTwoStart <= currentDate && currentDate <= weekTwoEnd) {
        await axios.patch("/rewards/5f1dcdf130b2bf134ccee5a8", {
          maxPerWeek: context.prize50 - 1,
        });
      }
      if (weekThreeStart <= currentDate && currentDate <= weekThreeEnd) {
        await axios.patch("/rewards/5f1dce3130b2bf134ccee5ac", {
          maxPerWeek: context.prize50 - 1,
        });
      }
      if (weekFourStart <= currentDate && currentDate <= weekFourEnd) {
        await axios.patch("/rewards/5f1dce8030b2bf134ccee5b0", {
          maxPerWeek: context.prize50 - 1,
        });
      }
      if (weekFiveStart <= currentDate && currentDate <= weekFiveEnd) {
        await axios.patch("/rewards/5f1dceca30b2bf134ccee5b4", {
          maxPerWeek: context.prize50 - 1,
        });
      }
    }
    if (this.state.result === 1) {
      if (weekOneStart <= currentDate && currentDate <= weekOneEnd) {
        await axios.patch("/rewards/5f1dcf4330b2bf134ccee5b7", {
          maxPerWeek: context.prize10 - 1,
        });
      }
      if (weekTwoStart <= currentDate && currentDate <= weekTwoEnd) {
        await axios.patch("/rewards/5f1dcde030b2bf134ccee5a7", {
          maxPerWeek: context.prize10 - 1,
        });
      }
      if (weekThreeStart <= currentDate && currentDate <= weekThreeEnd) {
        await axios.patch("/rewards/5f1dce2430b2bf134ccee5ab", {
          maxPerWeek: context.prize10 - 1,
        });
      }
      if (weekFourStart <= currentDate && currentDate <= weekFourEnd) {
        await axios.patch("/rewards/5f1dce6530b2bf134ccee5af", {
          maxPerWeek: context.prize10 - 1,
        });
      }
      if (weekFiveStart <= currentDate && currentDate <= weekFiveEnd) {
        await axios.patch("/rewards/5f1dcebe30b2bf134ccee5b3", {
          maxPerWeek: context.prize10 - 1,
        });
      }
    }

    if (this.state.list[this.state.result] == this.state.list[0]) {
      context.setStep(3);
      // this is where we can send loser email in sendgrid :DDD //
      await axios.post(
        "/sendemail",
        { data: { data: "it doesn't matter but don't erase me" } },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    } else {
      context.setStep(4);
      context.setResult(this.state.result);

      let resultState =
        Number(this.state.list[this.state.result].substr(1)) * 100; //CONVERTING RESULT IN CENTS

      let template_code = "";
      if (resultState === 1000) {
        template_code = "OLFXBPGMRETX";
      } else if (resultState === 5000) {
        template_code = "HFCZAGMGGIHH";
      } else if (resultState === 10000) {
        template_code = "HRUFIRCFDPRR";
      } else if (resultState === 15000) {
        template_code = "JYAZYNEGORGN";
      }
      console.log(
        ` For ${resultState} the correct template is ${template_code}`
      );
      await axios.post(
        "/campaign",
        {
          data: {
            result: resultState,
            template: template_code,
          },
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="entireWheel">
          <canvas
            id="wheel"
            width="500"
            height="500"
            style={{
              WebkitTransform: `rotate(${this.state.rotate}deg)`,
              WebkitTransition: `-webkit-transform ${this.state.easeOut}s ease-out`,
            }}
            className="canvas"
          ></canvas>
          <div className="borderDiv">
            <img src={pointer} className="pointer" />
          </div>
        </div>

        {
          this.state.spinning ? null : this.spin({})
          // &&
          // setTimeout(() => {
          //   this.prize(this.state.result)
          // }, 1000)
        }

        <div className="display">
          {/* <span id="readout">
            YOUR RESULT:{"  "}
            <span id="result">{this.state.list[this.state.result]}</span>
          </span> */}
        </div>
        <button className="nextButtonWheel" onClick={this.redirectPage}>
          NEXT {">"}
        </button>
      </div>
    );
  }
}
export default WheelFunction;
