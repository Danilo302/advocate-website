import React from 'react'
import Home from './containers/Home'
import { GlobalCss } from './styles'
import PractieAreas from './containers/PracticeAreas'

function App() {
  return (
    <>
      <GlobalCss />
      <Home />
      <PractieAreas />
    </>
  )
}

export default App
