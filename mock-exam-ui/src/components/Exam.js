import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_DELETE_EXAM_BY_ID, API_GET_EXAM_BY_ID, API_GET_QUESTIONS_BY_EXAM_ID} from "../constant/ApiUrl";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RiQuestionnaireLine} from "react-icons/ri";
import {AiOutlineFieldTime} from "react-icons/ai";
import {AiOutlineFileDone} from "react-icons/ai";
import {AiOutlineCalendar} from "react-icons/ai";
import {MdSecurity} from "react-icons/md";
import {MdOutlinePeopleOutline} from "react-icons/md";
import ChartDonuts from "./ChartDonuts";
import {VscError} from "react-icons/vsc";
import {VscQuestion} from "react-icons/vsc";
import {VscPass} from "react-icons/vsc";
import Container from "./Container";
import { TiEdit } from "react-icons/ti";
import { BiTrash } from "react-icons/bi";
import axios from "axios";
import {getCookie} from "../service/cookies-service";

const StyledExam = styled.div`
  
  .exam-section {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-title {
        font-size: ${({theme}) => theme.size.h1};
        font-weight: bolder;
        max-width: ${({theme}) => theme.size.lineLength};
      }
      
      &-icons {
        font-size: ${({theme}) => theme.size.fontSizeExtra};
        display: flex;
        
        &-item {
          cursor: pointer;
          margin-left: 10px;
          position: relative;
          
          :hover {

            .exam-section-header-icons-edit {
              color: ${({theme}) => theme.colors.textHover};
            }
            
            .exam-section-header-icons-delete {
              color: ${({theme}) => theme.colors.iconHover};
            }
          }
          
          :hover:after {
            content: attr(data-name);
            position: absolute;
            background-color: ${({theme}) => theme.colors.backgroundGrey};
            color: ${({theme}) => theme.colors.fontLight};
            font-size: ${({theme}) => theme.size.fontLabelSize};
            border-radius: ${({theme}) => theme.size.borderRadiusStrong};
            padding: 3px 10px;
            left: 0;
            top: -25px;
          }

          :hover:before {
            content: "";
            position: absolute;
            background-color: ${({theme}) => theme.colors.backgroundGrey};
            width: 7px;
            height: 7px;
            transform: rotate(45deg);
            left: 9px;
            top: -10px;
          }
        }
        
      }
      
    }
    
    &-info {
      display: flex;
      margin-top: 20px;
      &-element {
        display: flex;
        align-items: center;
        margin-right: 20px;
        font-size: ${({theme}) => theme.size.fontMediumSize};
        font-weight:bold;
        
        &-icon {
          font-size: ${({theme}) => theme.size.fontMenuSize};
          margin-right: 3px;
        }
      }
    }
    
    &-description {
      margin-top: 20px;
      max-width: 100ch;
    }
    
    &-start {
      margin-top: 40px;
      &-button {
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        color: ${({theme}) => theme.colors.fontLight};
        font-weight: bold;
        width: fit-content;
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
        padding: 15px 40px;
        font-size: ${({theme}) => theme.size.fontMediumSize};
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
          background: ${({theme}) => theme.colors.backgroundDarkThin};
          color: ${({theme}) => theme.colors.textHover};
        }
      }
    }
    
    &-statistic {
      margin-top: 40px;
      &-title {
        color: ${({theme}) => theme.colors.fontLabel};
      }
      
      &-items {
        display: flex;
        flex-direction: column;

        .exam-statistic-element {
          display: grid;
          grid-template-columns: repeat(6, 150px);
          margin-top: ${({theme}) => theme.size.defaultPadding};
          border-radius: ${({theme}) => theme.size.borderRadiusThin};
          justify-items: center;
          align-items: center;
          padding: ${({theme}) => theme.size.defaultPadding};
          font-weight: bold;
          box-shadow: ${({theme}) => theme.decoration.boxShadowDark};
        }

        .statistic-percent {
          font-size: ${({theme}) => theme.size.fontMediumSize};
        }

        .statistic-answers {
          display: flex;
          align-items: center;
          padding: 3px 0;
          font-size: ${({theme}) => theme.size.fontLabelSize};
        }

        .statistic-answers-correct {
          color: ${({theme}) => theme.colors.success};
        }

        .statistic-answers-wrong {
          color: ${({theme}) => theme.colors.statisticText};
        }

        .statistic-answers-skipped {
          color: ${({theme}) => theme.colors.skipped};
        }

        .answers-icon {
          margin-right: 5px;
        }

        .statistic-success {
          color: ${({theme}) => theme.colors.backgroundSelected};
        }

        .statistic-failed {
          color: ${({theme}) => theme.colors.statisticText};
        }

        .statistic-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .statistic-icon {
          font-size: ${({theme}) => theme.size.fontMenuSize};
          margin-right: 3px;
          margin-top: -2px;
        }
      }
    }
    
  }
  
  .confirmation-popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(95,101,104, 0.5);
    top: 0;
    left: 0;
    overflow: hidden;
    
    &-body {
      background-color: ${({theme}) => theme.colors.backgroundLight};
      padding: ${({theme}) => theme.size.defaultPadding};
      border-radius: ${({theme}) => theme.size.borderRadiusThin};
      &-text {
        //color: ${({theme}) => theme.colors.fontLight};
        font-size: ${({theme}) => theme.size.fontMediumSize};
      }
      
      &-buttons {
        margin-top: ${({theme}) => theme.size.defaultPadding};
        display: flex;
        justify-content: end;
        
        &-item {
          color: ${({theme}) => theme.colors.fontLight};
          padding: 5px 10px;
          margin-left: 10px;
          border-radius: ${({theme}) => theme.size.borderRadiusThin};
          
          :hover {
            filter: brightness(95%);
          }
        }
        
        &-delete{
          background-color: ${({theme}) => theme.colors.iconHover};
        }
        
        &-close {
          background-color: ${({theme}) => theme.colors.backgroundSelected};
        }
      }
    }
  }
`

const Exam = () => {

    const {id} = useParams()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)
    const [questionNumber, setQuestionNumber] = useState(50) // todo: add question number to exam in backend
    const [examTime, setExamTime] = useState(90) // todo: add to exam in backend
    const [percentRequired, setPercentRequired] = useState(76) // todo: add to exam in backend
    const [examStatistic, setExamStatistic] = useState(null) //todo : add backend part
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const examStatisticData = [
            {
                success: false,
                correctAnswers: 23,
                wrongAnswers: 20,
                skippedAnswers: 7,
                time: 34,
                attemptDate: "10.12.2022",
                examId: 1,
            },
            {
                success: true,
                correctAnswers: 44,
                wrongAnswers: 5,
                skippedAnswers: 1,
                time: 22,
                attemptDate: "11.12.2022",
                examId: 1,
            },
            {
                success: true,
                correctAnswers: 41,
                wrongAnswers: 6,
                skippedAnswers: 3,
                time: 39,
                attemptDate: "12.12.2022",
                examId: 1,
            },
            {
                success: false,
                correctAnswers: 11,
                wrongAnswers: 33,
                skippedAnswers: 16,
                time: 93,
                attemptDate: "09.12.2022",
                examId: 1,
            }
        ]
        setExamStatistic(examStatisticData)

    }, [])

    useEffect(() => {
        document.body.style.overflow = modal ? "hidden" : "unset"
    }, [modal])

    const startExam = () => {
        navigate(`/exam-attempt/${id}`)
    }



    const deleteExam = () => {
        axios({
            method: "DELETE",
            url: `${API_DELETE_EXAM_BY_ID}/${id}`,
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        }).then(res => {
            if (res.status === 200) {
                navigate("/my-exams")
            }
        }).then(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {exam &&
                <StyledExam>

                    <section className="exam-section">
                        <div className="exam-section-header">
                            <div className="exam-section-header-title">{exam.title}</div>
                            <div className="exam-section-header-icons">
                                <div onClick={() => navigate(`/exam-questions/${id}`)} data-name={"Edit"} className="exam-section-header-icons-item">
                                    <TiEdit className="exam-section-header-icons-edit"/>
                                </div>

                                <div onClick={() => setModal(true)} data-name={"Delete"} className="exam-section-header-icons-item">
                                    <BiTrash className="exam-section-header-icons-delete"/>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="exam-section">
                        <div className="exam-section-info">
                            <div className="exam-section-info-element">
                                <RiQuestionnaireLine className="exam-section-info-element-icon"/>
                                <span className="exam-section-info-element-text">{questionNumber > 1 ? `${questionNumber} questions` : `${questionNumber} question`}</span>
                            </div>

                            <div className="exam-section-info-element">
                                <AiOutlineFieldTime className="exam-section-info-element-icon"/>
                                <span className="exam-section-info-element-text">{examTime} minutes</span>
                            </div>

                            <div className="exam-section-info-element">
                                <AiOutlineFileDone className="exam-section-info-element-icon"/>
                                <span className="exam-section-info-element-text">{percentRequired}% correct answers required to pass</span>
                            </div>

                            <div className="exam-section-info-element">
                                {!exam.isPublic &&
                                    <MdSecurity className="exam-section-info-element-icon"/>
                                }
                                {exam.isPublic &&
                                    <MdOutlinePeopleOutline className="exam-section-info-element-icon"/>
                                }
                                <span className="exam-section-info-element-text">{exam.isPublic ? "Public" : "Private"}</span>
                            </div>
                        </div>
                    </section>

                    <section className="exam-section">
                        {exam &&
                            <div className="exam-section-description">{exam.description}</div>
                        }
                    </section>

                    <section className="exam-section">
                        <div className="exam-section-start">
                            <button onClick={startExam} className="exam-section-start-button">START EXAM</button>
                        </div>
                    </section>
                    
                    <section className="exam-section">
                        <div className="exam-section-statistic">
                            <div className="exam-section-statistic-title">EXAM STATISTIC</div>
                            <div className="exam-section-statistic-items">
                                {
                                    examStatistic && examStatistic.map((statistic, index) => (
                                        <div key={index} className="exam-statistic-element">
                                            <ChartDonuts failed={statistic.wrongAnswers} correct={statistic.correctAnswers}
                                                         wrong={statistic.wrongAnswers} skipped={statistic.skippedAnswers}/>
                                            <div
                                                className="statistic-percent">{(statistic.correctAnswers * 100) / questionNumber}%
                                            </div>
                                            <div
                                                className={statistic.success ? "statistic-success" : "statistic-failed"}>{statistic.success ? "Passed" : "Failed"}</div>
                                            <div className="statistic-answers-stats">
                                                <div className="statistic-answers statistic-answers-correct">
                                                    <VscPass className="answers-icon"/>
                                                    <span>{statistic.correctAnswers} Correct</span>
                                                </div>
                                                <div className="statistic-answers statistic-answers-wrong">
                                                    <VscError className="answers-icon"/>
                                                    <span>{statistic.wrongAnswers} Wrong</span>
                                                </div>
                                                <div className="statistic-answers statistic-answers-skipped">
                                                    <VscQuestion className="answers-icon"/>
                                                    <span>{statistic.skippedAnswers} Skipped</span>
                                                </div>
                                            </div>
                                            <div className="statistic-item">
                                                <AiOutlineFieldTime className="statistic-icon"/>
                                                <span>{statistic.time} minutes</span>
                                            </div>
                                            <div className="statistic-item">
                                                <AiOutlineCalendar className="statistic-icon"/>
                                                <span>{statistic.attemptDate}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    { modal &&
                        <div className="confirmation-popup">
                            <div className="confirmation-popup-body">
                                <div className="confirmation-popup-body-text">Are you sure you want to delete this exam?</div>
                                <div className="confirmation-popup-body-buttons">
                                    <button className="confirmation-popup-body-buttons-item confirmation-popup-body-buttons-delete" onClick={deleteExam}>Yes Delete</button>
                                    <button className="confirmation-popup-body-buttons-item confirmation-popup-body-buttons-close" onClick={() => setModal(false)}>No Close</button>
                                </div>
                            </div>
                        </div>
                    }

                </StyledExam>}
        </Container>
    )
}

export default Exam

