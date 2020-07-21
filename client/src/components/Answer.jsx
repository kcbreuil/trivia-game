import React from "react";
import decode from "./../utils/decode";
import $ from "jquery";
import "../styling/answers.css";

export default (data) => {
  let id = data.answer.split(" ");
  id = id[0].toString().replace(/'|\./, "");
  let input = document.getElementsByTagName("input");
  let label = document.getElementsByTagName("label");

  //function to verify if answer is correct
  const answerCheck = (value) => {
    //once answer is clicked, all answers will be unclickable
    $("label").addClass("disable");
    //if answer value is equal to "1" add the correct class, else add the incorrect class
    if (value == 1) {
      $(`.${id}`).addClass("correct");
    } else {
      $(`.${id}`).addClass("incorrect");
      for (let i = 0; i < 20; i++) {
        if (input[i].value == 1) {
          $(label[i]).addClass("correct");
        }
      }
    }
  };
  return (
    <div className="answers">
      <input
        id={data.answer}
        type="radio"
        name={data.name}
        value={data.correct}
        className="answerInput"
        onClick={() => answerCheck(data.correct)}
      />
      <label for={data.answer} className={id}>
        {decode(data.answer)}
      </label>
    </div>
  );
};
