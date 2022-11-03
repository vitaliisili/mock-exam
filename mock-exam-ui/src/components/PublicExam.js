import styled from "styled-components";
import {useEffect, useState} from "react";
import {API_GET_ALL_PUBLIC_EXAMS} from "../constant/ApiUrl";
import useFetchData from "../service/useFetchData";
import Container from "./Container";

const StyledPublicExam = styled.div`

`


const PublicExam = () => {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(12)
    const url = API_GET_ALL_PUBLIC_EXAMS + `?page=${page}&size=${size}`

    const {data: exams, isPending, error} = useFetchData(url)

    return (
        <Container>
            <StyledPublicExam>
                public exams
            </StyledPublicExam>
        </Container>
    )
};

export default PublicExam