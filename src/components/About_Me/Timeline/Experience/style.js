import { styled } from "styled-components";

export const ExperienceContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    & .title {
        text-align: start;
    }

    transition: all 1s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ExperienceCardContainer = styled.div`
    width: 100%;
    position: relative;
    border: 1px solid ${props => {return props.$tertiaryColor}};
    box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);

    &:hover {
        border: 1px solid ${props => {return props.$primaryColor}};
        transform: translateY(-10px);

        .icon-circle {
            border: 2px solid ${props => {return props.$primaryColor}};
        }
    }

    transition: all 0.2s ease-in-out;

    & .content {
        height: auto;
        max-height: 200px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        background-color: ${props => {return props.$secondaryColor}};
        min-height: 200px;
    }

    & .icon-circle {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: ${props => {return props.$secondaryColor}};
        
        bottom: 100%;
        right: 100%;
        transform: translate(50%, 50%);
        transition: all 0.2s ease-in-out;
        border: 2px solid ${props => {return props.$tertiaryColor}};
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);
        z-index: 5;
    }
`