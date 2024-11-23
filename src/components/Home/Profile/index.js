import React from "react";
import { ProfileContainer } from "./style";
const Portrait = require("../../../assets/Images/Portrait_AI_Cropped.png");

function Profile() {
  return (
    <ProfileContainer>
      <img src={Portrait} alt="Portrait" />
    </ProfileContainer>
  );
}

export default Profile;
