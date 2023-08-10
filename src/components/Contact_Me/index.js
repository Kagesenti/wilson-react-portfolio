import React, { useContext } from 'react'
import { ContactContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'
import Form from './Form'
function Contact() {
  const { secondaryColor } = useContext(styleContext)

  return (
    <>
      <ContactContainer $secondaryColor={secondaryColor}>
        <Form></Form>
      </ContactContainer>
    </>
  )
}

export default Contact