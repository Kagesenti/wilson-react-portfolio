import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: background-color 1s ease-in-out;
        font-family: "Poppins", sans-serif;
        color: #FFFFFF;
        position: relative;
    }

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    span {
        color: ${props => {return props.$primaryColor}};
    }

    ::-webkit-scrollbar {
        width: 8px; 
    }

    
    ::-webkit-scrollbar-track {
        background: ${props => {return props.$secondaryColor}};
    }

    
    ::-webkit-scrollbar-thumb {
        background: ${props => {return props.$primaryColor}};
        border-radius: 4px; 
    }

    
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => {return props.$tertiaryColor}};
    }

    .slide-left {
        opacity: 0;
        right: 20%;
    }

    .slid-left {
        opacity: 1;
        right: 0;
    }

    .slide-right {
        opacity: 0;
        left: 20%;
    }

    .slid-right {
        opacity: 1;
        left: 0;
    }

    .fade {
        transform: scale(0.5);
        opacity: 0;
    }

    .faded {
        transform: scale(1);
        opacity: 1;
    }
`

export default GlobalStyle