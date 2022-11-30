import React, { useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'
import Quiz from '../../Components/Quiz/Quiz'
function GenoFeno() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <MainContainer >
        <h1 className='title'>Genótipo e Fenótipo</h1>
        <p>
        &nbsp;&nbsp;O genótipo corresponde à constituição genética de um indivíduo (o que seu DNA diz
        que você pode ser). A constituição genética de um organismo é definida como
        genótipo "definido como a composição genética de um indivíduo, ou seja, o conjunto
        de todos os genes daquele organismo. O gene, por sua vez, pode ser definido como
        uma sequência específica de nucleotídeos do DNA que armazena as informações
        hereditárias. Eles apresentam informações que serão responsáveis por uma dada
        característica." <br />
        "cada indivíduo possui um genótipo específico que é composto por genes
        provenientes de seus pais e que será mantido por toda a vida do organismo. Essa
        informação é importante para diferenciar genótipo de fenótipo, pois, enquanto o
        genótipo não é alterado, o fenótipo pode sofrer diversas modificações durante o
        desenvolvimento do organismo."
        </p>
        <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-constituicao-genetica-um-organismo-definida-como-genotipo-5a670bc1ee5de.jpg" alt="genotipo" className='file-img' />
        <p>A constituição genética de um organismo é definida como genótipo.</p>
        <br />
        <p>
        &nbsp;&nbsp;Fenótipo é um conceito adotado em genética e é definido como o conjunto de
        características observáveis de um organismo, ou seja, nesse sentido, incluem-se no
        sentido de características morfológicas e fisiológicas de um indivíduo. No fenótipo
        existe uma variação (traço ou estado) de uma característica que é expressa, também
        pode ser influenciado pelo ambiente. Em algumas situações, certos alelos serão
        expressos em determinados ambientes, mas não em outros. <br />
        &nbsp;&nbsp;Dessa forma, dois indivíduos com o mesmo genótipo podem expressar fenótipos
        diferentes, dependendo das diferentes condições ambientais. Por exemplo, irmãos
        Gêmeos idênticos conhecido como monozigóticos nascem obviamente juntos, porém
        um é adotado por outra família com hábitos diferentes, então pode-se visualizar que os
        gêmeos terão convivências diferentes, sendo estimulados constantemente ao fenótipo
        e todos sem exceção também sofrem influências, criando assim: suas próprias
        opiniões, personalidades, rituais, entre outras características como até mesmo a cor,
        por exemplo os Gêmeos são brancos porém um deles vai muito pra praia
        frequentemente um terá a coloração diferente do outro que não vai frequentemente,
        essa Coloração ocorreu em decorrência de uma variação em seu
        fenotipo . Portanto os gêmeos monozigóticos possuirão a mesma carga genética do
        outro e com isto podemos relatar que mesmo assim serão seres biologicamente
        diferentes um do outro, pois o que irá diferenciá-los será o fenótipo, o qual irá agir
        sobre eles.
        </p>
        <p>Fenótipo = genótipo + ambiente</p>
        <img src="https://64.media.tumblr.com/ee526e349d28ac7dcae5565e82190edd/d45f46c67d4adf51-fe/s640x960/0fa36f8f1980ba94a9500cf521780a3b6d5bbcf6.pnj" alt="fenotipo" className='file-img'/>
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Genótipo e Fenótipo</h1>
      <Quiz category={'genofeno'}/>
    </MainContainer>
    </>
      
  )
  
}

 export default GenoFeno