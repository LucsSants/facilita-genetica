import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import Routes from './Routes'
import Footer from './Components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
