import React from "react";
import Answer from "./Answer";
import decode from "./../utils/decode";
import "../styling/question.css";

export default (data) => {
  const fieldset = data.visible ? "fieldset" : "fieldset u-hidden";
  const questionNo = data.name;
  let answers = data.answers;

  function shuffle(array) {
    var currentIndex = 3,
      temporaryValue,
      newIndex;

    if (data.name === "q-1") {
      while (0 <= currentIndex) {
        currentIndex -= 1;
        newIndex = [0, 0, 2, 3];
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[newIndex[currentIndex]];
        array[newIndex[currentIndex]] = temporaryValue;
      }
    }
    if (data.name === "q-3") {
      while (0 <= currentIndex) {
        currentIndex -= 1;
        newIndex = [3, 3, 3, 0];
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[newIndex[currentIndex]];
        array[newIndex[currentIndex]] = temporaryValue;
      }
    }
    if (data.name === "q-4") {
      while (0 <= currentIndex) {
        currentIndex -= 1;
        newIndex = [0, 0, 2, 3];
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[newIndex[currentIndex]];
        array[newIndex[currentIndex]] = temporaryValue;
      }
    }
    return array;
  }

  return (
    <div className={fieldset}>
      <p className="heading">{decode(data.heading)}</p>
      <p className="question">{decode(data.question)}</p>
      {answers &&
        shuffle(
          answers.map((data, i) => {
            return (
              <Answer
                key={i}
                name={questionNo}
                answer={data.answer}
                correct={data.correct}
              />
            );
          })
        )}
    </div>
  );
};
