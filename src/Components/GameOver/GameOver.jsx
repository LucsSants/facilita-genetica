import { useContext } from "react";

import { QuizContext } from "../../context/quiz"
import {CheckCircle} from 'phosphor-react'

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Parabéns!!!</h2>
      <CheckCircle size={150} color="#09793D" weight="duotone" />
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
