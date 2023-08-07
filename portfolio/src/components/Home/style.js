import { styled } from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${props => {return props.$secondaryColor}};
`