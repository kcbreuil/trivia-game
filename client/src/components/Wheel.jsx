import React from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import WheelFunction from "../utils/wheel";
import Losing from "../components/Losing";

export class Wheel extends React.Component {
  // let result
  // renderResults(selectedItem) {
  //   if (selectedItem === this.places[0]) {
  //     return (
  //       <div>
  //         <Losing />
  //       </div>
  //     );
  //   }
  // }
  // const checkboxOne = document.getElementById('checkbox-1');
  // const checkboxTwo = document.getElementById('checkbox-2');
  // const checkboxThree = document.getElementById('checkbox-3');
  // const checkboxFour = document.getElementById('checkbox-4');
  // const checkboxFive = document.getElementById('checkbox-5');

  // const checkArr = [
  //   checkboxOne,
  //   checkboxTwo,
  //   checkboxThree,
  //   checkboxFour,
  //   checkboxFive
  // ];

  // const handleTypeFilter = (type, checkbox) => {
  //   const isBoxChecked = checkArr.filter((box) => checkbox !== box);
  //   isBoxChecked.forEach((box) => (box.checked = false));
  //   setChosenType(type);
  // };
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
