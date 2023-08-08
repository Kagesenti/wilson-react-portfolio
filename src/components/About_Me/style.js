import { styled } from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${props => {return props.$secondaryColor}};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 50px;
    padding-right: 50px;
`