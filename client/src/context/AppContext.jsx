import React, { createContext, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment-timezone";

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
  const [prize150, setPrize150] = useState(0);
  const [prize100, setPrize100] = useState(0);
  const [prize50, setPrize50] = useState(1);
  const [prize10, setPrize10] = useState(0);

  const currentDate = moment().tz("America/Los_Angeles").format("YYYY-MM-DD");
  const weekOneStart = moment("2020-07-27").format("YYYY-MM-DD");
  const weekOneEnd = moment("2020-08-02").format("YYYY-MM-DD");
  const weekTwoStart = moment("2020-08-03").format("YYYY-MM-DD");
  const weekTwoEnd = moment("2020-08-09").format("YYYY-MM-DD");
  const weekThreeStart = moment("2020-08-10").format("YYYY-MM-DD");
  const weekThreeEnd = moment("2020-08-16").format("YYYY-MM-DD");
  const weekFourStart = moment("2020-08-17").format("YYYY-MM-DD");
  const weekFourEnd = moment("2020-08-23").format("YYYY-MM-DD");
  const weekFiveStart = moment("2020-08-24").format("YYYY-MM-DD");
  const weekFiveEnd = moment("2020-08-30").format("YYYY-MM-DD");

  if (weekOneStart <= currentDate && currentDate <= weekOneEnd) {
    axios.get("/rewards").then(function (response) {
      setPrize150(response.data[25].maxPerWeek);
      setPrize100(response.data[24].maxPerWeek);
      setPrize50(response.data[23].maxPerWeek);
      setPrize10(response.data[22].maxPerWeek);
    });
  }
  if (weekTwoStart <= currentDate && currentDate <= weekTwoEnd) {
    axios.get("/rewards").then(function (response) {
      setPrize150(response.data[9].maxPerWeek);
      setPrize100(response.data[8].maxPerWeek);
      setPrize50(response.data[7].maxPerWeek);
      setPrize10(response.data[6].maxPerWeek);
    });
  }
  if (weekThreeStart <= currentDate && currentDate <= weekThreeEnd) {
    axios.get("/rewards").then(function (response) {
      setPrize150(response.data[13].maxPerWeek);
      setPrize100(response.data[12].maxPerWeek);
      setPrize50(response.data[11].maxPerWeek);
      setPrize10(response.data[10].maxPerWeek);
    });
  }
  if (weekFourStart <= currentDate && currentDate <= weekFourEnd) {
    axios.get("/rewards").then(function (response) {
      setPrize150(response.data[17].maxPerWeek);
      setPrize100(response.data[16].maxPerWeek);
      setPrize50(response.data[15].maxPerWeek);
      setPrize10(response.data[14].maxPerWeek);
    });
  }
  if (weekFiveStart <= currentDate && currentDate <= weekFiveEnd) {
    axios.get("/rewards").then(function (response) {
      setPrize150(response.data[21].maxPerWeek);
      setPrize100(response.data[20].maxPerWeek);
      setPrize50(response.data[19].maxPerWeek);
      setPrize10(response.data[18].maxPerWeek);
    });
  }

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
