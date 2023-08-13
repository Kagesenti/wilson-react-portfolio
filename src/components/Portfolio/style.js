import { styled } from "styled-components";

export const PortfolioContainer = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    justify-content: center;
    align-items: center;

    & .modal {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        width: 80%;
        height: 80%;
        background-color: ${props => {return props.$secondaryColor}};
        border: 1px solid ${props => {return props.$primaryColor}};
        padding: 20px;
        box-shadow: 0px -1px 18px 1px rgba(0,0,0,0.75);

        & .ps {
            color: ${props => {return props.$primaryColor}};
        }

        & .image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 50%;

            img {
                width: 100%;
                height: auto;

            }
        }

        & .content {

            h1 {
                text-align: center;
            }

            p {
                text-align: start;
            }
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
            width: 30%;
            gap: 20px;
        }

        & .x-button {
            position: absolute;
            bottom: 100%;
            left: 100%;
            transform: translate(-50%, 50%);
            
            &:hover {
                cursor: pointer;
            }
        }

        @media screen and (max-width: 1000px) {
            flex-direction: column;

            & .image {
                width: 80%;
            }

            & .content {
                width: 100%;
                max-width: 400px;
            }
        }

        @media screen and (max-height: 750px) {
            width: 90%;
            height: 90%;
        }
    }
`

export const CardContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`