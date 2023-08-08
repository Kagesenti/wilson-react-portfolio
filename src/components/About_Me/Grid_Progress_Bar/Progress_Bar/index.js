import React, { useContext, useEffect, useRef } from 'react'
import { Filled, Progress, ProgressBarContainer } from './style'
import { styleContext } from '../../../../context_providers/styleContext'

function ProgressBar({ progress, title, index }) {
    const { primaryColor } = useContext(styleContext)
    const isEven = index % 2 === 0;
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((el) => {
            if (el.isIntersecting) {
            el.target.classList.add(isEven ? "slid-left" : "slid-right")
            console.log("Observe")  

            } else if (!el.isIntersecting) {
            console.log("Unobserve")

            if (el.target.classList.contains(isEven ? "slid-left" : "slid-right")) {
                observer.unobserve(el.target)
            }
            }
        })
        }, {threshold: 0.5});
        observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <ProgressBarContainer ref={ref} className={isEven ? "slide-left" : "slide-right"}>
                <p>
                    { title }
                </p>

                <Progress>
                    <Filled $primaryColor={primaryColor} $progress={progress}></Filled>
                </Progress>
            </ProgressBarContainer>
        </>
    )
}

export default ProgressBar