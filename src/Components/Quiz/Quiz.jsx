import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz";


import Question from "../Question/Question";
import GameOver from "../GameOver/GameOver";
import Welcome from "../Welcome/Welcome";

function Quiz({category}) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      {quizState.gameStage === "Start" && <Welcome category={category} />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </>
  );
}

export default Quiz;