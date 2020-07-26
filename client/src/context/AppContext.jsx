import React, { createContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userSelection, setUserSelection] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [result, setResult] = useState(0);
  const [step, setStep] = useState(0);
  const [prize150, setPrize150] = useState(null);
  const [prize100, setPrize100] = useState(null);
  const [prize50, setPrize50] = useState(null);
  const [prize10, setPrize10] = useState(null);

  axios.get("/rewards").then(function (response) {
    setPrize150(response.data[2].maxPerWeek);
    setPrize100(response.data[0].maxPerWeek);
    setPrize50(response.data[3].maxPerWeek);
    setPrize10(response.data[4].maxPerWeek);
  });

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        user,
        setUser,
        userSelection,
        setUserSelection,
        totalCorrectAnswers,
        setTotalCorrectAnswers,
        totalQuestions,
        setTotalQuestions,
        result,
        setResult,
        step,
        setStep,
        prize150,
        setPrize150,
        prize100,
        setPrize100,
        prize50,
        setPrize50,
        prize10,
        setPrize10,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
