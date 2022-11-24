import React from 'react'
import MainContainer from '../../Components/MainConteiner'
import './index.css'
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
      </MainContainer>

      <MainContainer>
      <h1 className='title'>Módulos</h1>
      
      <div className='lista'>

        <ol>
         <li>
          <a href="">DNA e RNA</a>
         </li>
         <li>
          <a href="">SÍNTESE PROTEICA</a>
         </li>
         <li>
          <a href="">CICLO CELULAR</a>
         </li>
         <li>
          <a href="">LEIS DE MENDEL</a>
         </li>
         <li>
          <a href="">GENES</a>
         </li>
         <li>
          <a href="">GENÓTIPO E FENÓTIPO</a>
         </li>
         <li>
          <a href="">CROMOSSOMOS</a>
         </li>
         <li>
          <a href="">MUTAÇÃO GENÉTICA</a>
         </li>
         <li>
          <a href="">HERANÇA GENÉTICA</a>
         </li>
         <li>
          <a href="">SÍNDROME/DEONÇAS GENÉTICAS</a>
         </li>
         <li>
          <a href="">GRUPOS SANGUINEOS E O FATOR RH</a>
         </li>

        </ol>
      </div>
      </MainContainer>
      
    </>
      
    
  )
}

 export default Home
