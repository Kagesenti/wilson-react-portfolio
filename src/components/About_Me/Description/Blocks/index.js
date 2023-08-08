import React, { useRef, useEffect, useContext } from 'react'
import { Card, CardContainer } from './style'
import { styleContext } from '../../../../context_providers/styleContext'

const Cards = ({ quantity, category }) => {
  const { primaryColor, tertiaryColor } = useContext(styleContext)

  return (
    <>
      <Card $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
        <h1>
          <span>{ quantity }</span>
        </h1>
        <p>
          { category }
        </p>
      </Card>
    </>
  )
}

function Blocks() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("slid-right")
          console.log("Observe")

        } else if (!el.isIntersecting) {
          console.log("Unobserve")

          if (el.target.classList.contains("slid-right")) {
            observer.unobserve(el.target)
          }
        }
      })
    }, {threshold: 0.2});
    observer.observe(ref.current)
  }, [])

  return (
    <>
      <CardContainer ref={ref} className='slide-right'>
        <Cards quantity={"10+"} category={"PROJECTS COMPLETED"}></Cards>
        <Cards quantity={"1"} category={"YEAR/S OF EXPERIENCE"}></Cards>
        <Cards quantity={"None"} category={"HAPPY CLIENTS"}></Cards>
        <Cards quantity={"None"} category={"CUSTOMER REVIEWS"}></Cards>
      </CardContainer>
    </>
  )
}

export default Blocks