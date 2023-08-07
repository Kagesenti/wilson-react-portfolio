import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: background-color 1s ease-in-out;
        font-family: "Poppins", sans-serif;
        color: #FFFFFF
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
`

export default GlobalStyle