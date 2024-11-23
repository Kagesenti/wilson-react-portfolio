import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    text-align: left;
    height: 100%;

    & img {
        height: 100%;
        left: 10%;
    }

    @keyframes slide-right-fade {
        0% { opacity: 0; right: 20% }
        100% {opacity: 1; right: 0%}
    }

    animation: slide-right-fade 1s ease-in-out;
`