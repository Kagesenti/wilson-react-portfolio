import React, { useRef, useEffect } from 'react'
import { InformationContainer } from './style'

function Information() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add("slid-left")
          console.log("Observe")

        } else if (!el.isIntersecting) {
          console.log("Unobserve")

          if (el.target.classList.contains("slid-left")) {
            observer.unobserve(el.target)
          }
        }
      })
    }, {threshold: 0.2});
    observer.observe(ref.current)
  }, [])

  return (
    <>
        <InformationContainer className='slide-left' ref={ref}>
            <h1>INFORMATION ABOUT <span>ME</span></h1>
            <p>
                I'm a curious and driven individual with a passion for web development.
                As an excellent student, I'm constantly seeking to expand my knowledge and skillset, 
                and I'm always eager to take on new challenges. I'm also a natural multitasker, able 
                to juggle multiple projects and tasks at once without losing focus or quality.
            </p>
            <p>
                With a diverse set of skills, including proficiency in HTML, CSS, JavaScript, and more, 
                I'm well-equipped to tackle any web development project that comes my way. Whether you 
                need a simple static website or a complex web application, I'm confident that I can deliver 
                a product that meets your needs and exceeds your expectations."
            </p>
        </InformationContainer>
    </>
  )
}

export default Information