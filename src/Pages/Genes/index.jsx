import React, { useContext, useEffect } from 'react'
import Buttons from '../../Components/Buttons';
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
function Genes() {

  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])

  return (
    <>
    <MainContainer >
        <h1 className='title'>Genes</h1>
        <p>
        &nbsp;&nbsp;O gene é uma unidade hereditária que possui estrutura, função e localização definidas.
        Um segmento de uma molécula de DNA (ácido desoxirribonucleico) responsável pelas
        características herdadas geneticamente. O gene é composto por uma sequência
        específica de DNA (as letras A, T, C e G) que contém uma "receita" para produzir uma
        proteína que desempenha uma função no organismo. Cada gene codifica uma
        determinada sequência de uma cadeia polipeptídica (união de aminoácidos que formam
        a proteína).
        </p>
        <br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Gene_es.png" alt="genes" className='file-img'/>
        <h4>Classificação</h4>
        <br />
        <p>Gene dominante: responsável pela atribuição de determinada característica no descendente.</p>
        <img src="https://64.media.tumblr.com/51977893367dd711a703b462eec89f05/e4cf2271b81f74f0-34/s500x750/180896edce22c5d212e0b00665134325e1a74d23.pnj" alt="genes" className='file-img'/>
        <br />
        <p>Gene recessivo: manifesta-se na ausência de gene dominante</p>
        <img src="https://64.media.tumblr.com/df8311d35cf8f421db806fbe89f92a92/ded94a8dd9810a48-2a/s540x810/39a141845319a2a5fa6d3ecc7ac9a48668a5b0f2.pnj" alt="genes" className='file-img'/>
        <p>
        Gene estrutural: contém a informação que determina a estrutura dos seres vivos. <br />
        Gene operador: atua no funcionamento de outros genes. <br />
        Gene regulador: controla a síntese e transcrição de outros genes. <br />
        </p>
        <img src="https://i.pinimg.com/originals/f4/72/9f/f4729f9a10c7503b016992e620b61389.jpg" alt="genes" className='file-img'/>

    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Genes</h1>
      <Quiz category={'genes'}/>
    </MainContainer>

    <Buttons backLink="/leis-de-mendel" backName="Leis de Mendel" nextLink="/genotipo-fenotipo" nextName="Genótipo e Fenótipo"/>

    </>
      
  )
  
}

 export default Genes