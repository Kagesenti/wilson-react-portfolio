import { styled } from "styled-components";

export const IntroductionContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 50px;

    z-index: 2;

    padding: 20px;

    h1, p {
        max-width: 350px;
        text-align: center;
    }

    @keyframes slide-left-fade {
        0% { opacity: 0; left: 20% }
        100% { opacity: 1; left: 0%}
    }

    animation: slide-left-fade 1s ease-in-out;
`

export const CVButtonContainer = styled.div`
    & a {
        text-decoration: none;
        height: 50px;
        width: 200px;
        border-radius: 50px;
        overflow: hidden;
        display: block;

        & .curriculum-vitae {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => {return props.$tertiaryColor}};
            transition: all 0.2s;
            width: 100%;
            height: 100%;

            &:hover {
                background-color: ${props => {return props.$primaryColor}};
            }
        }
    }

    
`