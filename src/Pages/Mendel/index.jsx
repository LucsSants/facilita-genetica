import React, { useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
function Mendel() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <MainContainer >
        <h1 className='title'>Leis De Mendel</h1>
        <p>
        &nbsp;&nbsp;Mendel realizou vários experimentos com inúmeras espécies de plantas de jardim, tentando
        até alguns com abelhas, mas obteve sucesso com ervilhas (SNUSTAD e SIMMONS, 2001). <br />
        A primeira lei de Mendel, também chamada de Princípio da Segregação dos Caracteres ou
        Lei da Segregação, diz que cada característica é condicionada por um par de fatores que se
        separam na formação dos gametas. Para chegar a essa conclusão, Mendel realizou uma série
        de experimentos com ervilhas e conseguiu aplicar a matemática em seus estudos.<br />
        &nbsp;&nbsp;Mendel iniciou seus experimentos em torno de 1857, quando começou a trabalhar com o
        cruzamento de ervilhas. As ervilhas foram uma escolha importante para o sucesso do
        experimento, uma vez que apresentam várias características que podem ser estudadas,
        apresentam curto tempo de geração, geram grande número de descendentes, além do fácil
        cultivo.<br />
        &nbsp;&nbsp;Para realizar seu experimento, Mendel analisou características que apresentavam duas
        formas distintas, como sementes verdes e amarelas, e flores brancas e púrpuras. No total,
        foram estudadas sete características: forma da semente (lisa ou ondulada), cor da semente
        (amarela ou verde), cor da flor (púrpura ou branca), forma da vagem (inflada ou constrita), cor
        da vagem (verde ou amarela), posição da flor (axial ou terminal) e comprimento do caule (alto
        ou anão).<br />
        &nbsp;&nbsp;Nesses experimentos, ele utilizou plantas chamadas de puras, ou seja, plantas que, após
        sucessivas gerações, davam origem a plantas com a mesma característica.<br />
        </p>
        <img src="https://static.todamateria.com.br/upload/pr/im/primeiraleimendel.jpg?auto_optimize=low" alt="mendel" className='file-img' />
        <p>
        &nbsp;&nbsp;A Segunda Lei de Mendel, também chamada de Lei da Segregação Independente, estabelece
        que “os fatores (alelos) para duas ou mais características se distribuem independentemente
        durante a formação dos gametas e se combinam ao acaso”. Gregor Mendel foi capaz de
        realizar essas afirmações após estudar dois caracteres ao mesmo tempo.<br />
        &nbsp;&nbsp;Como sabemos, Mendel realizou seus experimentos utilizando ervilhas, as quais
        possuem várias características que podem ser analisadas. Inicialmente ele estudou apenas
        uma característica por vez, o que o ajudou na formulação da primeira lei. Posteriormente, ele
        analisou duas características ao mesmo tempo. Mendel realizou o cruzamento de duas
        variedades puras com características diferentes: um indivíduo amarelo e liso e outro verde e
        rugoso. Ao cruzar esses indivíduos, Mendel obteve na geração F1 indivíduos heterozigotos
        para as duas características VvRr. Esses indivíduos eram, portanto, di-híbridos.<br />
        &nbsp;&nbsp;Mendel então realizou o cruzamento das plantas da geração F1 para compreender como
        ocorria a transmissão das características. Ele pretendia descobrir se os alelos V e R eram
        herdados sempre juntos ou de forma independente. Mendel testou as várias características
        das ervilhas, obtendo sempre algo em torno da proporção de 9:3:3:1. Esses vários
        experimentos foram fundamentais para Mendel compreender que os alelos segregam-se de
        maneira independente durante a formação do gameta.<br />
        </p>
        <img src="https://static.significados.com.br/foto/leis-de-mendel-significados_bg.jpg" alt="mendel" className='file-img' />
        <img src="https://64.media.tumblr.com/920f03a4a716edc9becd24eb0314ba2a/0f2102608f0333dd-38/s640x960/6e3ad8fc623b712e70c7345e26b7190f5a05cffe.pnj" alt="mendel" className='file-img' />
        <br />
        <h4>MAPA MENTAL PARA REVISAR</h4>
        <img src="https://static.wixstatic.com/media/e406d2_36e1db386f9b48b997eba1e03b095b19~mv2.jpg/v1/fill/w_864,h_576,al_c,q_85,enc_auto/Mapas_mentais_-_gEN%C3%89TICO_-_PRIMEIRA_LEI_.jpg" alt="mendel" className='file-img' />

    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Leis De Mendel</h1>
      <Quiz category={'mendel'}/>
    </MainContainer>
    </>
      
  )
  
}

 export default Mendel
