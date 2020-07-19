import React from "react";
import decode from "./../utils/decode";
import "../styling/answers.css";

export default (data) => {
  return (
    <div>
      <input
        id={data.answer}
        type="radio"
        name={data.name}
        value={data.correct}
        className="answerInput"
      />
      <label for={data.answer} className="answerLabel">
        {decode(data.answer)}
      </label>
    </div>
  );
};
