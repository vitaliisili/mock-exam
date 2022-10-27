import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {useState} from "react";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const Content = styled.div`
  margin-left: 200px;
  padding: 20px;
`


const AccountEdit = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isPublic, setIsPublic] = useState(false)
    const [categories, setCategories] = useState([])

    const saveExam = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <NavBar/>
            <Wrapper>
                <SideBar/>
                <Content>
                    <form onSubmit={saveExam}>

                    </form>
                </Content>
            </Wrapper>
        </div>
    )
}

export default AccountEdit