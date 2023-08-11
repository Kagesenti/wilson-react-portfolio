import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { styleContext } from '../../../../context_providers/styleContext';
import axios from 'axios';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border: none;
  background-color: ${props => {return props.$secondaryColor}};
  border-bottom: 1px solid #FFFFFF;
  outline: none;
  transition: background-color 1s ease-in-out, border 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${props => {return props.$primaryColor}};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${props => {return props.$secondaryColor}};
  border: none;
  border-bottom: 1px solid #FFFFFF;
  outline: none;
  transition: background-color 1s ease-in-out, border 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${props => {return props.$primaryColor}};;
  }
`;

const StatusMessage = styled.p`
  color: ${props => {return props.$primaryColor}};
  margin-top: 20px;
`

const Button = styled.button`
  background-color: ${props => {return props.$buttonIsDisabled ? props.$primaryColor + "50" : props.$primaryColor + "FF"}};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: ${props => {return props.$buttonIsDisabled ? "auto" : "pointer"}};
  font-size: 16px;
`;

const EmailForm = () => {
  const [fullName, setFullName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [submitionCount, setSubmitionCount] = useState(0)
  const [countdown, setCountdown] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const savedExpiration = localStorage.getItem('countdownExpiration');
    if (savedExpiration) {
      const currentTime = Math.floor(Date.now() / 1000);
      const expiration = parseInt(savedExpiration, 10);
      if (expiration > currentTime) {
        setCountdown(expiration - currentTime);
        setIsActive(true);
      }
    }
  }, []);

  useEffect(() => {
    let countdownInterval;

    if (isActive) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            setIsActive(false);
            localStorage.removeItem('countdownExpiration');
            clearInterval(countdownInterval);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isActive]);

  const startCountdown = (countdownDuration) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expiration = currentTime + countdownDuration;
    localStorage.setItem('countdownExpiration', expiration);
    setCountdown(countdownDuration);
    setIsActive(true);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value)
  }

  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value)
  }

  const handleSubject = (e) => {
    setSubject(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitionCount(submitionCount + 1)
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailAddress)
    
    if (isValidEmail) {
      const result = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: "service_ni1rqvc",
        template_id: "template_1x254e8",
        user_id: "SmrA8ku0lE5dwsCBc",
        template_params: {
          full_name: fullName,
          subject: subject,
          message: message,
          email_address: emailAddress
        }
      })

      if (result.data === "OK") {
        if (submitionCount >= 5) {
          setStatusMessage(`After Submitting Invalid Email Address ${submitionCount} times, you've finally did it`)
        } else {
          setStatusMessage("Email Sent!")
        }

        startCountdown(60 * 3)

      } else {
        setStatusMessage("Error Encountered!")
        startCountdown(5)
      }
    } else {
      switch (submitionCount) {
        case 0:
          setStatusMessage("Invalid Email Address!")
          break;
        case 1:
          setStatusMessage("Your Email Address Is Invalid!")
          break;
        case 2:
          setStatusMessage("Whoops! Did you mean to type 'mars@outerspace'? Because that email seems a bit... extraterrestrial.")
          break;
        case 3:
          setStatusMessage("Oh, you again? Look, I'm starting to doubt my own existence now. But seriously, still an invalid email.")
          break;
        case 4:
          setStatusMessage("Alright, I give up. You win the persistence award! Unfortunately, not the 'Valid Email Address' award.")
          break;
        case 5:
          setStatusMessage("You're like a warrior battling dragons! Except, the dragon is an invalid email, and you're not winning... at all.")
          break;
        case 6:
          setStatusMessage("Finally! You did it! I don't know how many invalid emails we've seen, but you're a true champion now. STILL AN INVALID EMAIL!")
          break;
        case 7:
          setStatusMessage("I'm starting to think you're secretly testing my patience. Or is it my ability to detect valid emails? Spoiler alert: you're failing on both counts.")
          break;
        case 8:
          setStatusMessage("You're like a detective investigating the case of the missing valid email. I admire your dedication, but I've got bad news - the email is still missing.")
          break;
        case 9:
          setStatusMessage("...")
          break;
        case 10:
          setStatusMessage("......")
          break;
        case 11:
          setStatusMessage(".........")
          break;
        case 12:
          setStatusMessage("............")
          break;
        default:
          setStatusMessage(`Hey guess what? you submitted ${submitionCount} times already`)
      }
      startCountdown(5)
    }
  }
  
  const { primaryColor, secondaryColor } = useContext(styleContext)

  return (
    <FormContainer>
      <form>
        <FormField>
          <Label htmlFor="fullName">Full Name</Label>
          <Input onChange={handleFullName} value={fullName} $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="text" id="fullName" name="fullName" />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email Address</Label>
          <Input onChange={handleEmailAddress} value={emailAddress} $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="email" id="email" name="email" />
        </FormField>
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input onChange={handleSubject} value={subject} $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="text" id="subject" name="subject" />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea onChange={handleMessage} value={message} $primaryColor={primaryColor} maxLength={100} $secondaryColor={secondaryColor} id="message" name="message" rows="5" />
        </FormField>
        <Button disabled={isActive} $buttonIsDisabled={isActive} onClick={(e) => {handleSubmit(e)}} $primaryColor={primaryColor} type="submit">{countdown === 0 ? "Send Email" : "Countdown : " + countdown + "s"}</Button>
        {statusMessage.length > 0 &&
          <StatusMessage $primaryColor={primaryColor}> {statusMessage} </StatusMessage>
        }
      </form>
    </FormContainer>
  );
};

export default EmailForm;
