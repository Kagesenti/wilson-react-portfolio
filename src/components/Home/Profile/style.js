import { styled } from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2;

    padding: 20px;

    & img {
        width: 50%;
        height: auto;
        border-radius: 20px;
    }

    @keyframes slide-right-fade {
        0% { opacity: 0; right: 20% }
        100% {opacity: 1; right: 0%}
    }

    animation: slide-right-fade 1s ease-in-out;
`