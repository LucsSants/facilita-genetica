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
          <Link to={'/sintese-proteica'}>SÍNTESE PROTEICA</Link>
         </li>
         <li>
          <Link to={'/ciclo'}>CICLO CELULAR</Link>
         </li>
         <li>
          <Link to={'/leis-de-mendel'}>LEIS DE MENDEL</Link>
         </li>
         <li>
          <Link to={'/genes'}>GENES</Link>
         </li>
         <li>
          <Link to={'/genotipo-fenotipo'}>GENÓTIPO E FENÓTIPO</Link>
         </li>
         <li>
          <Link to={'/cromossomos'}>CROMOSSOMOS</Link>
         </li>
         <li>
          <Link to={'/mutacao-genteica'}>MUTAÇÃO GENÉTICA</Link>
         </li>
         <li>
          <Link to={'/heranca-genetica'}>HERANÇA GENÉTICA</Link>
         </li>
         <li>
          <Link to={'/doencas-geneticas'}>SÍNDROME/DEONÇAS GENÉTICAS</Link>
         </li>
         <li>
          <Link to={'/grupos-sanguineos'}>GRUPOS SANGUINEOS E O FATOR RH</Link>
         </li>

        </ol>
      </div>
      </MainContainer>

      <MainContainer>
        <h1 className='title'>Referências Bibliográficas</h1>
        <p>WOSKI, Stephen A.; SCHMIDT, Francis J. DNA e RNA: Composição e estrutura. Manual de bioquímica: com correlações clínicas, p. 29, 2011.</p>
        <p>BECKER, R.O.; BARBOSA, B.L.D.F. Genética Básica. [Digite o Local da Editora]: Grupo A, 2018.</p>
        <p>MANSOUR, E.R.M.; TREVISAN, G.L.; DAGNINO, A.P.A. Genética. [Digite o Local da Editora]: Grupo A, 2020. </p>
        <p>MARQUES-RAMOS, Ana. Síntese proteica e patogénese. 2019.</p>
        <p>MOREIRA, Catarina. Ciclo Celular. Revista de Ciência Elementar, v. 2, n. 4, 2014.</p>
        <p>EVOLUÇÃO DAS CIÊNCIAS, I. I. As 1ª E 2ª LEIs dE MEndEL E COnCEITOs básICOs dE CITOgEnéTICA.</p>
        <p>WATSON, J.D.; BAKER, T.A.; BELL, S.P.; AL., E. Biologia Molecular do Gene. [Digite o Local da Editora]: Grupo A, 2015.</p>
        <p>STRACHAN, T.; READ, A. Genética Molecular Humana. [Digite o Local da Editora]: Grupo A, 2013.</p>
        <p>TEMP, Daiana Sonego et al. Cromossomo, gene e DNA: utilização de modelo didático. Genética na escola, v. 6, n. 1, p. 9-11, 2011. APA	</p>
        <p>DARWIN, Charles; DE VERTEBRADOS, Evolução. Mutação genética.</p>
        <p>KLUG, William S. et al. Conceitos de genética. Artmed Editora, 2009.</p>
        <p>MENCK, C.F.M.; SLUYS, M.V. Genética molecular básica: dos genes ao genomas. GRUPI GEN, 2017</p>
        <p>MOREIRA, Catarina. Doenças genéticas. Revista de Ciência Elementar, v. 3, n. 2, 2015.</p>
        <p>BATISTETI, Caroline Belotto et al. O sistema de grupo sangüíneo Rh. Filosofia e História da Biologia, v. 2, n. 1, p. 85-101, 2007.</p>
        <p>BARROSO, Heloisa Helena; LIMA, Ediene Dayane; PINHEIRO, Marcos Luciano Pimenta. 1.3 GRUPO SANGUÍNEO E FATOR Rh. urvim PROEXC, p. 19.</p>
      </MainContainer>
      
    </>
      
    
  )
}

 export default Home
