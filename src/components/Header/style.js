import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => {return props.$primaryColor}};
    display: flex;
    padding-left: 5vw;
    padding-right: 5vw;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0px -1px 51px 32px rgba(0,0,0,0.75);
    z-index: 3;

    h1 {
        z-index: 11;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: ${props => {return props.$primaryColor}};
    z-index: 10;
`