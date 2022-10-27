import * as React from 'react';
import styled from "styled-components";
import Profile from "../image/profile.png"
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import {VscAccount} from "react-icons/vsc";
import {Link} from "react-router-dom";
import { CgLoadbarDoc } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";

const SideMenuWrapper = styled.div`
  background-color: #3C3F41;
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  padding-top: 40px;
  position: fixed;
  left: 0;
`

const ProfilePhotoBorder = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #3C3F41;
  border: 2px solid #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
`

const ProfilePhotoWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #FFF;
  display: inline-block;
  vertical-align: middle;
  position: relative;
`

const ProfilePhoto = styled.img`
  width: 100%;
`

const ProfileUsername = styled.div`
  margin-top: 20px;
  font-size: 23px;
  height: 20px;
  font-family: SF-Pro-Display-Bold, sans-serif;
`

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
  font-family: SF-Pro-Display-Bold, sans-serif;
  .side-menu-link {
    display: flex;
    padding: 15px 0 15px 30px;
    align-items: center;
    border-bottom: 1px solid #525659;
    background-color: #3F4244;
    :first-child {
      border-top: 1px solid #525659;
    }
    .side-menu-icon{
      font-size: 15px;
    }
    .side-menu-text{
      margin-left: 10px;
      font-size: 12px;
    }
    :hover {
      background-color: #525659;
      color: #C4C4C4;
      .side-menu-icon {
        color: #C4607E;
      }
    }
  }
`


const SideBar = () => {

    // const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <SideMenuWrapper>
            <ProfilePhotoBorder>
                <ProfilePhotoWrapper>
                    <ProfilePhoto src={Profile} alt="profile"/>
                </ProfilePhotoWrapper>
            </ProfilePhotoBorder>

            <ProfileUsername>
                {user &&
                    <div>{user.username}</div>
                }
            </ProfileUsername>

            <SideMenu>
                <Link className="side-menu-link" to="/account">
                    <VscAccount className='side-menu-icon'/>
                    <span className="side-menu-text">PROFILE</span>
                </Link>

                <Link className="side-menu-link" to="/personal-exams">
                    <CgLoadbarDoc className='side-menu-icon'/>
                    <span className="side-menu-text">MY EXAMS</span>
                </Link>

                <Link className="side-menu-link" to="/account-edit">
                    <VscSettingsGear className='side-menu-icon'/>
                    <span className="side-menu-text">SETTINGS</span>
                </Link>
            </SideMenu>

        </SideMenuWrapper>
    )
}

export default SideBar