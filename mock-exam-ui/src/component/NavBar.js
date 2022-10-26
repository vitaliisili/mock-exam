import * as React from 'react';
import styled from "styled-components";

const NavBarWrapper = styled.div`
  background-color: #3C3F41;
  width: 100%;
  position: absolute;
  top: 0;
  display: inline-flex;
  justify-content: space-between;
  padding: 20px 0;
  color: #FFF;
`

const NavBarLogo = styled.div`
  padding-left: 20px;
`

const NavBarMenu = styled.div`

`

const NavBarLogout = styled.div`
  padding-right: 20px;
`

const NavBar = () => {

    return (
        <NavBarWrapper>
            <NavBarLogo>Logo</NavBarLogo>
            <NavBarMenu>Menu</NavBarMenu>
            <NavBarLogout>Logout</NavBarLogout>
        </NavBarWrapper>
    )
}

export default NavBar