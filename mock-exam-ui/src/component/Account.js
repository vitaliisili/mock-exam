import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import SideBar from "./SideBar";
import AccountProfile from "./AccountProfile";
import "../fonts/sf/SF-Pro-Display-Regular.ttf"
import {useEffect} from "react";

const AccountWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const AccountContent = styled.div`
  margin-left: 200px;
  padding: 20px;
`

const AccountProfileWrapper = styled.div`
  border-radius: 5px;
  -webkit-box-shadow: 0 0 11px -6px rgba(60,63,65,0.62);
  -moz-box-shadow: 0 0 11px -6px rgba(60,63,65,0.62);
  box-shadow: 0 0 11px -6px rgba(60,63,65,0.62);
`

const Account = () => {

    return (
        <div>
            <NavBar/>
            <AccountWrapper>
                <SideBar/>
                <AccountContent>
                    <AccountProfileWrapper>
                        <AccountProfile/>
                    </AccountProfileWrapper>
                </AccountContent>
            </AccountWrapper>
        </div>
    )
}

export default Account

