import React, { useContext, useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'
import './index.css'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
import Buttons from '../../Components/Buttons';
function SinteseP() {

  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])
  return (
    <>
    <MainContainer >
        <h1 className='title'>Síntese Proteica</h1>
        
        <p>
        &nbsp; &nbsp;É o processo pelo qual o organismo produz as proteínas das quais necessita para que ocorram os processos de crescimento e manutenção do organismo. As informações básicas para a esse processo encontram-se no DNA, mais especificamente nos Genes, segmentos de DNA com a função de orientar a produção das proteínas. é formado
        </p>
        <img src="https://3.bp.blogspot.com/-5wor0u3VseM/Vv6A2jGRXOI/AAAAAAAAA9Y/DRCr2nibR3IUL_Sc9F-E4w3aNvH5tlNEg/s1600/resumo14.jpg" alt="sintese-de-proteinas" className='file-img'/>
      <p>por genes, que quando expressos em características físicas e visíveis correspondem
        ao fenótipo de uma espécie e também específicas de um indivíduos. Por meio de
        processos contínuos de replicação, tradução e transcrição, esses genes são responsáveis
        pela formação de todas as proteínas existentes no organismo animal e que formam o
        fenótipo. Inicia-se com a replicação, em que a fita dupla de DNA se abre por ação da
        enzima helicase. Posteriormente, sob ação de outra enzima, a polimerase, inicia-se a
        formação de uma fita de RNA mensageiro a partir da sequência de bases nitrogenadas do
        DNA, processo chamado de transcrição. As sequências de bases nitrogenadas
        codificantes são chamadas de éxons, e as não codificantes, de íntrons. Ao final da
        formação do RNAm, os íntrons serão descartados. Esse RNAm migra para
        o citoplasma celular, local em que a informação gênica presente na molécula é
        sintetizada em forma de proteína. Essa “leitura” de genes e formação da proteína é a parte
        chamada tradução.
        </p>
        <br />
        <p>
        &nbsp; &nbsp;A síntese proteica é divida em duas etapas, denominadas: Transcrição e Tradução
        </p>
        <br />
        <p>
        &nbsp; &nbsp;O processo inicia-se pela Transcrição, que consiste em converter a informação contida no
        Gene em uma molécula de RNA. É iniciado por uma enzima chamada de
        RNA polimerase, que se liga a uma sequência de nucleotídeos e separa a dupla fita do
        DNA, rompendo as ligações de hidrogênio, e usa uma das fitas como molde para a
        produção do RNA enquanto a outra fita permanece inativa. A RNA polimerase orienta a
        inserção de ribonucleotídeos complementares à fita molde de DNA, incorporando o
        nucleotídeo uracila (U) no lugar da timina (T), trocando a ligação A-T pela ligação A-U.
        O alongamento continua até que a RNA polimerase encontre uma sequência de
        nucleotídeos que promova o desligamento da RNA polimerase e a liberação do RNA
        recém-sintetizado. Essa molécula produzida recebe o nome de mRNA (RNA
        mensageiro), sendo então transferida do núcleo para o citoplasma da célula, onde
        orientará o próximo passo da síntese proteica, a Tradução. A Tradução consiste em
        converter o mRNA em uma sequencia específica de aminoácidos para formar uma
        proteína. Esse processo ocorre nos Ribossomos, onde o rRNA (RNA Ribossômico)
        percorre o mRNA, catalisando a união dos aminoácidos trazidos pelo tRNA (RNA
        Transportador), molécula responsável por conduzir até os Ribossomos os aminoácidos
        que serão utilizados na produção da proteína, pareando códon e anticódon, formando uma
        sequencia peptídica entre os aminoácidos. O término da síntese proteica ocorre quando
        um códon de fim é posicionado no ribossomo e não é reconhecido por nenhum tRNA,
        mas por proteínas de liberação que finalizam a síntese proteica, promovendo a liberação
        do polipeptídeo recém-sintetizado.
        </p>
        <img src="https://static.todamateria.com.br/upload/55/f3/55f311f659f74-como-ocorre-a-sintese-proteica-large.jpg" alt="como-ocorre-a-sintese-p" className='file-img' />
        <h4>QUEM PARTICIPA DA SÍNTESE PROTÉICA</h4>
        <img src="https://static.todamateria.com.br/upload/58/3d/583d58c0ba8ba-bases-nitrogenadas.jpg" alt="bases-nitrogenadas" className='file-img'/>


    
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Síntese Proteica</h1>
      <Quiz category={"sintesep"}/>
    </MainContainer>

    <Buttons backLink="/dna" backName="DNA e RNA" nextLink="/ciclo" nextName ="Ciclo Celular"/>
      
    </>
      
  )
  
}

 export default SinteseP
