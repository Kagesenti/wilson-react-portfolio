import React, { useContext, useEffect, useRef } from 'react'
import { ExperienceCardContainer, ExperienceContainer } from './style'
import experienceData from './experienceData'
import { styleContext } from '../../../../context_providers/styleContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = ({ title, year, description }) => {
    const { tertiaryColor, primaryColor, secondaryColor } = useContext(styleContext)

    return (
        <>
            <ExperienceCardContainer $secondaryColor={secondaryColor} $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
                <h2 > {year} </h2>
                <p><span> {title} </span></p>
                <p> {description} </p>
                <div className="icon-circle">
                    <FontAwesomeIcon className='fa-lg' icon={faBriefcase}></FontAwesomeIcon>
                </div>

            </ExperienceCardContainer>
        </>
    )
}

function Experience() {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
            el.target.classList.add("slid-right")

            } else if (!el.isIntersecting) {

            if (el.target.classList.contains("slid-right")) {
                observer.unobserve(el.target)
            }
            }
        })
        }, {threshold: 0.5});
        observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ExperienceContainer ref={ref} className='slide-right'>
            <h1 className='title'><span>EXP</span>ERIENCE</h1>
            { experienceData.map(data => {
                return (
                    <ExperienceCard
                        title={data.title}
                        year={data.year}
                        description={data.description}
                    >
                    </ExperienceCard>
                )
            }) }
        </ExperienceContainer>
    )
}

export default Experience