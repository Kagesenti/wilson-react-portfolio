import React, { useContext } from 'react';
import { styleContext } from '../../context_providers/styleContext';
import { HeaderContainer, Wrapper } from './style';
import Navbar from './Navbar';


function Header() {
  const { primaryColor } = useContext(styleContext);

  return (
    <>
      <HeaderContainer $primaryColor={primaryColor} >
        <Wrapper $primaryColor={primaryColor}></Wrapper>
        <h1>W,G.P</h1>
        <Navbar></Navbar>
      </HeaderContainer>
    </>
    
  );
}

export default Header;
