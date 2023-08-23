import React, { useContext, useEffect, useRef } from 'react'
import { EducationCardContainer, EducationContainer } from './style'
import educationData from './educationData'
import { styleContext } from '../../../../context_providers/styleContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const EducationCard = ({ title, year, description }) => {
    const { tertiaryColor, primaryColor, secondaryColor } = useContext(styleContext)

    return (
        <>
            <EducationCardContainer $secondaryColor={secondaryColor} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
                <h2 > {year} </h2>
                <p><span> {title} </span></p>
                <p> {description} </p>
                <div className="icon-circle">
                    <FontAwesomeIcon className='fa-lg' icon={faBookOpen}></FontAwesomeIcon>
                </div>

            </EducationCardContainer>
        </>
    )
}

function Education() {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
            el.target.classList.add("slid-left")

            } else if (!el.isIntersecting) {

            if (el.target.classList.contains("slid-left")) {
                observer.unobserve(el.target)
            }
            }
        })
        }, {threshold: 0.5});
        observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <EducationContainer ref={ref} className='slide-left'>
            <h1 className='title'><span>EDU</span>CATION</h1>
            { educationData.map(data => {
                return (
                    <EducationCard
                        title={data.title}
                        year={data.year}
                        description={data.description}
                    >
                    </EducationCard>
                )
            }) }
        </EducationContainer>
    )
}

export default Education