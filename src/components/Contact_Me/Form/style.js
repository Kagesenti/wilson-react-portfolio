import { styled } from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1100px;
    max-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 889px) {
        flex-direction: column;
        height: auto;
        max-width: none;
        max-height: none;
    }
`

export const GetInTouchContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 600px;
    border: 1px solid ${(props) => {return props.$tertiaryColor}};
    background-color: ${(props) => {return props.$secondaryColor}};
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 40px;
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);
    z-index: 1;
    
    @media screen and (max-width: 889px) {
        max-width: none;
        max-height: none;
    }

    transition: all 1s ease-in-out;
`

export const GetInTouchDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const GetInTouchInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const GetInTouchInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & .icon {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .Email {
        word-break: break-all;
    }
`

export const SendAnEmailContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 600px;
    border: 1px solid ${(props) => {return props.$tertiaryColor}};
    background-color: ${(props) => {return props.$secondaryColor}};
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);

    @media screen and (max-width: 889px) {
        max-width: none;
        max-height: none;
        border: 1px solid ${(props) => {return props.$tertiaryColor}};
    }

    transition: all 1s ease-in-out;
`