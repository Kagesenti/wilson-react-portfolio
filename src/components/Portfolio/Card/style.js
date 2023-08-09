import { styled } from "styled-components";

export const CardWrapper = styled.div`
    transition: all 1s ease-in-out;
`

export const CardContainer = styled.div`
    aspect-ratio: 16/9;
    width: 300px;
    background-image: url(${props => {return props.$image}});
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid ${props => {return props.$tertiaryColor}};
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);
    position: relative;

    &:hover {
        border: 2px solid ${props => {return props.$primaryColor}};
        transform: translateY(-10px);
    }

    transition: all 0.2s ease-in-out;

    & .curtain {
        height: 100%;
        width: ${props => {return props.$curtainIsActive ? 100 : 0}}%;
        opacity: ${props => {return props.$curtainIsActive ? 1 : 0}};
        background-color: ${props => {return props.$secondaryColor}};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        gap: 20px;

        & .pointer {
            cursor: pointer;
        }
    }
`

export const Curtain = styled.div`
    
`