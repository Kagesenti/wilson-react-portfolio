import React, {useEffect, useRef} from 'react'
import { ProgressBarContainer, GridProgressBarContainer } from './style'
import ProgressBar from './Progress_Bar'
const skills = require("./skills")

function GridProgressBar() {
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
        }, {threshold: 0.2});
        observer.observe(ref.current)
    }, [])

    return (
        <>
            <GridProgressBarContainer>
                <h1 ref={ref} className='slide-left'> <span>MY</span> TECH SKILLS </h1>
                <ProgressBarContainer>
                    { skills.map((skill, index) => {return <ProgressBar index={index} key={index} title={skill.title} progress={skill.progress}></ProgressBar>}) }
                </ProgressBarContainer>
            </GridProgressBarContainer>
        </>
        
    )
}

export default GridProgressBar