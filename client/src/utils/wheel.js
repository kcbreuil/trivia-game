import React from "react";
import LostWheel from "../components/LostWheel.jsx";
import WonWheel from "../components/WonWheel.jsx";
import "../styling/wheel.css";

export default class WheelFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    const winningResults = (item) => {
      setTimeout(() => {
        if (selectedItem !== null) {
          if (item === 0) {
            console.log(`you lost ${item}`);
            return <LostWheel />;
          } else {
            console.log(`You won ${item}`);
            return <WonWheel />;
          }
        }
      }, 5000);
    };

    return (
      <div className="wheel-container">
        {winningResults(selectedItem)}
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={this.selectItem}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
