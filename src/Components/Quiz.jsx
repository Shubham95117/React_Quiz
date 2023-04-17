import React, { useEffect, useMemo, useState } from "react";
import Trivia from "./Trivia";
import Timer from "./Timer";

function Quiz() {
  const [questionNumber, setquestionNumber] = useState(1);
  const [stop, setstop] = useState(false);
  const [earned, setearned] = useState("$ 0");
  const moneyPyramid = useMemo(
    () =>
      [
        {
          id: 1,
          amount: "$ 100",
        },
        {
          id: 2,
          amount: "$ 200",
        },
        {
          id: 3,
          amount: "$ 300",
        },
        {
          id: 4,
          amount: "$ 400",
        },
        {
          id: 5,
          amount: "$ 500",
        },
        {
          id: 6,
          amount: "$ 600",
        },
        {
          id: 7,
          amount: "$ 700",
        },
        {
          id: 8,
          amount: "$ 800",
        },
        {
          id: 9,
          amount: "$ 900",
        },
        {
          id: 10,
          amount: "$ 1000",
        },
        {
          id: 11,
          amount: "$ 1100",
        },
        {
          id: 12,
          amount: "$ 1200",
        },
        {
          id: 13,
          amount: "$ 1300",
        },
        {
          id: 14,
          amount: "$ 1400",
        },
        {
          id: 15,
          amount: "$ 1500",
        },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setearned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const data = [
    {
      id: 1,
      question: "Rolex is company specifies which type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following corresponds to ‘ek bataa do’?",
      answers: [
        {
          text: "Pura",
          correct: false,
        },
        {
          text: "Adha",
          correct: true,
        },
        {
          text: "Sawa",
          correct: false,
        },
        {
          text: "PaunaHide ",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "   The International Literacy Day is observed on  ",
      answers: [
        {
          text: "Nov 28",
          correct: false,
        },
        {
          text: "Sep 8",
          correct: true,
        },
        {
          text: "May 2",
          correct: false,
        },
        {
          text: "Sep 22 ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "The language of Lakshadweep. a Union Territory of India, is?       ",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telugu ",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " Bahubali festival is related to?",
      answers: [
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
        {
          text: "Jainism ",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: " Which day is observed as the World Standards  Day?",
      answers: [
        {
          text: "June 26",
          correct: false,
        },
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Nov 15",
          correct: false,
        },
        {
          text: "Dec 2 ",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "September 27 is celebrated every year as",
      answers: [
        {
          text: "Teachers' Day",
          correct: false,
        },
        {
          text: "National Integration Day",
          correct: false,
        },
        {
          text: "World Tourism Day",
          correct: true,
        },
        {
          text: "International Literacy Day ",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " Which of the following gods is also known as ‘Gauri Nandan’?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman ",
          correct: false,
        },
      ],
    },
  ];
  return (
    <div className="quiz">
      <div className="main">
        {stop ? (
          <h1 className="endText">You Earned:{earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setstop={setstop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setstop={setstop}
                setquestionNumber={setquestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
