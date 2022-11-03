import * as React from 'react';
import styled from "styled-components";
import {TfiBook} from "react-icons/tfi";
import {Link} from "react-router-dom";
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import {VscAccount} from "react-icons/vsc";
import {TbFileInfo} from "react-icons/tb";
import {GoCommentDiscussion} from "react-icons/go";
import logo from '../image/logo/logo.png'
import {TfiPowerOff} from "react-icons/tfi";
import NavBarSearch from "./NavBarSearch";

const StyledNavBar = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundDark};
  width: 100%;
  height: ${({theme}) => theme.size.navbarHeight};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 0 ${({theme}) => theme.size.defaultPadding};
  
  .navbar-section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar-section-logo {
    width: calc(${({theme}) => theme.size.sidebarWidth} - ${({theme}) => theme.size.defaultPadding});
    img {
      padding-right: ${({theme}) => theme.size.defaultPadding};
    }
  }
  
  .navbar-section-menu {
    color: ${({theme}) => theme.colors.fontLight};
    height: 100%;
    
    &-link {
      display: inline-flex;
      height: 100%;
      align-items: center;
      padding: 0 10px;
      border-right: 1px solid ${({theme}) => theme.colors.backgroundGrey};
      
      :first-child {
        border-left: 1px solid ${({theme}) => theme.colors.backgroundGrey};
      }
      
      :hover {
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        .navbar-section-menu-link-icon {
          color: ${({theme}) => theme.colors.iconHover};
        }
      }

      &-text  {
        margin-left: 5px;
      }
    }
  }
  
  .navbar-section-logout{
    color: ${({theme}) => theme.colors.fontLight};
    font-size: ${({theme}) => theme.size.fontSizeExtra};
    :hover {
      color: ${({theme}) => theme.colors.iconHover};
    }
  } 
`

const NavBar = () => {

    return (
        <StyledNavBar>
            <div className="navbar-section">
                <div className="navbar-section-logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>

            <div className="navbar-section">
                <div className="navbar-section-search">
                    <NavBarSearch/>
                </div>
            </div>

            <div className="navbar-section">
                <div className="navbar-section-menu">
                    <Link className="navbar-section-menu-link" to="/public-exams">
                        <TfiBook className="navbar-section-menu-link-icon"></TfiBook>
                        <span className="navbar-section-menu-link-text">EXAMS</span>
                    </Link>

                    <Link className="navbar-section-menu-link" to="/account">
                        <VscAccount className="navbar-section-menu-link-icon"></VscAccount>
                        <span className="navbar-section-menu-link-text">ACCOUNT</span>
                    </Link>

                    <Link className="navbar-section-menu-link" to="/about">
                        <TbFileInfo className="navbar-section-menu-link-icon"></TbFileInfo>
                        <span className="navbar-section-menu-link-text">ABOUT</span>
                    </Link>

                    <Link className="navbar-section-menu-link" to="/about">
                        <GoCommentDiscussion className="navbar-section-menu-link-icon"></GoCommentDiscussion>
                        <span className="navbar-section-menu-link-text">CONTACT</span>
                    </Link>
                </div>
            </div>

            <div className="navbar-section">
                <div className="navbar-section-logout">
                    <Link to="/logout">
                        <TfiPowerOff className="logout"></TfiPowerOff>
                    </Link>
                </div>
            </div>
        </StyledNavBar>
    )
}

export default NavBar