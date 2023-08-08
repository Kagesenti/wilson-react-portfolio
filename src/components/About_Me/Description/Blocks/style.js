import { styled } from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(2, minmax(auto, 275px));
    grid-gap: 20px;
    aspect-ratio: 1 / 1;

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr; 
        width: 100%;
    }

    transition: all 1s ease-in-out;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);
    width: 100%;
    height: 100%;
    min-height: 150px;
    min-width: 150px;
    max-width: 250px;
    max-height: 250px;
    border: 1px solid ${props => {return props.$tertiaryColor}};

    text-align: center;

    @media screen and (max-width: 576px) {
        max-width: 100%;
    }

    &:hover {
        border: 1px solid ${props => {return props.$primaryColor}};
        transform: translateY(-10px);
    }

    transition: all 0.2s ease-in-out;
`