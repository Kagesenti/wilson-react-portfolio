import { styled } from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;    
    height: calc(100vh - 80px);
    background-color: ${props => {return props.$secondaryColor}};

    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
        position: relative;
        display: block;
        min-height: calc(100vh - 80px);
        height: auto;
    }   

`

export const HShape = styled.div`
    transition: all 0.4s ease-in-out;
    width: 65%;
    height: 100%;
    background-color: ${props => {return props.$primaryColor}};
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0 0, 30% 0, 50% 100%, 0% 100%);
    z-index: 0;

    @media screen and (max-width: 555px) {
        clip-path: polygon(79% 71%, 100% 23%, 100% 100%, 32% 100%);
        width: 100%;
    }

    @keyframes fade {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }

    animation: fade 1s ease-in-out;
`