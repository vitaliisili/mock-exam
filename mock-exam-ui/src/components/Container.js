import * as React from 'react';
import styled from "styled-components";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import PageContent from "./PageContent";

const StyleContainer = styled.div`
  padding-top: 60px;
  padding-left: 200px;
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