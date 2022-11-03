import * as React from 'react';
import styled from "styled-components";
import Container from "./Container";
import {useParams} from "react-router-dom";
import useFetchData from "../service/useFetchData";
import {API_GET_EXAM_BY_ID, API_GET_QUESTIONS_BY_EXAM_ID} from "../constant/ApiUrl";

const StyledExamQuestions = styled.div`
  
`

const ExamQuestions = () => {

    const {id} = useParams()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)
    const {data: questions, isPending: questionPending, error:questionError} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID}/${id}`)

    return (
        <Container>
            <StyledExamQuestions>

            </StyledExamQuestions>
        </Container>
    )
}

export default ExamQuestions