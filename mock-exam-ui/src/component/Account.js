import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";

const AccountWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
`

const Account = () => {

    const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)

    return (
        <div>
            <NavBar/>
            <AccountWrapper>
                {error && <div>{error}</div>}
                {isPending && <div>Loading ...</div>}
                {user &&
                    <div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                    </div>

                }
            </AccountWrapper>
        </div>
    )
}

export default Account

