import { styled } from "styled-components";

export const SettingsContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 10px;
    width: 200px;   
    height: ${props => {return props.$settingIsVisible ? 500 : 0}}px;
    background-color: ${props => {return props.$secondaryColor}};
    opacity: ${props => {return props.$settingIsVisible ? 1 : 0}};
    border: 2px solid ${props => {return props.$primaryColor}};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    overflow: scroll;

    transition: all 1s ease-in-out;
    z-index: 1000;

    @media screen and (max-width: 768px) {
        width: 100%;
        right: 0px;
    }
`

export const ThemeItemContainer = styled.button`
    border: none;
    background-color: ${props => {return props.$tertiaryColor}};
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    flex: 0 0 50px;
    
    &:hover {
        cursor: pointer;
        background-color: ${props => {return props.$primaryColor}};
    }

    transition: all 0.2s ease-in-out;
` 