import React, { useContext } from 'react'
import { AboutContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'

function About() {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <AboutContainer $secondaryColor={secondaryColor}>

      </AboutContainer>
    </>
  )
}

export default About