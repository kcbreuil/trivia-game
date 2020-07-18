import React, { useContext } from "react";
import decode from "./../utils/decode";
import { AppContext } from "../context/AppContext";

export default (data) => {
  const { userSelection, setUserSelection } = useContext(AppContext);

  const moveAlong = () => {
    if (userSelection === true && data.correct) {
    }
  };

  return (
    <div>
      <label>
        <button
          type="button"
          name={data.name}
          value={data.correct}
          onClick={() => setUserSelection(true)}
        >
          {decode(data.answer)}
        </button>
      </label>
    </div>
  );
};
