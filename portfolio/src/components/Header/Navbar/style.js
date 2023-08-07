import { styled } from "styled-components";

export const NavbarContainer = styled.div`
    min-width: 100px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    z-index: 13;

    @media screen and (max-width: 768px){
        position: absolute;
        bottom: ${props => {return props.$navbarIsActive ?  -213 : 0}}%;
        left: 0px;  
        width: 100vw;
        background-color: black;
        display: block;
        background-color: ${props => {return props.$primaryColor}};
        transition: all 0.5s ease-in-out;
        z-index: 0;
    }
`

export const NavbarItemContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & a .underline {
        width: ${props => {return props.$isNavigate ? 100 : 0}}%;
        height: 5px;
        background-color: #FFFFFF;
        transition: all 0.2s ease-in-out;
        border-radius: 10px;
    }

    & a:hover {
        & .underline {
            width: 100%;
        }
    }

    @media screen and (max-width: 768px){
        margin: 10px;
    }
`