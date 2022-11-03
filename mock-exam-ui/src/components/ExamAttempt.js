import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_QUESTIONS_BY_EXAM_ID} from "../constant/ApiUrl";
import {useParams} from "react-router-dom";
import Container from "./Container";

const StyledExamAttempt = styled.div`
  
`

const ExamAttempt = () => {
    const {id} = useParams()
    const {data, isPending, error} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID}/${id}`)


    return (
        <Container>
            <StyledExamAttempt>
                exam attempt
            </StyledExamAttempt>
        </Container>
    )
}

export default ExamAttempt

