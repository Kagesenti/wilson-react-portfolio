import { styled } from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    min-height: 80px;
    background-color: ${props => {return props.$primaryColor}};
`;