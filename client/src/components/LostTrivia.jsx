import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/winning.css";

const LostTrivia = () => {
  const { totalCorrectAnswers } = useContext(AppContext);

  return (
    <div className="lost-trivia">
      <div>
        <h1 style={{ textAlign: "center" }}>
          Next Tech Trivia <br></br>
          <span style={{ fontSize: "16px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span style={{ color: "#0072bc", font: "bold" }}>NetApp</span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>
          You answered {totalCorrectAnswers} out of 5 questions correctly.
        </h2>
        <h5>
          You need 4 or more correct answers in order to "spin to win" a gift
          card, but you're still in the running for our grand price drawing.
        </h5>
        <h2>Thanks for playing!</h2>
        <h2>Now, let's get back to Google Next OnAir.</h2>
      </div>

      <div>
        <a href="http://google.com">
          <input
            style={{
              border: "none",
              cursor: "pointer",
              color: "white",
              backgroundColor: "#f1bd42",
              padding: "10px",
              borderRadius: "20px",
              display: "inline-block",
              marginRight: "15px",
              marginTop: "5vh",
              marginBottom: "5vh",
              width: "100px",
              fontWeight: "bold",
            }}
            type="button"
            value="Close"
          />
        </a>
      </div>
    </div>
  );
};

export default LostTrivia;
