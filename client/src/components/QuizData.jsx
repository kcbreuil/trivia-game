import React from "react";

const QuizData = () => {
  const quizData = [
    {
      id: 0,
      question: `If Google Next had happened on August 29, 1966, what concert would you
            have gone to see in Candlestick Park?`,
      options: [
        `A. The Beatles`,
        `B. Elvis and Taylor Swift mash-up`,
        `C. Eddie Vedder’s first concert`,
        `D. Dr. Teeth and The Electric Mayhem Tour`,
      ],
      answer: `The Beatles`,
    },
    {
      id: 1,
      question: `Which years was NetApp named Google Cloud Technology Partner of the
      Year?`,
      options: [
        `A.1875 and 1877`,
        `B. 2018 and 2019`,
        `C. 1980 and 1988`,
        `D. 2000 and 2002`,
      ],
      answer: `2018 and 2019`,
    },
  ];

  return <div>{quizData.forEach((question) => question.question)}</div>;
};

export default QuizData;
