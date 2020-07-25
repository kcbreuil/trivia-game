import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/chancespin.css";
import "../styling/app.css";

const ChanceSpin = () => {
  const { totalCorrectAnswers, totalQuestions, setStep } = useContext(
    AppContext
  );
  return (
    <div>
      <div>
        <h1 className="tech-trivia-name">
          <span className="next-name">Next</span>&nbsp;Tech Trivia
          <br></br>
          <span className="with-name">with</span>
          &nbsp;
          <span className="netapp-name">NetApp</span>
        </h1>
      </div>
      <div>
        <h2 className="h2-chancespin">
          Thank you for playing Next Tech Trivia with NetApp.
        </h2>
        <h2 className="h2-chancespin">
          You answered&nbsp;
          <span style={{ color: "#0072bc" }}>
            {totalCorrectAnswers}
          </span> of {totalQuestions}&nbsp;Questions Correctly – nice work!
        </h2>
        <div>
          <p className="chance-spin-text">
            You’ve won a chance to <b>“spin the wheel”</b> for a prize!
          </p>
        </div>
        <button id="button-chance-spin" onClick={() => setStep(2)}>
          SPIN {">"}
        </button>
      </div>
    </div>
  );
};

export default ChanceSpin;
