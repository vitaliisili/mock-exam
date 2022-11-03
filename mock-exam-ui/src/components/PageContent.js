import * as React from 'react';
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 15px;
`

const StyledPageContent = styled.div`
  padding: ${({theme}) => theme.size.defaultPadding};
  border-radius: ${({theme}) => theme.size.borderRadiusNormal};
  box-shadow: ${({theme}) => theme.decoration.boxShadowThin};
`

const PageContent = ({ children }) => {

    return (
        <PageWrapper>
            <StyledPageContent>
                {children}
            </StyledPageContent>
        </PageWrapper>
    )
}

export default PageContent