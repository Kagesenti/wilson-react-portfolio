import React from 'react'
import { ProfileContainer } from './style'
const Portrait = require("../../../assets/Images/Portrait.png")

function Profile() {
  return (
    <>
      <ProfileContainer>
        <img src={Portrait} alt="Portrait" />
      </ProfileContainer>
    </>
  )
}

export default Profile