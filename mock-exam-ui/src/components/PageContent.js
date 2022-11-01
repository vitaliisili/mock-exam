import * as React from 'react';
import styled from "styled-components";

const StyledPageContent = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`

const PageContent = ({ children }) => {

    return (
        <StyledPageContent>
            {children}
        </StyledPageContent>
    )
}

export default PageContent