import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/winning.css";
import "../styling/app.css";


function WonWheel() {
  const { result } = useContext(AppContext);
  const prize = [0, 10, 50, 100, 150];
  return (
    <div className="winning-background">
      <div>
        <h1 className="tech-trivia-name">
          <span className="next-name">Next</span>&nbsp;Tech Trivia
          <br></br>
          <span className="with-name">with</span>
          &nbsp;
          <span className="netapp-name">
            NetApp
          </span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 id="congrats">
          CONGRATULATIONS!!!
        </h1>
        <h2 className="h2-wontrivia">
          You have won a{" "}
          <span style={{ color: "#0072bc" }}>${prize[result]}</span> gift card
          to buy a coveted Google item of your choice.
        </h2>
        <p className="won-trivia-text">
          Check your inbox for an email with your gift card information.
        </p>
        <h2 className="h2-wontrivia">
          Thanks for playing!
          <br></br>
          <br></br>
          Now, let’s get back to Google Cloud Next '20: OnAir.
        </h2>
        <button id="button-wonwheel">
          CLOSE {"X"}
        </button>
      </div>
    </div>
  );
}

export default WonWheel;
