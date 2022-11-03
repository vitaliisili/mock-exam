import * as React from 'react';
import styled from "styled-components";

const StyledAppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${({theme}) => theme.colors.fontPrimary};
  background: ${({theme}) => theme.colors.backgroundLight};
  font-size: ${({theme}) => theme.size.fontPrimarySize};
  font-family: ${({theme}) => theme.fonts.sfRegular};
`

const AppContainer = ({ children }) => {

    return (
        <StyledAppContainer>
            { children }
        </StyledAppContainer>
    )
}

export default AppContainer