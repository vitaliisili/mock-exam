import styled from "styled-components";
import {useEffect, useState} from "react";
import {API_GET_ALL_PUBLIC_EXAMS} from "../constant/ApiUrl";
import useFetchData from "../service/useFetchData";

const PublicExamWrapper = styled.div`

`

const ExamCard = styled.div`
  
`

const ExamCardTitle = styled.div`
  
`

const ExamCardDescription = styled.div`
  margin-top: 10px;
`

const PublicExam = () => {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(12)
    const url = API_GET_ALL_PUBLIC_EXAMS + `?page=${page}&size=${size}`

    const {data: exams, isPending, error} = useFetchData(url)

    // console.log(exams)

    return (
        <PublicExamWrapper>
            {error && <div>{error.messages}</div>}
            {isPending && <div>Loading ...</div>}
            {exams && exams.map((exam, index) => (
                <ExamCard key={index}>
                    <ExamCardTitle>{exam.title}</ExamCardTitle>
                    <ExamCardDescription>{exam.description}</ExamCardDescription>
                </ExamCard>
            ))}
        </PublicExamWrapper>
    )
};

export default PublicExam