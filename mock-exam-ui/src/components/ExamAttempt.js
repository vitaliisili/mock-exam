import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_EXAM_BY_ID, API_GET_QUESTIONS_BY_EXAM_ID_ASC} from "../constant/ApiUrl";
import {useParams} from "react-router-dom";
import Container from "./Container";
import {useEffect, useState} from "react";
import Timer from "./Timer";


const StyledExamAttempt = styled.div`
  .exam-attempt-wrapper {
    
  } 
  
  
`

const ExamAttempt = () => {
    const {id: examId} = useParams()
    const {data: exam, isPending: isPendingExam, error: errorExam} = useFetchData(`${API_GET_EXAM_BY_ID}/${examId}`)
    const {data: questions, isPending, error} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID_ASC}/${examId}/asc`)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [time, setTime] = useState(null)
    const [expiredTime, setExpiredTime] = useState(0)

    useEffect(() => {
        if (exam) {
            const date = new Date()
            date.setSeconds(date.getSeconds() + 5)
            setTime(date)
        }
    }, [exam])

    useEffect(() => {
        timeExpireHandler()
        console.log(expiredTime)
    }, [expiredTime])

    const previousHandler = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const nextHandler = (e) => {
        e.preventDefault()
    }

    const timeExpireHandler = () => {
        setTimeout(() => {
            setExpiredTime(expiredTime + 1)
        }, 1000 * 60)
    }

    return (
        <Container>
            <StyledExamAttempt>
                {isPending && <div>Loading...</div>}
                {error && <div>error</div>}
                {questions &&
                    <div className="exam-attempt-wrapper">
                        <section className="section">
                            <div className="progress-bar">

                            </div>
                            {
                                time && <Timer expiryTimestamp={time} expireCallBack={timeExpireHandler}/>
                            }
                        </section>



                        <section className="section"></section>



                        <section className="section"></section>



                        <section className="section"></section>



                        <section className="section"></section>
                    </div>
                }
            </StyledExamAttempt>
        </Container>
    )
}

export default ExamAttempt

