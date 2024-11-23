import { styled } from "styled-components";

export const IntroductionContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 50px;

  z-index: 2;

  padding: 20px;

  .greetings {
    font-size: 2em;
    font-weight: bold;
  }

  span {
    background-image: ${props => {
      return `linear-gradient(to right, ${props.$primaryColor}, #27AEA9);`}
    };

    display: inline-block;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    max-width: 500px;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    right: 50%;
    transform: translateY(-50%) translateX(50%);
    width: 100%;
    text-align: center;
    align-items: center;

    .greetings {
      font-size: 1em;
    }
  }

  animation: fade 1s ease-in-out;
`;

export const CVButtonContainer = styled.div`
  & a {
    text-decoration: none;
    height: 50px;
    width: 200px;
    border-radius: 50px;
    overflow: hidden;
    display: block;

    & .curriculum-vitae {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => {
        return props.$tertiaryColor;
      }};
      transition: all 0.2s;
      width: 100%;
      height: 100%;

      &:hover {
        background-color: ${(props) => {
          return props.$primaryColor;
        }};
      }
    }
  }
`;
