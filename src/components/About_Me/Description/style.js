import { styled } from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`