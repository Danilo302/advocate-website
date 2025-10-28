import React from 'react'
import Home from './containers/Home'
import { GlobalCss } from './styles'
import PractieAreas from './containers/PracticeAreas'
import About from './containers/About'
import Works from './containers/Works'

function App() {
  return (
    <>
      <GlobalCss />
      <Home />
      <PractieAreas />
      <About />
      <Works />
    </>
  )
}

export default App
