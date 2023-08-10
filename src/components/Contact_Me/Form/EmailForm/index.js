import React, { useContext } from 'react';
import styled from 'styled-components';
import { styleContext } from '../../../../context_providers/styleContext';

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

  &:focus {
    border-bottom: 1px solid ${props => {return props.$primaryColor}};;
  }

  transition: all 0.2s ease-in-out;
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

  &:focus {
    border-bottom: 1px solid ${props => {return props.$primaryColor}};;
  }

  transition: all 0.2s ease-in-out;
`;

const Button = styled.button`
  background-color: ${props => {return props.$primaryColor}};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const EmailForm = () => {
    const { primaryColor, secondaryColor } = useContext(styleContext)

  return (
    <FormContainer>
      <form>
        <FormField>
          <Label htmlFor="fullName">Full Name</Label>
          <Input $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="text" id="fullName" name="fullName" />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email Address</Label>
          <Input $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="email" id="email" name="email" />
        </FormField>
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input $primaryColor={primaryColor} $secondaryColor={secondaryColor} type="text" id="subject" name="subject" />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea $primaryColor={primaryColor} maxLength={100} $secondaryColor={secondaryColor} id="message" name="message" rows="5" />
        </FormField>
        <Button $primaryColor={primaryColor} type="submit">Send Email</Button>
      </form>
    </FormContainer>
  );
};

export default EmailForm;
