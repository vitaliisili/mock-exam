import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import SideBar from "./SideBar";
import AccountProfile from "./AccountProfile";
import "../fonts/sf/SF-Pro-Display-Regular.ttf"

const AccountWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const AccountContent = styled.div`
  margin-left: 200px;
  padding: 20px;
`


const AccountEdit = () => {

    const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)

    return (
        <div>
            <NavBar/>
            <AccountWrapper>
                <SideBar/>
                <AccountContent>

                </AccountContent>
            </AccountWrapper>
        </div>
    )
}

export default AccountEdit

