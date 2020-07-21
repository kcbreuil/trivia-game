import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/winning.css";

const LostTrivia = () => {
  const { totalCorrectAnswers } = useContext(AppContext);

  return (
    <div className="lost-trivia">
      <div>
        <h1 style={{ textAlign: "center", fontSize: "55px" }}>
          <span style={{ fontWeight: "lighter" }}>NEXT</span>&nbsp;Tech Trivia
          <br></br>
          <span style={{ fontSize: "33px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span
            style={{
              color: "#0072bc",
              font: "bold",
              fontSize: "55px",
              lineHeight: "6rem",
            }}
          >
            NetApp
          </span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontWeight: "800", marginTop: "9vh", fontSize: "30px" }}>
          You answered{" "}
          <span style={{ color: "#0072bc" }}>{totalCorrectAnswers}</span> out of
          5 questions correctly.
        </h2>
        <p
          style={{ lineHeight: "4rem", fontSize: "25px", margin: "auto 18vw" }}
        >
          You need 4 or more correct answers in order to "spin to win" a gift
          card, but you're still in the running for our grand prize drawing.
        </p>
        <h2 style={{ fontWeight: "800", margin: "4vh auto", fontSize: "30px" }}>
          Thanks for playing!
        </h2>
        <h2 style={{ fontWeight: "800", fontSize: "30px", margin: "4vh auto" }}>
          Now, let's get back to Google Cloud Next '20 OnAir.
        </h2>
      </div>

      <div className="button-flex">
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
              textAlign: "center",
            }}
            type="button"
            value="CLOSE X"
          />
        </a>
      </div>
    </div>
  );
};

export default LostTrivia;
