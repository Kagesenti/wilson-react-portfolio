import React, { useContext } from 'react';
import { styleContext } from '../../context_providers/styleContext';
import { FooterContainer } from './style';


function Footer() {
  const { primaryColor } = useContext(styleContext);

  return (
    <>
      <FooterContainer $primaryColor={primaryColor} >
        
      </FooterContainer>
    </>
    
  );
}

export default Footer;
