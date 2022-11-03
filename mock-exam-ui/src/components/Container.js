import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import PageContent from "./PageContent";

const StyleContainer = styled.div`
  padding-top: ${({theme}) => theme.size.navbarHeight};
  padding-left: ${({theme}) => theme.size.sidebarWidth};
  display: flex;
  justify-content: center;
  
`

const Container = ({ children }) => {

    return (
        <StyleContainer>
            <NavBar/>
            <SideBar/>
            <PageContent>
                { children }
            </PageContent>
        </StyleContainer>
    )
}

export default Container