import React, { useContext } from 'react'
import { styleContext } from './context_providers/styleContext'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './globalStyle'

function App() {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <GlobalStyle $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}/>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App