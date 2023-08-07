import React, { useContext } from 'react'
import { PortfolioContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'

function Portfolio() {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <PortfolioContainer $secondaryColor={secondaryColor}>

      </PortfolioContainer>
    </>
  )
}

export default Portfolio