import React from 'react'
import Home from './containers/Home'
import { GlobalCss } from './styles'
import PractieAreas from './containers/PracticeAreas'
import About from './containers/About'
import Works from './containers/Works'
import Faq from './containers/Faq'
import Contact from './containers/Contact'

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
    </>
  )
}

export default App
