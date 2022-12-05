import React, { useContext, useEffect } from 'react'
import Buttons from '../../Components/Buttons';
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
function MutacaoG() {

  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])
  return (
    <>
    <MainContainer >
        <h1 className='title'>Mutação Genética</h1>
        
        <img src="https://www.blogs.unicamp.br/ciencianerd/wp-content/uploads/sites/113/2021/11/double-strand-break_1-768x432.png" alt="DNA" className='file-img'/>
        <br />
        <p>
        &nbsp; &nbsp;Mutação é uma alteração , natural ou induzida por algum agente mutagênico , que ocorre no genoma (material genético do organismo ou vírus).
        </p>
        <p>
        &nbsp; &nbsp;Ela pode ocorrer tanto em células somáticas como em células germinativas , podendo ser herdada. 
        </p>
        <p>
        &nbsp; &nbsp;As mutações são os principais fontes de variabilidade genética influenciando diretamente o processo de evolução dos seres vivos. podem ser classificadas de acordo com o lugar onde ocorreram e efeitos causados. 
        </p>
        <p>
        &nbsp; &nbsp;A molecular: pode também ser chamada de Mutação genética ou pontual , afeta um nucleotídeo ou um grupo de nucleotídeos do DNA;
        </p>
        <p>
        &nbsp; &nbsp;Cromossômica: ocorre em mais de um gene , afetando , assim, a estrutura do cromossomo; 
        </p>
      <img src="https://6e7916598c.cbaul-cdnwnd.com/36865217d544a7b022074582287a3d75/200000264-d0a96d1a37/fs.JPG" alt="" className='file-img'/>
      <p>
      Genômica: altera o conjunto do genoma , podendo afetar o número total de cromossomos ou os cromossomos presente nos pares de forma individua. Esse tipo de mutação é responsável por causar algumas síndromes, como síndrome de Down.
      </p>
      <img src="https://64.media.tumblr.com/469c6c6444236e8e121a38efc33b5b74/0c8dd88474f51377-17/s640x960/2b2a70d06aab25f71b69a3c22768d266c309192b.pnj" alt="mutacao-genica" className='file-img'/>
      <p>
      &nbsp; &nbsp;Como dito, as mutações surgem de forma natural ou podem ser induzidas por agentes mutagênicos, isto é, substâncias químicas ou de natureza física que podem induzir as mutações, como os raios ultravioleta e raios X , bebidas alcoólicas, substâncias derivadas do tabaco, bem como alguns medicamentos.
      </p>
        
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Mutação Genética</h1>
      <Quiz category={'mutagen'}/>
    </MainContainer>

    <Buttons backLink="/cromossomos" backName="Cromossomos" nextLink="/heranca-genetica" nextName="Herança Genética"/>

    </>
      
  )
  
}

 export default MutacaoG
