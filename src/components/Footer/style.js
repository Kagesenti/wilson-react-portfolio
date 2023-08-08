import { styled } from "styled-components";

export const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 80px;
    background-color: ${props => {return props.$primaryColor}};
    box-shadow: 0px -1px 51px 32px rgba(0,0,0,0.75);
    z-index: 1;
`;