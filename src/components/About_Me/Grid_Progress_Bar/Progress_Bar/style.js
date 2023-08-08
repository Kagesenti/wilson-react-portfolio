import { styled } from "styled-components";

export const ProgressBarContainer = styled.div`
    width: 100%;
    transition: all 1s ease-in-out;
`

export const Progress = styled.div`
    background-color: #FFFFFF;
    border-radius: 50px;
    height: 10px;
    overflow: hidden;
`

export const Filled = styled.div`
    height: 100%;
    background-color: ${props => {return props.$primaryColor}};
    width: ${props => {return props.$progress}}%;
`