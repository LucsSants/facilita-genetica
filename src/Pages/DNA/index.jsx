import React from 'react'
import MainContainer from '../../Components/MainConteiner'
import './index.css'
import dna1 from '../../assets/DNA/dna1.png'
import dna2 from '../../assets/DNA/dna2.png'
import dna3 from '../../assets/DNA/dna3.png'
import dna4 from '../../assets/DNA/dna4.png'
import dna5 from '../../assets/DNA/dna5.png'
import dna6 from '../../assets/DNA/dna6.png'
function DNA() {
  return (
    <>
    <MainContainer >
        <h1 className='title'>DNA e RNA</h1>
      

        <p>
        &nbsp;&nbsp;O DNA apresenta uma dupla-hélice e é formado por nucleotídeos que é dividido em três partes:
        </p>
        <ul>
          <li>um carboidratos de cinco carbonos</li>
          <li>uma base nitrogenada</li>
          <li>um ou mais grupo fosfato</li>
        </ul>
      <img src={dna1} alt="" className='file-img'/>
      <p>
      &nbsp;&nbsp;As bases nitrogenada possuem anéis que contém átomos de nitrogênio é sai classificadas em dois
      grupos: pirimidinas é purinas. 
      </p>
      <p>
      &nbsp;&nbsp;As pirimidinas possuem apenas um anel e seis átomos já as purinas dois anéis um com seis átomos
      e o outros com cinco átomos. 
      </p>
      <p>O DNA tem:</p>
      <ul>
          <li>citosina (C), timina (T) que são pirimidinas. </li>
          <li>adenina (A), guanina (G) que são purinas</li>
        </ul>
        <img src={dna2} alt="" className='file-img'/>
        <img src={dna3} alt="" className='file-img'/>
        <p>
        &nbsp;&nbsp;O DNA contêm duas fitas que são constituídas por vários nucleotídeos, esses nucleotídeos se
        ligam uns aos outros através da ligação fosfodiéster. 
        </p>
        <img src={dna4} alt="" className='file-img'/>
        <p>
        &nbsp;&nbsp;A junção dos nucleotídeos forma uma sequência com repetição na unidade de açúcar-fosfato
        formando a cadeia principal que são ligadas às bases nitrogenadas. Essas ligações acontece entre
        as bases completamentares uma base pirimidina com uma base purina e esse pareamento só pode
        acontecer dessa forma: adenina apenas pareada com timina e a guanina apenas com a citosina,
        sempre com a mesma quantidade. 
        </p>
        <p>
        &nbsp;&nbsp;O DNA tem diversas funções como armazenar e transmitir informações genéticas e também
        funciona como molde para o RNA.
          
        </p>
        <p>
        &nbsp;&nbsp;Falando de DNA vale ressaltar a replicação e transcrição.
        Replicação: processo pelo qual cópias Idênticas a cópia de uma molécula de DNA é formada,
        ocorre quando o DNA parcialmente se desenrola é inicia-se uma nova fita a partir da fita do DNA
        que serão copiadas.
        </p>
        <p>
        &nbsp;&nbsp;Transcrição: o DNA é usado para a formação da molécula de RNA, nesse processo o DNA abrese em um ponto e uma fita é usada como molde para a síntese de RNA a medida q o RNA é
        transcrito o DNA vai novamente se fechando.
        </p>
        <p>
        &nbsp;&nbsp;O RNA é composto pelos ribonucleotídeos que são formados por uma ribose, um fosfato e bases
        nitrogenadas.
        </p>

        <p>
        &nbsp;&nbsp;O RNA tem como principal função produzir proteínas e contêm apenas uma fita.
          As bases nitrogenadas são classificadas como:
          <li>adenina (A), guanina (G) que são purinas.</li>
          <li>citosina (C), uracila (U) que são pirimidinas.</li>
        </p>
        <img src={dna5} alt="" className='file-img'/>

        <p>Tipos de RNA:</p>
        <li>RNA ribossômico (RNAr)= principal responsável pela síntese de proteínas. </li>
        <li>RNA mensageiro (RNAm) = orienta as ordens dos aminoácidos para a formação protéica, é
        responsável por levar as informações genéticas recebidas do DNA do núcleo celular até o
        citoplasma.</li>
        <li>RNA transportador (RNAt) = transporta as moléculas de aminoácidos até os ribossomos, onde
        Unidas formam as proteínas</li>
        <li>RNA polimerase= é o nome da enzima que auxilia na canalização da síntese do RNA, é formada
        pelo processo de transcrição.</li>
        <img src={dna6} alt="" className='file-img'/>
    
    </MainContainer>
      
    </>
      
  )
  
}

 export default DNA
