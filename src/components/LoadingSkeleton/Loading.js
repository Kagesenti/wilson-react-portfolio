import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { styleContext } from '../../context_providers/styleContext';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border-left: 4px solid ${props => {return props.$primaryColor}};
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50% !important;
  width: 50px !important;
  height: 50px !important;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingComponent = () => {
  const { primaryColor } = useContext(styleContext);

  return (
    <div>
      <LoadingSpinner $primaryColor={primaryColor}></LoadingSpinner>
    </div>
  );
};

export default LoadingComponent;
