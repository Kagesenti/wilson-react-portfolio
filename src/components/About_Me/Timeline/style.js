import { styled } from "styled-components";

export const TimelineContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    max-width: 1170px;
    margin-top: 100px;
    gap: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 100px;
    }
`