import React from "react";
import decode from "./../utils/decode";

export default (data) => {
  return (
    <div>
      <label>
        <input type="radio" name={data.name} value={data.correct} />
        {decode(data.answer)}
      </label>
    </div>
  );
};
