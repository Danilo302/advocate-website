import React from 'react'
import Home from './containers/Home'
import { GlobalCss } from './styles'
import PractieAreas from './containers/PracticeAreas'
import About from './containers/About'
import Works from './containers/Works'
import Faq from './containers/Faq'
import Contact from './containers/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Home />
      <PractieAreas />
      <About />
      <Works />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
