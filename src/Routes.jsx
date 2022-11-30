import React from "react";
import {Routes,Route} from 'react-router-dom'
import Cromossomos from "./Pages/Cromossomos";
import DNA from "./Pages/DNA";
import Home from "./Pages/Home";
import SinteseP from "./Pages/SinteseP";

export default () => {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/dna" element={<DNA/>} />
      <Route exact path="/sintese-proteica" element={<SinteseP/>} />
      <Route exact path="/cromossomos" element={<Cromossomos/>} />
    </Routes>
    )
  }
