import React, { useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
function Ciclo() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <MainContainer >
        <h1 className='title'>Ciclo Celular</h1>
        <p>
        <br />O ciclo celular está relacionado com o processo de divisão celular da célula, desde do seu início até o dia de sua morte, somado a isso existe processos a serem estudados e abordados, começa na interfase e termina na mitose.
        </p>
      
        <img src="https://static.todamateria.com.br/upload/in/te/interfase.jpg" alt="cilco-celular" className='file-img'/>
        <br />
        <ol className='list'>
          <li>
            Interfase
            <p>A Interfase e a parte mais longa do ciclo celular, ela e dividida em 3 fases: G1, S, G2.</p>
            <ul className='list' type='disc'>
              <li>Na G1 ocorre o processo de crescimento da célula , aumento no numero de organelas, os cromossomos não estão duplicados.</li>
              <li>Na S acontece a duplicação do DNA, a divisão do material genético.</li>
              <li>G2 ocorre a síntese de proteínas, nessa fase também acontece um ponto de checagem, onde ocorre a reparação da célula ou se ela vai fazer apoptose, a morte da célula</li>
            </ul>
          </li>
          <li>
          Mitose
          <p>
          Na mitose acontece a formação de duas células -filhas totalmente idênticas a células originais, existe algumas fases na mitose são elas.
          </p>
          <ul className='list' type='disc'>
              <li>Prófase: Nessa etapa os cromossomos já estão duplicados, ocorre a condensação da cromatina e ela fica mais visível ao microscópio.</li>
              <li>Prometáfase: Os cromossomos tornam-se mais condensados, cada cromatina apresentará uma estrutura protéica presente no centrômero.</li>
              <li>Metáfase: E nessa etapa que acontece alguns teste como a cariotipagem, pois os cromossomos ficam em formato piramidal, os cromossomos atingem um grau maior de condensação.</li>
              <li>Anáfase: As cromatides-irmas separam-se, liberando as cromossomos-filhos, ambas deslocam-se para extremidades diferentes.</li>
              <li>Telófase: A última etapa da mitose, os cromossomos estão meninos condensados, dando origem aos núcleos celulares e seus envoltórios.</li>
            </ul>
          </li>
        </ol>
        <img src="https://edisciplinas.usp.br/pluginfile.php/4457833/mod_book/chapter/19686/imagens/Semana_9/sem9_fig01.jpg" alt="cilco-celular" className='file-img'/>
        <h4>ESQUEMATIZAÇÃO PARA FIXAR</h4>
        <img src="https://i.pinimg.com/originals/2f/bd/81/2fbd81fe496c94c820665ca493694f6f.jpg" alt="cilco-celular" className='file-img'/>
        <p>
        Interfase = É a fase mais longa do ciclo celular. Há a fase G1, S e G2. <br />
        G1 = Produção de RNA e proteínas.<br />
        S = Duplicação do DNA.<br />
        G2 = Crescimento celular.<br />
        
        Mitose = Multiplicação, produção de celulas identicas, divisão equacional (não há redução de cromossomos) <br />
        Meiose = Não há multiplicação, regeneração ou produção de células. Há a junção deb gametas, 23 cromossomos masculinos e 23 cromossomos femininos.<br />
        
        Tumores = São ocasionados através do processo de divsão celular. Há medicamentos que interrompem o processo de divisão, atuam no fuso mitótico da proteína que irá dividir os cromossomos.<br />
        </p>

        <h4>Etapas da divisão celular</h4>
        <div>
        <h4>(Mitose)</h4>
      
        <h5>Interfase</h5>
        <ol type='I' className='list'>
          <li>Multiplicação da cromatina.</li>
          <li>Sintese de RNA e proteinas</li>
        </ol>
        <h5>Prófase</h5>
        <ol type='I' className='list'>
          <li>Desaparecimento da carioteca.</li>
          <li>Condensação dos cromossomos (organizam-se).</li>
          <li>Desaparecimento do nucleolo.</li>
          <li>Aparecimento dos centriolos.</li>
          <li>Centriolos são responsáveis pelo alinhamento dos cromossomos.</li>
        </ol>
        <h5>Metáfase</h5>
        <ol type='I' className='list'>
          <li>Cromossomos alinhados no meio da célula.</li>
          <li>Cromossomos homologos.</li>
        </ol>
        <h5>Anafase</h5>
        <ol type='I' className='list'>
          <li>Os cromossomos se separam.</li>
          <li>Há a quebra dos centromeros.</li>
          <li>Separação das cromatides irmãs.</li>
        </ol>
        <h5>Telofase</h5>
        <ol type='I' className='list'>
          <li>Aparecimento do nucleolo.</li>
          <li>Descondensação dos cromossomos.</li>
          <li>Aparecimento do nucleo.</li>
        </ol>
      
      <h4>(Meiose)</h4>
    
        Meiose = Redução dos cromossomos. <br />
        Formação de gametas/esporos <br />
        <h4>Meiose 1</h4>
        <ul className='list'>
          <li>Reducional.</li>
          <li>Ocorre o crossing over ( recombinação gênica), realiza a variabilidade genética.</li>
        </ul>
        <p>
        Profase = Ocorre o crossing over através das etapas, leptoteno, zigoteno, paquiteto, diploteno, diacinese. <br />
        Leptoteno = Condensação dos cromossomos.<br />
        Zigoteno = Pareamento dos cromossomos homologos.<br />
        Paquiteto = Crossing over.<br />
        Diplóteno = Quiasmas.<br />
        Diacinese = Desintegração da carioteca<br />
        </p>
        
        </div>

        
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Ciclo Celular</h1>
      <Quiz category={'ciclo'}/>
    </MainContainer>
    </>
      
  )
  
}

 export default Ciclo
