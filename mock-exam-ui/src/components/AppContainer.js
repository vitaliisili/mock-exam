import * as React from 'react';
import styled from "styled-components";

const StyledAppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${({theme}) => theme.colors.fontPrimary};
  background: ${({theme}) => theme.colors.backgroundLight};
  font-size: ${({theme}) => theme.size.fontPrimarySize};
  font-family: ${({theme}) => theme.fonts.sfRegular};

  input, textArea {
    border: 1px solid ${({theme}) => theme.colors.inputBorder};
    background-color: transparent;
    border-radius: ${({theme}) => theme.size.borderRadiusThin};
    color: ${({theme}) => theme.colors.fontPrimary};
  }
  
`

const AppContainer = ({children}) => {



    return (
        <StyledAppContainer>
            {children}
        </StyledAppContainer>
    )
}

export default AppContainer