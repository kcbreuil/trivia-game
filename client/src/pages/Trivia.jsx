import React, { useState } from "react";
import QuizData from "../components/QuizData";

const Trivia = () => {
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);

  //   const loadQuiz = () => {
  //     const questions = quizData.map((question) => {
  //       return question.question;
  //     });
  //     if (currentIndex === 0) {
  //       console.log(questions);
  //       return {
  //         question: QuizData[currentIndex].question,
  //         options: QuizData[currentIndex].options,
  //         answer: QuizData[currentIndex].answer,
  //       };
  //     }
  //   };
  //   loadQuiz();

  return (
    <div>
      <QuizData />
    </div>
  );
};

export default Trivia;
