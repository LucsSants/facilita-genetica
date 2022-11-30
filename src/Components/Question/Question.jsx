import { useContext, useState } from "react";

import { QuizContext } from "../../context/quiz"

import Option from "../Options/Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option, event) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option , event },
    });
  };


  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={(event) => onSelectOption(option,event)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
      {quizState.answerSelected && (
        <>
        <div>
          <p> <b>Explicação:</b>{currentQuestion.explanation}</p>
        </div>
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
        </>
      )}
    </div>
  );
};

export default Question;
