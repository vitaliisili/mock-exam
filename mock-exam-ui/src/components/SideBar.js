import * as React from 'react';
import styled from "styled-components";
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import {VscAccount} from "react-icons/vsc";
import {Link} from "react-router-dom";
import {CgLoadbarDoc} from "react-icons/cg";
import {VscSettingsGear} from "react-icons/vsc";

const StyledSideBar = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundDark};
  height: 100vh;
  width: ${({theme}) => theme.size.sidebarWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.colors.fontLight};
  position: fixed;
  left: 0;

  .sidebar-section {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;

    &-info {
      font-size: ${({theme}) => theme.size.fontSizeExtra};
    }

    &-menu {
      display: flex;
      flex-direction: column;
      width: 100%;

      &-link {
        display: flex;
        padding: 20px 0 20px 30px;
        border-bottom: 1px solid ${({theme}) => theme.colors.backgroundGrey};

        :first-child {
          border-top: 1px solid ${({theme}) => theme.colors.backgroundGrey};
        }
        
        &-text {
          margin-left: 5px;
        }
        
        :hover {
          background-color: ${({theme}) => theme.colors.backgroundGrey};
          
          .sidebar-section-menu-link-icon {
            color: ${({theme}) => theme.colors.iconHover};
          }
        }
      }
    }
  }
`

const SideBar = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <StyledSideBar>

            <div className="sidebar-section">
                <div className="sidebar-section-info">{user.username}</div>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-section-menu">
                    <Link className="sidebar-section-menu-link" to="/dashboard">
                        <VscAccount className='sidebar-section-menu-link-icon'/>
                        <span className="sidebar-section-menu-link-text">DASHBOARD</span>
                    </Link>

                    <Link className="sidebar-section-menu-link" to="/my-exams">
                        <CgLoadbarDoc className='sidebar-section-menu-link-icon'/>
                        <span className="sidebar-section-menu-link-text">MY EXAMS</span>
                    </Link>

                    <Link className="sidebar-section-menu-link" to="/settings">
                        <VscSettingsGear className='sidebar-section-menu-link-icon'/>
                        <span className="sidebar-section-menu-link-text">SETTINGS</span>
                    </Link>
                </div>
            </div>
        </StyledSideBar>
    )
}

export default SideBar