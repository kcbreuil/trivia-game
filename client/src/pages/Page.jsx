import React, { useContext } from "react";

import HomePage from "../components/HomePage";
import Trivia from "./Trivia";
import Wheel from "../components/Wheel";
import LostWheel from "../components/LostWheel";
import WonWheel from "../components/WonWheel";
import { AppContext } from "../context/AppContext";

const Page = () => {
  const { step } = useContext(AppContext);
  return (
    <div>
      {step === 0 && <HomePage />}
      {step === 1 && <Trivia />}
      {step === 2 && <Wheel />}
      {step === 3 && <LostWheel />}
      {step === 4 && <WonWheel />}
    </div>
  );
};

export default Page;
