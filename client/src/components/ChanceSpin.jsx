import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ChanceSpin = () => {
  const history = useHistory();
  const { totalCorrectAnswers, totalQuestions } = useContext(AppContext);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "42px" }}>
          <span style={{ fontWeight: "lighter" }}>Next</span>&nbsp;Tech Trivia
          <br></br>
          <span style={{ fontSize: "27px", fontWeight: "lighter" }}>with</span>
          &nbsp;
          <span style={{ color: "#0072bc", font: "bold", fontSize: "42px" }}>
            NetApp
          </span>
        </h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <h2>Thank you for playing Next Tech Trivia with NetApp.</h2>
        <h2>
          You answered&nbsp;
          {totalCorrectAnswers} of {totalQuestions}&nbsp; questions correctly –
          nice work!
        </h2>
        <br></br>
        <span>
          You’ve won a chance to <b>“spin the wheel”</b> for a prize.
        </span>
        <br></br>
      </div>
      <button
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
        onClick={() => history.push("/wheel")}
      >
        SPIN
      </button>
    </div>
  );
};

export default ChanceSpin;
