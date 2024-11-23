import React, { useContext } from "react";
import { IntroductionContainer, CVButtonContainer } from "./style";
import { styleContext } from "../../../context_providers/styleContext";
const CV = require("../../../assets/CV/Wilson_Resume.pdf");

const CVButton = () => {
  const { primaryColor, tertiaryColor } = useContext(styleContext);

  return (
    <CVButtonContainer
      $primaryColor={primaryColor}
      $tertiaryColor={tertiaryColor}
    >
      <a href={CV}>
        <div className="curriculum-vitae">
          <p> Download CV </p>
        </div>
      </a>
    </CVButtonContainer>
  );
};

function Introduction() {
  const { primaryColor, tertiaryColor } = useContext(styleContext);

  return (
    <IntroductionContainer $primaryColor={primaryColor} $tertiaryColor={tertiaryColor}>
      <div className="greetings">
        <h1>
          I'm Wilson
        </h1>
        <h1><span>A Web Developer</span></h1>
      </div>
      <p>
        I'm Wilson G. Ponseca a Web Developer who enjoys creating visually
        appealing and functioning websites. Let's bring your digital vision to
        life with my coding expertise!
      </p>
      <CVButton />
    </IntroductionContainer>
  );
}

export default Introduction;
