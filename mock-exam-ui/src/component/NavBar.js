import * as React from 'react';
import styled from "styled-components";
import { TfiBook } from "react-icons/tfi";
import {Link} from "react-router-dom";
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import { VscAccount } from "react-icons/vsc";
import { TbFileInfo } from "react-icons/tb";
import { GoCommentDiscussion } from "react-icons/go";
import logo from '../image/logo/logo.png'
import { TfiPowerOff } from "react-icons/tfi";
import NavBarSearch from "./NavBarSearch";

const NavBarWrapper = styled.div`
  background-color: #3C3F41;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: #FFF;
`

const NavBarLogo = styled.div`
  padding-left: 20px;
  .logo {
    width: 100%;
    height: 100%;
  }
`

const NavBarSearchWrapper = styled.div`
  
`

const NavBarMenu = styled.div`
  height: 100%;
`

const NavBarMenuItem = styled.div`
  font-family: SF-Pro-Display-Bold, sans-serif;
  font-weight: bold;
  height: 100%;
  .menu-icon {
    font-size: 25px;
    margin-right: 8px;
  }
  .menu-link {
    text-decoration: none;
    color: #FFF;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    border-right: 1px solid #525659;
    height: 100%;
    width: 120px;
    justify-content: center;
    :hover {
      background-color: #525659;
      color: #C4C4C4;
    }
  }
  .menu-link:first-child {
    border-left: 1px solid #525659;
  }
  .menu-text {
    margin-bottom: -3px;
  }
`

const NavBarLogout = styled.div`
  padding-right: 20px;
  .menu-link {
    text-decoration: none;
    color: #FFF;
  }
  .logout{
    font-size: 25px;
    :hover {
      color: #C4607E;
    }
  }
`

const NavBar = () => {

    return (
        <NavBarWrapper>
            <NavBarLogo>
                <img className='logo' src={logo} alt="logo"/>
            </NavBarLogo>
            <NavBarSearchWrapper>
                <NavBarSearch/>
            </NavBarSearchWrapper>
            <NavBarMenu>
                <NavBarMenuItem >
                    <Link className="menu-link" to="/public-exams">
                        <TfiBook className="menu-icon"></TfiBook>
                        <span className="menu-text">EXAMS</span>
                    </Link>

                    <Link className="menu-link" to="/account">
                        <VscAccount className="menu-icon"></VscAccount>
                        <span className="menu-text">ACCOUNT</span>
                    </Link>

                    <Link className="menu-link" to="/about">
                        <TbFileInfo className="menu-icon"></TbFileInfo>
                        <span className="menu-text">ABOUT</span>
                    </Link>

                    <Link className="menu-link" to="/about">
                        <GoCommentDiscussion className="menu-icon"></GoCommentDiscussion>
                        <span className="menu-text">CONTACT</span>
                    </Link>

                </NavBarMenuItem>
            </NavBarMenu>
            <NavBarLogout>
                <Link className="menu-link" to="/logout">
                    <TfiPowerOff className="logout"></TfiPowerOff>
                </Link>
            </NavBarLogout>
        </NavBarWrapper>
    )
}

export default NavBar