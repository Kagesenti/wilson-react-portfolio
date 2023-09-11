import { styled } from "styled-components";

export const CardWrapper = styled.div`
    transition: all 1s ease-in-out;
`

export const CardContainer = styled.div`
    aspect-ratio: 16/9;
    width: 300px;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid ${props => {return props.$tertiaryColor}};
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);
    position: relative;

    .portfolio_item_image {
        width: 100%;
        height: 100%;
    }

    .loading_container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

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
        position: absolute;
        top: 0;
        left: 0;

        & .pointer {
            cursor: pointer;
        }
    }
`

export const Curtain = styled.div`
    
`