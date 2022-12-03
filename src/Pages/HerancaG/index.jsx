import React, { useContext, useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
import { QuizContext } from '../../context/quiz';
function HerancaG() {
  
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])
  return (
    <>
    <MainContainer >
        <h1 className='title'>Herança Genética</h1>
        
        <p>
        &nbsp; &nbsp;Herança genética nada mais é do que características verdades de mentos da família para outros, podendo ser desse da cor dos olhos, cor da pele doenças verdades. Através de um código genético atribuídos ao ser resultante,desse modo configurando o ser a ter uma mutação até uma característica única. Os filhos possuem genes herdados dos pais, esses genes são feitos nos gametas (óvulos e espermatozoides). Existe 3 diferentes tipos de doenças na herança gênica, são eles autossômico recessivo, autossômico dominante e herança ligado ao x.
        </p>
        <p>
        &nbsp; &nbsp;Na autossômica recessiva, uma criança deve herdar uma cópia mutante do gene de ambos os pais. Com a doença recessiva, cada pai tem uma cópia mutada e uma cópia normal do gene em causa. Como cada um dos pais tem apenas uma cópia mutante do gene, eles são portadores do gene e não desenvolvem a doença, eles não têm problemas de visão.
        </p>
        <p>
        &nbsp; &nbsp;Ademais, na autossômica dominante, a criança tem que receber um gene afetado do pai ou da mãe, assim há 50% de chance de possuir a doença e outros 50% de não possuir a doença, famílias tendem a ter grande parte dos seus integrantes atribuídos a esse gene.
        </p>
        <p>
        &nbsp; &nbsp;Nas doenças ligadas ao X, tendem a serem mais complexas do que as outras, pois vai depender só sexo da criança, todas as mulheres tem 2 cromossomos X e os homens 1 Y e 1 X, Se uma mãe portadora de uma mutação em um gene ligado ao X tem um filho, há 50% de chance de que o filho seja afetado e outros 50% do filho não herdar o gene mutado.
        </p>
        <img src="https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2019/12/image148.png" alt="heranca-genetica" className='file-img'/>
        <br />
        <img src="https://singularmp.com.br/wp-content/uploads/2021/06/singular-medicina-de-precisao-padroes-de-heranca-genetica-tabela-min-1024x1024.jpg" alt="heranca-genetica" className='file-img'/>
        
        
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Mutação Genética</h1>
      <Quiz category={'heranca'}/>
    </MainContainer>
    </>
      
  )
  
}

 export default HerancaG
