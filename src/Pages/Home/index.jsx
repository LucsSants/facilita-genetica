import React from 'react'
import MainContainer from '../../Components/MainConteiner'
import './index.css'
import {Link} from 'react-router-dom'
import img from '../../assets/logo2.png'
function Home() {
  return (
    <>
    <MainContainer>
        <img src={img} alt="Logo" className='big-logo' />
        <h1 className='title'>Facilitia Genética</h1>
        <p className='description'>
          &nbsp; Olá, tudo bom? Nós do Facilita Genética somos estudantes da Universidade Ages do campus de Paripiranga/BA, somos estudantes da área da saúde, dos cursos de biomedicina, farmácia, fisioterapia e odontologia. Nosso objetivo com a criação desse site é de realmente facilitar a genética através de explicações mais resumidas e objetivas, e no final para fixar o assunto responder umas questões de fixação, assim, facilitando e colando genética na mente de vocês.
        </p>
        <br/>
        <br/>

        <p className='description'>
          &nbsp; Os assuntos dentro de Genética está dividido entre 11 módulos, e em cada módulo você terá acesso a explicações para logo em seguida vim um quiz avaliativo para você responder.
        </p>
        <br/>

        <p className='description-bold'>
          Bons Estudos!
        </p>
      </MainContainer>

      <MainContainer>
      <h1 className='title'>Módulos</h1>
      
      <div className='lista'>

        <ol>
         <li>
          <Link to={'/dna'}>DNA e RNA</Link>
         </li>
         <li>
          <Link href="">SÍNTESE PROTEICA</Link>
         </li>
         <li>
          <Link href="">CICLO CELULAR</Link>
         </li>
         <li>
          <Link href="">LEIS DE MENDEL</Link>
         </li>
         <li>
          <Link href="">GENES</Link>
         </li>
         <li>
          <Link href="">GENÓTIPO E FENÓTIPO</Link>
         </li>
         <li>
          <Link href="">CROMOSSOMOS</Link>
         </li>
         <li>
          <Link href="">MUTAÇÃO GENÉTICA</Link>
         </li>
         <li>
          <Link href="">HERANÇA GENÉTICA</Link>
         </li>
         <li>
          <Link href="">SÍNDROME/DEONÇAS GENÉTICAS</Link>
         </li>
         <li>
          <Link href="">GRUPOS SANGUINEOS E O FATOR RH</Link>
         </li>

        </ol>
      </div>
      </MainContainer>
      
    </>
      
    
  )
}

 export default Home
