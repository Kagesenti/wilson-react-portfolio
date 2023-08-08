import { styled } from "styled-components";

export const GridProgressBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 70px;
    margin-top: 100px;

    & h1 {
        text-align: center;
        transition: all 1s ease-in-out;
    }
`

export const ProgressBarContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    max-width: 1170px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`