import React from "react";
import Answer from "./Answer";
import decode from "./../utils/decode";

export default (data) => {
  const fieldset = data.visible ? "fieldset" : "fieldset u-hidden";
  const questionNo = data.name;
  return (
    <div className={fieldset}>
      <h1>{decode(data.heading)}</h1>
      <h3>{decode(data.question)}</h3>
      {data.answers &&
        data.answers.map((data, i) => {
          return (
            <Answer
              key={i}
              name={questionNo}
              answer={data.answer}
              correct={data.correct}
            />
          );
        })}
    </div>
  );
};
