import React from 'react'
import AOS from 'aos'

import Home from './containers/Home'
import { GlobalCss } from './styles'
import PractieAreas from './containers/PracticeAreas'
import About from './containers/About'
import Works from './containers/Works'
import Faq from './containers/Faq'
import Contact from './containers/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'

function App() {
  AOS.init({
    duration: 800
  })

  return (
    <>
      <GlobalCss />
      <Navbar />
      <ChatBox />
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
