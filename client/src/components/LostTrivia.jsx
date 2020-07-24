import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/losttrivia.css";
import "../styling/app.css";
import axios from "axios";

const LostTrivia = () => {
  const { totalCorrectAnswers } = useContext(AppContext);
  
  const sendEmail = async () => {
    await axios.post(
      "/sendemail",
      { data: { data: "it doesn't matter but don't erase me" } },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
  }
  sendEmail();
  
  return (
    <div className="lost-trivia">
      <div>
        <h1 className="tech-trivia-name" >
          <span className="next-name">Next</span>&nbsp;Tech Trivia
          <br></br>
          <span className="with-name" >with</span>
          &nbsp;
          <span className="netapp-name">NetApp
          </span>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2 className="h2-losttrivia">
          You answered{" "}
          <span style={{ color: "#0072bc" }}>{totalCorrectAnswers}</span> out of
          5 questions correctly.
        </h2>
        <p className="lost-trivia-text"
        >
          You need 4 or more correct answers in order to "spin to win" a gift
          card, but you're still in the running for our grand prize drawing.
        </p>
        <h2 className="h2-losttrivia">
          Thanks for playing!
        </h2>
        <h2 className="h2-losttrivia">
          Now, let's get back to Google Cloud Next '20: OnAir.
        </h2>
      </div>
      <div >
        <a href="http://google.com">
          <input id="lost-trivia-button"
            type="button"
            value="CLOSE X"
          />
        </a>
      </div>
    </div>
  );
};

export default LostTrivia;
