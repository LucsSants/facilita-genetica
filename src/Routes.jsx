import React from "react";
import {Routes,Route} from 'react-router-dom'
import DNA from "./Pages/DNA";
import Home from "./Pages/Home";

export default () => {
  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/dna" element={<DNA/>} />
    </Routes>
    )
  }
