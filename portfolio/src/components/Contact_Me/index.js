import React, { useContext } from 'react'
import { ContactContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'

function Contact() {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <ContactContainer $secondaryColor={secondaryColor}>

      </ContactContainer>
    </>
  )
}

export default Contact