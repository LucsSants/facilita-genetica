import React from "react";
import {Routes,Route} from 'react-router-dom'
import Ciclo from "./Pages/Ciclo";
import Cromossomos from "./Pages/Cromossomos";
import DNA from "./Pages/DNA";
import DoenGeneticas from "./Pages/DoenGeneticas";
import HerancaG from "./Pages/HerancaG";
import Home from "./Pages/Home";
import MutacaoG from "./Pages/MutacaoG";
import Sangue from "./Pages/Sangue";
import SinteseP from "./Pages/SinteseP";

export default () => {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/dna" element={<DNA/>} />
      <Route exact path="/sintese-proteica" element={<SinteseP/>} />
      <Route exact path="/cromossomos" element={<Cromossomos/>} />
      <Route exact path="/doencas-geneticas" element={<DoenGeneticas/>} />
      <Route exact path="/mutacao-genteica" element={<MutacaoG/>} />
      <Route exact path="/heranca-genetica" element={<HerancaG/>} />
      <Route exact path="/grupos-sanguineos" element={<Sangue/>} />
      <Route exact path="/ciclo" element={<Ciclo/>} />
    </Routes>
    )
  }
