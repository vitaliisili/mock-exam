import * as React from 'react';
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import "../fonts/sf/SF-Pro-Display-Regular.ttf"
import Container from "./Container";


const AccountEdit = () => {

    const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)

    return (
        <Container>
            <h1>Edit</h1>
        </Container>
    )
}

export default AccountEdit

