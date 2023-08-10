import React, { useContext, useEffect, useRef } from 'react'
import { styleContext } from '../../../context_providers/styleContext'
import { FormContainer, GetInTouchContainer, GetInTouchDescriptionContainer, GetInTouchInformationContainer, SendAnEmailContainer, GetInTouchInformation } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { informationDetails } from './informationDetails'
import EmailForm from './EmailForm'

const IconReturner = ({ faClassName, icon }) => {
  return (
    <FontAwesomeIcon className={faClassName} icon={icon} />
  )
}

const Information = ({ icon, context, description, id }) => {
  return (
    <>
      <GetInTouchInformation>
        <div className='icon'>
          {icon}
        </div>
        <div className={`details ${id}`}>
          <p><span>{context}</span> :</p>
          <p>
            {description}
          </p>
        </div>
      </GetInTouchInformation>
    </>
  )
}

const GetInTouchComponent = () => {
  const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)
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
    <GetInTouchContainer ref={ref} className='slide-left' $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <GetInTouchDescriptionContainer>
          <h1><span> Let's get in touch </span></h1>
          <p>
            We're open for any suggestion or just to have a chat
          </p>
        </GetInTouchDescriptionContainer>
        <GetInTouchInformationContainer>
          {informationDetails.map((detail, index) => {return (
            <Information id={detail.context} key={index} icon={<IconReturner key={index} faClassName={"fa-2xl"} icon={detail.icon}/>} context={detail.context} description={detail.description}></Information>
          )})}
        </GetInTouchInformationContainer>
      </GetInTouchContainer>
    </>
  )
}

const SendAnEmailComponent = () => {

  const { secondaryColor, tertiaryColor } = useContext(styleContext)
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
      <SendAnEmailContainer ref={ref} className='slide-right' $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <EmailForm></EmailForm>
      </SendAnEmailContainer>
    </>
  )
}

function Form() {
  return (  
    <FormContainer>
      <GetInTouchComponent />
      <SendAnEmailComponent />
    </FormContainer>
  )
}

export default Form