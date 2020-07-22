import React from "react";
import Answer from "./Answer";
import decode from "./../utils/decode";

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
      <p
        style={{
          fontSize: "30px",
          fontWeight: "800",
          textAlign: "start",
          marginLeft: "10vw",
        }}
      >
        {decode(data.heading)}
      </p>
      <p
        style={{
          fontSize: "25px",
          marginBottom: "50px",
          textAlign: "start",
          marginLeft: "10vw",
          marginRight: "8vw",
        }}
      >
        {decode(data.question)}
      </p>
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
