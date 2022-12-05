import React, { useContext, useEffect } from 'react'
import Buttons from '../../Components/Buttons';
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
function Sangue() {

  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])

  return (
    <>
    <MainContainer >
        <h1 className='title'>Grupos Sanguíneos e Fator RH</h1>
        <h4>GRUPO SANGUÍNEOS:</h4>
        <ul className='list'>
          <li>Os sangues se misturavam sem haver nenhum problema.</li>
          <li>Os sangues não se misturavam, havendo uma intensa reação que levava à destruição das hemácias (glóbulos vermelhos) e ampla formação de coágulo.</li>
        </ul>
        <p>
        &nbsp; &nbsp;Três tipos de sangue: tipo A, tipo B e tipo O, outro tipo é o 0 (zero), dando origem à famosa classificação ABO dos grupos sanguíneos.
        </p>
        <p>
        &nbsp; &nbsp;Algumas fontes chamam a classificação dos grupos sanguíneos de ABO e outras de AB0 (A,B,Zero). As duas formas são aceitáveis.
        </p>
        <h4>SÃO 8 OS TIPOS SANGUÍNEOS:</h4>
        <ul className='list'>
          <li>A+ (Grupos sanguíneos A com fator Rh positivo)</li>
          <li>B+ (Grupo sanguíneo B com fator Rh positivo)</li>
          <li>AB+ (Grupo sanguíneo AB com fator Rh positivo)</li>
          <li>O+ (Grupo sanguíneo O com fator Rh positivo)</li>
          <li>A- (Grupo sanguíneo A com fator Rh negativo)</li>
          <li>B- (Grupo sanguíneo B com fator Rh negativo)</li>
          <li>AB- (Grupo sanguíneo AB com fator Rh negativo)</li>
          <li>O- (Grupo sanguíneo O com fator Rh negativo)</li>
        </ul>
        <img src="https://biocienciaforadehora.files.wordpress.com/2015/10/fb_img_1466014628506.jpg" alt="grupo-sanguineo" className='file-img'/>
        <br />
        <h4>FATOR RH:</h4>
        <p>
         &nbsp; &nbsp;O nosso sangue é composto por uma parte líquida, chamada plasma, e uma parte sólida, que contém as células do sangue, nomeadamente hemácias, leucócitos e plaquetas. Em média 55% do sangue é líquido e 45% é composto por células.
        </p>
        <ul className='list'>
          <li>Antígeno A – Anticorpo ANTI-B</li>
          <li>Antígeno B – Anticorpo ANTI-A</li>
          <li>Antígeno A e B – sem Anticorpos</li>
          <li>Sem Antígeno – Anticorpo ANTI-B e ANTI-A.</li>
        </ul>

        <ul className='list' type="circle">
          <li> Brancos -{'>'} 44% são 0,43% são A, 9% são B e 4% são AB.</li>
          <li>Negros -{'>'} 49% são 0,27% são A, 20% são B e 4% AB.</li>
          <li>Asiáticos -{'>'} 43% são 0,27% são A, 25% são B e 5% são AB.</li>
        </ul>

        <ul className='list'>
          <li>Se uma pessoa tiver os alelos (Rh +) e (Rh +), o fator Rh no sangue será positivo.</li>
          <li>Se uma pessoa tiver os alelos (Rh +) e (Rh -), o fator Rh também será positivo.</li>
          <li>Se uma pessoa tiver os alelos (Rh -) e (Rh -), o fator Rh será negativo.</li>
        </ul>
        <img src="https://blogdoenem.com.br/wp-content/uploads/2022/05/Fator-Rh-tabela.png" alt="heranca-genetica" className='file-img'/>
        <h4>SALVE VIDAS DOE SANGUE</h4>
        <img src="https://64.media.tumblr.com/396de68d377c92e3faa8bbef4860167e/94ea3a1bc15231ee-c6/s640x960/3997b9153fd67aecbb1e8d22a4bf8d67af7ece37.pnj" alt="heranca-genetica" className='file-img'/>
        
        
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Grupos Sanguíneos e Fator RH</h1>
      <Quiz category={'sangue'}/>
    </MainContainer>

    <Buttons backLink="/doencas-geneticas" backName="Síndromes/Doenças Genéticas" last={true} />
    
    </>
      
  )
  
}

 export default Sangue
