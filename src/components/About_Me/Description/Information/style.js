import { styled } from "styled-components";

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;

    h1 {
        text-align: start;
    }

    p {
        text-align: left;
    }

    gap: 70px;

    transition: all 1s ease-in-out;
`