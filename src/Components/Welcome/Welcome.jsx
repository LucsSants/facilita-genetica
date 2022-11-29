import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import {Lightbulb} from 'phosphor-react'

import "./Welcome.css";


const Welcome = ({ category }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload:category});

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="welcome">
      <Lightbulb size={180} color="#1d8795" weight="duotone" />
      <p>Agora chegou a hora de testar o conhecimento adquirido no conteúdo acima, para iniciar o quiz basta clicar no botão [Iniciar] abaixo:</p>
      <button onClick={() => chooseCategoryAndReorderQuestions(category)}>
        Iniciar
      </button>
    </div>
  );
};

export default Welcome;
