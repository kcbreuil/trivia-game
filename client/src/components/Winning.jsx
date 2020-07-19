import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styling/winning.css";

const Winning = () => {
  const { totalCorrectAnswers } = useContext(AppContext);
  return (
    <div className="winning-background">
      <h1>Next Tech Trivia with NetApp.</h1>
      <h2>You answered {totalCorrectAnswers} out of 5 questions correctly.</h2>
      <h5>
        You need 4 or more correct answers in order to "spin to win" a gift
        card, but you're still in the running for our grand price drawing.
      </h5>
      <h2>Thanks for playing!</h2>
      <h2>Now, let's get back to Google Next OnAir.</h2>
    </div>
  );
};

export default Winning;
