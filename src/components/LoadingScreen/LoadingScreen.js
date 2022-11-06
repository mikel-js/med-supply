import React from 'react';
import { Watch } from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoadingScreen = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingContainer = styled.div`
  display: flex:
  max-width: 50%;
  padding: 48px;

  p {
    margin-bottom: 4px;
  }
`;

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <StyledLoadingContainer>
        <Watch
          height='120'
          width='120'
          radius='48'
          color='#ffb366'
          ariaLabel='watch-loading'
          wrapperStyle={{}}
          wrapperClassName=''
          visible={true}
        />
      </StyledLoadingContainer>
    </StyledLoadingScreen>
  );
};

export default LoadingScreen;
