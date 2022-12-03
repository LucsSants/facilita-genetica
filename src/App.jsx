import { useContext, useEffect } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header'
import Routes from './Routes'
import Footer from './Components/Footer'
import { QuizContext } from "./context/quiz"


function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch({ type: "NEW_GAME" })
  }, [])

  
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
