import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_EXAM_BY_ID, API_GET_QUESTIONS_BY_EXAM_ID_ASC} from "../constant/ApiUrl";
import {useParams} from "react-router-dom";
import Container from "./Container";
import {useEffect, useState} from "react";
import {RiQuestionnaireLine} from "react-icons/ri";
import Timer from "./Timer";


const StyledExamAttempt = styled.div`
  .exam-attempt-wrapper {
    
    .section {
      
    }
    
    .progress-bar {
      display: flex;
      flex-direction: row;
      
      .progress-bar_item {
        margin-right: 15px;
      }
      
      .progress-bar_question {
        display: flex;
        
        &__icon {
          margin-right: 5px;
        }
      }
    }
    
  } 
  
  
`

const ExamAttempt = () => {
    const {id: examId} = useParams()
    const {data: exam, isPending: isPendingExam, error: errorExam} = useFetchData(`${API_GET_EXAM_BY_ID}/${examId}`)
    const {data: questions, isPending, error} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID_ASC}/${examId}/asc`)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [time, setTime] = useState(null)
    const [expiredTime, setExpiredTime] = useState(0)

    useEffect(() => {
        if (exam) {
            const date = new Date()
            date.setSeconds(date.getSeconds() + (exam.time * 60))
            setTime(date)
        }
    }, [exam])

    useEffect(() => {
        timeExpireHandler()
    }, [expiredTime])

    const previousQuestion = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const nextQuestion = (e) => {
        e.preventDefault(e)
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
                                <div className="progress-bar_item progress-bar_question">
                                    <div className="progress-bar_question__icon"><RiQuestionnaireLine/></div>
                                    <div className="progress-bar_question__current">{currentQuestion + 1}</div>
                                    <div className="progress-bar_question__delimiter">/</div>
                                    <div className="progress-bar_question__total">{questions && questions.length}</div>
                                </div>

                                <div className="progress-bar_item progress-bar_timer">
                                    {
                                        time && <Timer expiryTimestamp={time} expireCallBack={timeExpireHandler}/>
                                    }
                                </div>
                            </div>
                        </section>



                        <section className="section">
                            <div className="question-info">
                                <div className="question-item question-info-number">Question {currentQuestion + 1}</div>
                            </div>
                        </section>



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

