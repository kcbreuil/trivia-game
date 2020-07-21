import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ChanceSpin = () => {
  const history = useHistory();
  const { totalCorrectAnswers, totalQuestions } = useContext(AppContext);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "55px" }}>
          <span style={{ fontWeight: "lighter" }}>Next</span>&nbsp;Tech Trivia
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
      <br></br>
      <br></br>
      <div>
        <h2 style={{ fontWeight: "800", margin: "4vh auto", fontSize: "30px" }}>
          Thank you for playing Next Tech Trivia with NetApp.
        </h2>
        <h2 style={{ fontWeight: "800", fontSize: "30px" }}>
          You answered&nbsp;
          <span style={{ color: "#0072bc" }}>
            {totalCorrectAnswers}
          </span> of {totalQuestions}&nbsp; Questions Correctly – nice work!
        </h2>
        <div>
          <p
            style={{ lineHeight: "4rem", fontSize: "25px", margin: "8vh 18vw" }}
          >
            You’ve won a chance to <b>“spin the wheel”</b> for a prize!
          </p>
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
            fontSize: "20px",
          }}
          onClick={() => history.push("/wheel")}
        >
          SPIN {">"}
        </button>
      </div>
    </div>
  );
};

export default ChanceSpin;
