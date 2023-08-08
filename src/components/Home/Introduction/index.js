import React, { useContext } from 'react'
import { IntroductionContainer, CVButtonContainer } from './style'
import { Link } from 'react-router-dom'
import { styleContext } from '../../../context_providers/styleContext'

const CVButton = () => {
  const { primaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <CVButtonContainer $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
        <Link> 
          <div className='curriculum-vitae'>
            <p> Download CV </p>
          </div>
        </Link>
      </CVButtonContainer>
    </>

  )
}

function Introduction() {
  return (
    <>
      <IntroductionContainer>
        <h1>Hi, I'm <span>Wilson G. Ponseca</span>, A Junior Web Developer.</h1>
        <p>
          I'm an 18 years old Junior Web Developer who enjoys creating visually 
          appealing and functioning websites. Let's bring your digital vision to 
          life with my coding expertise!
        </p>
        <CVButton></CVButton>
      </IntroductionContainer>
    </>
  )
}

export default Introduction