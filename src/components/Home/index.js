import React, { useContext } from 'react'
import { HomeContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'

function Home() {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <HomeContainer $secondaryColor={secondaryColor}>

      </HomeContainer>
    </>
  )
}

export default Home