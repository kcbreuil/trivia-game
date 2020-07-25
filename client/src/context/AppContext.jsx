import React, { createContext, useState } from "react";

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
