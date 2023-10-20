import { styled } from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    overflow-x: hidden;

    @media screen and (max-width: 889px) {
        height: auto;
    }
`