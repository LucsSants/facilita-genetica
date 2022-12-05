import React, { useContext, useEffect } from 'react'
import Buttons from '../../Components/Buttons';
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
function DoenGeneticas() {

  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])
  return (
    <>
    <MainContainer >
        <h1 className='title'>Síndromes/Doenças Genéticas</h1>
        
        <p>
        &nbsp; &nbsp;Os genes são os blocos de construção da herança. Eles passam de pais e filhos contêm o DNA, as instruções para produzir proteínas. As proteínas fazem a maior parte do trabalho nas células, movem moléculas de um lugar para outro, constroem estruturas, quebram toxinas, fazem muitos outros trabalhos de manutenção. Às vezes, há uma mutação, uma mudança em um gene ou genes. A mutação altera as instruções do gene para produzir uma proteína, para que a proteína não funcione corretamente ou esteja completamente ausente. Isso pode causar uma condição médica chamada desordem genética. <br /> Você pode herdar uma mutação genética de um dos pais.
        </p>
        <img src="https://www.researchgate.net/profile/Bruno-Cesar-Feltes/publication/326546560/figure/fig1/AS:651170804670467@1532262626802/Heranca-genetica-de-caracteristica-recessiva-Uma-doenca-autossomica-indica-que-nao.png" alt="herança-genetica" className='file-img'/>
        <p>
        &nbsp; &nbsp;Uma mutação também pode acontecer durante sua vida. Ou seja, As doenças génicas ou
        genéticas resultam de mutações ao nível dos genes ou dos cromossomas sejam eles
        autossómicos ou sexuais. Podem ser causadas pela mutação em apenas um gene ou em vários.
        Existem três tipos de distúrbios genéticos:
        </p>
        <ul className='list'>
          <li>Distúrbios de um único gene, onde uma mutação afeta um gene. A anemia falciforme é um exemplo.</li>
          <li>
          Distúrbios cromossômicos, nos quais os cromossomos (ou partes dos cromossomos) são modificados. Os cromossomos são as estruturas que sustentam nossos genes. A síndrome de Down é um distúrbio cromossômico.
          </li>
          <li>
          Distúrbios complexos, onde existem mutações em mais dois genes. Freqüentemente, seu estilo de vida, seu ambiente também desempenham um papel. O câncer de cólon é um exemplo.
          </li>
        </ul>
          <h4>Tipos de doenças genéticas</h4>
        <p>
        &nbsp; &nbsp;Existem vários tipos de distúrbios genéticos. A maneira pela qual o distúrbio é herdado pode ajudar a determinar os riscos que você terá em uma gravidez, o risco de recorrência em futuras crianças. Os riscos de ter um bebê com defeito de nascença devido a uma anormalidade genética podem aumentar quando:
          </p>
          <ul className='list'>
            <li>Os pais têm outro filho com um distúrbio genético.</li>
            <li>Há um histórico familiar de um distúrbio genético.</li>
            <li>Um pai tem uma anormalidade cromossômica.</li>
            <li>O feto tem anormalidades observadas no ultra-som.</li>
          </ul>
          <h4>Tipos de doenças genéticas</h4>
          <p>&nbsp; &nbsp;A seguir estão alguns dos diferentes tipos de doenças genéticas:</p>
          <p> <b>Cromossômica -</b> acomete as estruturas que mantêm os genes dentro de cada célula, chamada de cromossomos. Nestes casos, a pessoa não tem o cromossomo/ parte do cromossomo outêm material cromossômico duplicado</p>
          <p>
          <b>Complexa (multifatorial) -</b> esse tipo de doença genética resulta de uma combinação de mutações genéticas e outros fatores externos, como exposição química, dieta, uso de determinados medicamentos, tabaco ou álcool.
          <br />
          <b>Gene único (monogênico) -</b> ocorre a partir de mutação em um único gene.
          </p>
          <h4>Quais são os sinais e sintomas das doenças genéticas?</h4>
          <p>
          &nbsp; &nbsp;Os sintomas variam de acordo com o tipo e o estágio da doença genética, não existindo um
          único sintoma comum a todas elas. Os mais comuns podem ser: <br />
          Alterações comportamentais; <br />
          Problemas respiratórios; <br />
          Déficits cognitivos, quando o cérebro não consegue processar informações como deveria; <br />
          Atrasos no desenvolvimento, como problemas na fala ou habilidades sociais;<br />
          Problemas alimentares e digestivos, como dificuldade para engolir ou incapacidade de
          processar nutrientes; <br />
          Anomalias faciais ou de membros, que incluem dedos ausentes ou fissura de lábio e palato; <br />
          Problemas para se movimentar devido a rigidez ou fraqueza muscular; <br />
          Problemas neurológicos, como convulsões ou acidente vascular cerebral; <br />
          Baixo crescimento ou baixa estatura; <br />
          Perda de visão ou audição.
          </p>
          <h4>Como é feito o diagnóstico de doença genética?</h4>
          <p>
          &nbsp; &nbsp;Existem exames capazes de detectar mutações que tenham chances de desenvolver uma doença genética, indicados de acordo com a avaliação médica de cada caso. Veja alguns exemplos:
          </p>
          <p>
          Teste genético - é o padrão ouro para identificar as probabilidades de uma pessoa desenvolver doenças genéticas. O exame genético identifica mutações herdadas nos cromossomos, proteínas ou genes. As mudanças podem ser nocivas e aumentar as chances de desenvolver doenças, mas também podem ser neutras e não causar efeitos. O exame é realizado por meio da coleta de sangue, saliva ou células do interior da bochecha, que depois são analisados em laboratório.
          </p>
          <p>
          Teste de portador - exame de sangue que mostra se uma pessoa carrega qualquer mutação ligada a problemas genéticos. Isso é recomendado para os casais que decidem ter uma gestação, mesmo que não haja histórico familiar.
          </p>
          <p>
          Triagem pré-natal - a mulher grávida pode fazer exames de sangue para verificar as chances de o feto ter alguma alteração cromossômica.
          </p>
          <p>
          Testes de diagnóstico pré-natal - por meio de exames, é possível saber se o feto tem maior risco de desenvolver doenças genéticas. O teste pré-natal usa uma amostra de fluido do útero, chamado de amniocentese.
          </p>
          <p>
          Triagem neonatal - uma amostra de sangue do bebê recém-nascido é colhida, o chamado Teste do Pezinho, para verificar possíveis doenças genéticas e, se necessário, já receber os devidos cuidados.
          </p>
         <h4>Algumas das doenças genéticas existentes são:</h4>
         <p>
         <b>Síndrome de Down -</b> A síndrome de Down é uma alteração genética causada pela presença de um cromossomo extra no par 21. Os portadores da síndrome apresentam fraqueza muscular, orelhas mais baixas que o normal, leve retardo mental e baixa estatura.
         </p>
         <img src="https://sp.unifesp.br/epe/desc/images/CSP/USER/imagens/Infogr%C3%A1fico_da_S%C3%ADndrome_de_Down.jpg" alt="sindrome-de-down" className='file-img' />
         <p>
          <b> Anemia falciforme -</b> A anemia falciforme é uma alteração genética e com caráter hereditário, na qual as hemácias perdem o seu formato normal e adquirem a forma de foice. Essa condição dificulta a passagem das hemácias pelos vasos sanguíneos e compromete a oxigenação dos tecidos.
         </p>
         <img src="https://content.querobolsa.com.br/assets/372425a9-3bb3-45a3-b687-b5b29057ef29" alt="mutacao" className='file-img' />
         <p>
          <b>Câncer -</b> Alguns tipos de câncer são causados por fatores genéticos. O termo representa um conjunto de doenças que se caracterizam pelo crescimento celular desordenado e que pode se espalhar pelo corpo.
         </p>
         <p>
          <b>Daltonismo -</b> O daltonismo é uma herança ligada ao sexo, especificamente ao cromossomo X. Ele caracteriza-se pela incapacidade de distinguir cores, como o vermelho e o verde.
         </p>
          <img src="https://static.preparaenem.com/conteudo/images/cruzamento%20daltonismo.jpg" alt="daltonismo" className='file-img'/>

         <p>
         <b>Distrofia muscular de Duchene -</b> A distrofia muscular de Duchene possui caráter recessivo e ligado ao cromossomo X. Ela caracteriza-se pela ausência da proteína distrofina, o que leva ao enfraquecimento dos músculos.
         </p>
         <img src="https://movimentoduchenne.com.br/wp-content/uploads/2020/11/Gene-DMD-Distrofina.png" alt="distrofia" className='file-img' />

         <p>
         <b>Fibrose cística -</b> A fibrose cística é uma herança autossômica recessiva que se caracteriza pela produção de secreções que se acumulam nos pulmões e pâncreas.
         </p>

         <p>
         <b>Síndrome de Turner - </b> A síndrome de Turner é uma doença genética caracterizada pela presença de apenas um cromossomo sexual X, o que dá origem ao seguinte cariótipo 45, X. Por isso, afeta apenas indivíduos de sexo feminino. A doença acomete 1 a cada 3.000 nascimentos de mulheres. Além disso, a taxa de aborto pode chegar a até 97%.
         </p>
         
         <p>
          <b>Albinismo</b> O albinismo é uma doença de caráter autossômico recessivo. Ele compromete a produção da melanina, o pigmento responsável pela coloração da pele, olhos e pelos.
         </p>
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Síndromes/Doenças Genéticas</h1>
      <Quiz category={'doengen'}/>
    </MainContainer>

    <Buttons backLink="/heranca-genetica" backName="Herança Genética" nextLink="/grupos-sanguineos" nextName="Grupos Sanguíneos e Fator RH"/>

    </>
      
  )
  
}

 export default DoenGeneticas
