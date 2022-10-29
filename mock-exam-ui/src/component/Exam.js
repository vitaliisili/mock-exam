import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import useFetchData from "../service/useFetchData";
import {API_GET_ALL_PUBLIC_EXAMS, API_GET_EXAM_BY_ID} from "../constant/ApiUrl";
import SideBar from "./SideBar";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const Content = styled.div`
  margin-left: 200px;
  padding: 20px;
`

const ExamContent = styled.div`
  .title {
    font-weight: bolder;
    font-size: 30px;
  }
  
  .description {
    margin-top: 40px;
    line-height: 20px;
  }
`

const Exam = () => {

    const {id} = useParams()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)

    //TODO: all code below move to exam/exam-edit
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isPublic, setIsPublic] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (exam) {
            setTitle(exam.title)
            setDescription(exam.description)
            setIsPublic(exam.isPublic)
            setCategories([... exam.examCategories])
        }else {
            console.log("not loaded")
        }
    },[exam, isPending])

    return (
        <div>
            <NavBar/>
            <Wrapper>
                <SideBar/>
                <Content>
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading ...</div>}
                    {exam &&
                        <ExamContent>
                            <div className="title">{exam.title}</div>
                            <div className="description">{exam.description}</div>
                        </ExamContent>
                    }
                </Content>
            </Wrapper>
        </div>
    )
}

export default Exam

