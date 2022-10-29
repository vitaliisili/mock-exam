import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import useFetchData from "../service/useFetchData";
import {API_GET_QUESTIONS_BY_EXAM_ID} from "../constant/ApiUrl";
import {useParams} from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const Content = styled.div`
  margin-left: 200px;
  padding: 20px;
`


const ExamAttempt = () => {
    const {id} = useParams()
    const {data, isPending, error} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID}/${id}`)


    return (
        <div>
            <NavBar/>
            <Wrapper>
                <SideBar/>
                <Content>

                </Content>
            </Wrapper>
        </div>
    )
}

export default ExamAttempt

