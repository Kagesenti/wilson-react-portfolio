import React, { useContext } from 'react'
import { HShape, HomeContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'
import Profile from './Profile'
import Introduction from './Introduction'

function Home() {
  const { primaryColor, secondaryColor } = useContext(styleContext)

  return (
    <>
      <HomeContainer $secondaryColor={secondaryColor}>
        <HShape $primaryColor={primaryColor}></HShape>
        <Profile></Profile>
        <Introduction></Introduction>
      </HomeContainer>
    </>
  )
}

export default Home