import React, { useContext } from 'react'
import { styleContext } from './context_providers/styleContext'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './globalStyle'
import Settings from './components/Settings'

function App() {
  const { primaryColor, secondaryColor, tertiaryColor, fontColor } = useContext(styleContext)

  return (
    <>
      <GlobalStyle $fontColor={fontColor} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}/>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Settings></Settings>
      <Footer></Footer>
    </>
  )
}

export default App