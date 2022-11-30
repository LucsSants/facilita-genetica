import React, { useEffect } from 'react'
import MainContainer from '../../Components/MainConteiner'

import Cromossomo1 from '../../assets/cromossomos1.png'
import Cromossomo2 from '../../assets/cromossomos2.png'
import './index.css'

import Quiz from '../../Components/Quiz/Quiz'
function Cromossomos() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <MainContainer >
        <h1 className='title'>Cromossomos</h1>
        <img src="https://img.freepik.com/vetores-premium/colecao-de-icones-de-dna-simbolo-de-cromossomo-humano-elementos-de-design-vetorial_566734-36.jpg?w=740" alt="cromossomos" className='file-img'/>
        
        <p>
        &nbsp; &nbsp;Os cromossomos surgiram a partir da necessidade de compactação da longa molécula de
        ácido desoxirribonucleico (DNA). Essa compactação é importante porque permite que o
        material genético fique contido em um pequeno espaço, enquanto satisfaz, também, as
        suas necessidades de replicação e de transcrição. Além do DNA, os cromossomos
        também são compostos pelo ácido ribonucleico (RNA) e por proteínas ácidas e básicas
        (BORGES-OSÓRIO; ROBINSON, 2013). Cada espécie possui o próprio material
        genético, isto é, uma sequência de moléculas que induzem suas características. Em
        função disso, a formação de um novo indivíduo sempre é acompanhada de semelhanças
        com os seus progenitores. Os cromossomos são estruturas formadas por uma molécula
        de DNA associada às proteínas histonas. Quando um novo indivíduo é formado, ele
        recebe alguns cromossomos dos seus progenitores para formar o próprio código
        genético. Cada um desses traços é um cromossomo e eles estão presentes em todos os
        núcleos de cada uma das suas células. Ou seja, uma espécie de impressão digital.
        Se um homem e uma mulher, ambos com 23 pares de cromossomos, tiverem um filho,
        esse novo ser também possuirá 23 pares de cromossomos, não 46. Isso porque se ele
        possuísse 46, não pertenceria à espécie humana. Através dessa lógica temos a
        confirmação de que os gametas só podem se reproduzir por meiose. Essa é a única
        forma de unir duas células com 23 pares cada e o resultado final continuar sendo 23.
        </p>

        <h4>Existem indivíduos haplóides e diplóides: </h4>

        <p>
          <b>Haplóides: N:</b> cada cromossomo corresponde a uma característica do ser. <br />
          <b>Diplóide: 2N:</b>  cada par de cromossomos corresponde a uma característica do ser.No nosso caso, somos diplóides. O ser humano possui o número de cromossomos 2n = 23, ou seja, há 23 pares de cromossomos que determinam nossas características.
        </p>

          <br />
        <h4>Cromossomos na intérfase</h4>
        <img src="https://blog.aprovatotal.com.br/wp-content/uploads/2018/12/ciclo-celular-bt-iloveimg-compressed-1024x576.png" alt="cromossomo" className='file-img' />
        <p>
          <br />
        &nbsp; &nbsp;É nesse período que o DNA cromossômico está ativo e a célula está em produção
        constante de proteínas, além de estar se preparando para a próxima divisão celular.
        Logo, é nessa fase que o material genético apresenta-se como filamentos emaranhados,
        que são denominados cromatina (DNA, proteínas histônicas e não histônicas). A
        cromatina pode apresentar-se sob dois aspectos: a eucromatina, que constitui a maior
        parte do cromossomo e apresenta menor compactacão: e a heterocromatina, que
        corresponde às regiões da cromatina que apresentam maior compactação. 
        </p>
        <img src={Cromossomo1} alt="cromossomo" className='file-img' />
        <p>
        &nbsp; &nbsp;A heterocromatina pode ser classificada em constitutiva, que são regiões do DNA não
        expressas, e facultativa, que está relacionada com a inativação de cromossomos inteiros
        de uma linhagem celular.É nesse período que o DNA cromossômico está ativo e a
        célula está em produção constante de proteínas, além de estar se preparando para a
        próxima divisão celular.
        </p>
          <br />
        <h4>Cromossomos metafásicos</h4>
        <p>&nbsp; &nbsp;Os cromossomos só podem ser visualizados brevemente na metáfase (fase da divisão
        celular). Nessa fase, a cromatina apresenta o maior grau de condensação, formando,
        assim os cromossomos, os quais são compostos pelas cromátides. As cromatides são
        unidas pelo centrômero ou construção primária. O centrômero é uma região de
        heterocromatina que une as cromátides. que são geneticamente idênticas e, por isso,
        chamadas de cromátides-irmãs (BORGES-OSÓRIO; ROBINSON, 2013).
        </p>
          <br />
        <h4>Classificação morfológica dos cromossomos</h4>
        <img src="https://lh3.googleusercontent.com/TR5JHHnW03BqGZgXBdcK_uyaqrwylnJ_Q1zKVzbWGlfMFP-_hTA3c09fI3hPxJi5LavrtAGZBkIi06M--hkc1WxWNAtaqBI_0I2iN7J231Oyl_0JNA5-9HS39vtYRTp-Bghj2qk" alt="cromossomo" className='file-img'/>
        <p>
        &nbsp; &nbsp;Dos cromossomos humanos, 44 ou 22 pares são homólogos nos dois sexos e
        sao denominados autossomos. Os dois restantes sao os cromossomos sexuais.
        que são homólogos na mulher (XX) e diferentes no homem (XY). Esses cromossomos
        podem ser visualizados de forma melhor durante a divisão celular, que representa o
        momento de maior compactação, como descrito anteriormente neste capitulo.
        Os cromossomos não são estruturas uniformes ao longo do seu comprimento,
        apresentando uma construção primária ou centrômero, que é responsável pela
        movimentação dos cromossomos durante a divisão celular. O centrômero é responsável
        pela divisão do cromossomo em dois braços: o braço curto (p) e o braço longo (q). A
        extremidade dos cromossomos é denominada telômero, que mantém a estabilidade e a
        integridade de toda a estrutura (BORGES-OSÓRIO; ROBINSON, 2013).
        A partir da posição do centrômero, podemos classificar morfologicamente os
        cromossomos como:
        </p>
        <ul className='list'>
        <li><b>Metacêntrico:</b>o centrômetro está localizado centralmente.</li>
        <li><b>Acrocêntrico:</b>o centrômetro está próximo das extremidades. Em humanos esses cromossomos apresentam nas extremidades dos seus braços curtos, apêndices de forma pedunculada, denominados satélites</li>
        <li><b>Telocêntrico:</b>o centrômero apresenta uma posição intermediária.</li>
        <li><b>Submetacêntrico:</b>o centrômero está localizado na porção terminal. Esse tipo de cromossomo não é encontrado na espécie humana (BORGES-OSORIO; ROBINSON, 2013).</li>
        </ul>
        <img src={Cromossomo2} alt="cromossomo" className='file-img' />
        <p>
        &nbsp; &nbsp;Com relação ao tamanho ou comprimento, os cromossomos podem ser classificados em
        grandes, médios, pequenos e muito pequenos. Para designar os tamanhos. é determinada
        uma ordem decrescente na qual os cromossomos são classificados em sete grupos,
        nomeados de A a G e numerados, aos pares, de 1 a 22. Além disso, os cromossomos
        sexuais podem ser classificados à parte ou nos respectivos grupos originais. O
        cromossomo X é originalmente classificado no grupo C, sendo submetacentrico e de
        tamanho intermediário ao dos pares 6 e 7. O cromossomo Y é classificado no grupo G,
        sendo acro-cêntrico e de tamanho muito pequeno.O par l é o de maior tamanho,metacêntrico e pertencente ao grupo A. O par 22 é o menor do cariótipo, acrocêntrico e
        pertencente ao grupo G. 
        </p>
          <br />
        <h4>Cromossomo Autossomo</h4>
        <img src="https://djalmasantos.files.wordpress.com/2014/08/014.jpg" alt=""  className='file-img'/>
        <p>
        &nbsp; &nbsp;São todos os 22 primeiros pares de cromossomos. Chamá-los de autossomos significa
        dizer que desenvolvem características comuns a todos da espécie. Por exemplo, todos os
        seres humanos possuem cabelo de alguma forma, correto? Pois então, essa característica
        comum a todos os humanos é responsabilidade de um dos primeiros 22 pares de
        cromossomos.
        </p>
        <h4>Cromossomos Sexuais</h4>
        <p>
        &nbsp; &nbsp;Os cromossomos sexuais (ou heterossomos) são os cromossomos do 23º par que
        falamos mais acima. Eles são representados pelas letras X e Y e têm a responsabilidade
        de a qual sexo aquele indivíduo pertence. 
        </p>
        <p>Feminino: XX – 2 cromossomos X indicam que o indivíduo é mulher</p>
        <p>Masculino: XY – par de cromossomos X e Y indicam que o indivíduo é homem</p>


    
    </MainContainer>

    <MainContainer>
      <h1 className='title'>Quiz Cromossomos</h1>
      <Quiz category={'cromo'}/>
    </MainContainer>
      
    </>
      
  )
  
}

 export default Cromossomos
