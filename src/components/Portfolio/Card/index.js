import React, { useContext, useState, useRef, useEffect } from 'react'
import { CardContainer, CardWrapper, Curtain } from './style'
import { styleContext } from "../../../context_providers/styleContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Card({ title, image, description, link, handleModal }) {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)
    const [ curtainIsActive, setCurtainIsActive ] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
            el.target.classList.add("faded")
            console.log("Observe")

            } else if (!el.isIntersecting) {
            console.log("Unobserve")

            if (el.target.classList.contains("faded")) {
                observer.unobserve(el.target)   
            }
            }
        })  
        }, {threshold: 0.2});
        observer.observe(ref.current)
    }, [])
    

    return (
        <>
            <CardWrapper ref={ref} className='fade'>
                <CardContainer  onMouseLeave={() => {setCurtainIsActive(false)}} onMouseEnter={() => {setCurtainIsActive(true)}} $curtainIsActive={curtainIsActive} $secondaryColor={secondaryColor} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor} $image={image}>
                    <Curtain className='curtain' >
                        <a href={link}>
                            <FontAwesomeIcon className={"fa-2xl pointer"} icon={faGithub} />
                        </a>
                        <FontAwesomeIcon onClick={() => {handleModal(title, image, description)}} className={"fa-2xl pointer"} icon={faQuestionCircle}></FontAwesomeIcon>
                    </Curtain>
                </CardContainer>
            </CardWrapper>
            
        </>
    )
}

export default Card