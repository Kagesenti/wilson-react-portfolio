import React, { useContext, useEffect, useRef } from 'react'
import { styleContext } from '../../../context_providers/styleContext'
import { FormContainer, GetInTouchContainer, GetInTouchDescriptionContainer, GetInTouchInformationContainer, SendAnEmailContainer, GetInTouchInformation, WrapperGetInTouch, WrapperSendAnEmail } from './style'
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
    <WrapperGetInTouch ref={ref} className='slide-left'>
      <GetInTouchContainer $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
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
    </WrapperGetInTouch>
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

        } else if (!el.isIntersecting) {

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
    <WrapperSendAnEmail ref={ref} className='slide-right'>
      <SendAnEmailContainer $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}>
        <EmailForm></EmailForm>
      </SendAnEmailContainer>
    </WrapperSendAnEmail>
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