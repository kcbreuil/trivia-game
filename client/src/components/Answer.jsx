import React from "react";
import decode from "./../utils/decode";

export default (data) => {
  return (
    <div>
      <label>
        <button type="button" name={data.name} value={data.correct}>
          {decode(data.answer)}
        </button>
      </label>
    </div>
  );
};
