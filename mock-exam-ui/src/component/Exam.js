import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import useFetchData from "../service/useFetchData";
import {API_GET_EXAM_BY_ID, API_GET_QUESTIONS_BY_EXAM_ID} from "../constant/ApiUrl";
import SideBar from "./SideBar";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RiQuestionnaireLine} from "react-icons/ri";
import {AiOutlineFieldTime} from "react-icons/ai";
import {AiOutlineFileDone} from "react-icons/ai";
import {AiOutlineCalendar} from "react-icons/ai";
import {MdSecurity} from "react-icons/md";
import {MdOutlinePeopleOutline} from "react-icons/md";
import ChartDonuts from "./ChartDonuts";
import { VscError } from "react-icons/vsc";
import { VscQuestion } from "react-icons/vsc";
import { VscPass } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  position: relative;
`

const Content = styled.div`
  padding: 20px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
`

const ExamContent = styled.div`
  box-shadow: 0 0 11px -6px rgba(60, 63, 65, 0.62);
  width: 100%;
  padding: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
`

const ExamContentHeader = styled.div`
  .title {
    font-weight: bolder;
    font-size: 34px;
  }

  .info-exam-block {
    margin-top: 20px;
    display: flex;
    font-weight: bold;
  }

  .info-exam-block-element {
    margin-right: 23px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .element-icon {
    font-size: 22px;
  }

  .element-text {
    margin-left: 5px;
  }
`

const ExamStartButton = styled.button`
  background-color: #5F6568;
  color: #F7F8FA;
  font-weight: bold;
  border: none;
  width: fit-content;
  border-radius: 3px;
  padding: 15px 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  :hover {
    background: #575C5F;
    color: #bcded0;
  }
`

const ExamStatistic = styled.div`
  margin-top: 40px;

  .exam-statistic-title {
    color: #8F9091;
  }
`

const ExamStatisticBlock = styled.div`
  display: flex;
  flex-direction: column;

  .exam-statistic-element {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 20px;
    border-radius: 3px;
    justify-items: center;
    align-items: center;
    padding: 20px;
    font-weight: bold;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    color: #5F6568;
  }
  
  .statistic-percent {
    font-size: 18px;
  }
  
  .statistic-answers {
    display: flex;
    align-items: center;
    padding: 3px 0;
  }

  .statistic-answers-correct {
    color: #A4C8C3;
  }

  .statistic-answers-wrong {
    color: #FCAEA0;
  }

  .statistic-answers-skipped {
    color: #777E82;
  }
  
  .answers-icon {
    margin-right: 5px;
  }

  .statistic-success {
    color: #8BC1B9;
  }

  .statistic-failed {
    color: #F0A09B;
  }
  
  .statistic-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .statistic-icon {
    font-size: 24px;
    margin-right: 5px;
    margin-top: -2px;
  }
`

const Exam = () => {

    // const user = JSON.parse(localStorage.getItem("user"))
    const {id} = useParams()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)
    const [questionNumber, setQuestionNumber] = useState(50) // todo: add question number to exam in backend
    const [examTime, setExamTime] = useState(90) // todo: add to exam in backend
    const [percentRequired, setPercentRequired] = useState(76) // todo: add to exam in backend
    const [examStatistic, setExamStatistic] = useState(null) //todo : add backend part

    const navigate = useNavigate()

    useEffect(() => {
        const examStatisticData = [
                {
                    success: false,
                    correctAnswers: 23,
                    wrongAnswers:20,
                    skippedAnswers: 7,
                    time: 34,
                    attemptDate: "10.12.2022",
                    examId: 1,
                },
                {
                    success: true,
                    correctAnswers: 44,
                    wrongAnswers:5,
                    skippedAnswers: 1,
                    time: 22,
                    attemptDate: "11.12.2022",
                    examId: 1,
                },
                {
                    success: true,
                    correctAnswers: 41,
                    wrongAnswers:6,
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

    const startExam = () => {
        navigate(`/exam-attempt/${id}`)
    }

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
                            <ExamContentHeader>
                                <div className="title">{exam.title}</div>
                                <div className="info-exam-block">
                                    <div className="info-exam-block-element">
                                        <RiQuestionnaireLine className="element-icon"/>
                                        <span
                                            className="element-text">{questionNumber > 1 ? `${questionNumber} questions` : `${questionNumber} question`}</span>
                                    </div>

                                    <div className="info-exam-block-element">
                                        <AiOutlineFieldTime className="element-icon"/>
                                        <span className="element-text">{examTime} minutes</span>
                                    </div>

                                    <div className="info-exam-block-element">
                                        <AiOutlineFileDone className="element-icon"/>
                                        <span
                                            className="element-text">{percentRequired}% correct answers required to pass</span>
                                    </div>

                                    <div className="info-exam-block-element">
                                        {!exam.isPublic &&
                                            <MdSecurity className="element-icon"/>
                                        }
                                        {exam.isPublic &&
                                            <MdOutlinePeopleOutline className="element-icon"/>
                                        }
                                        <span className="element-text">{exam.isPublic ? "Public" : "Private"}</span>
                                    </div>
                                </div>
                            </ExamContentHeader>
                            
                            <ExamStartButton onClick={startExam}>
                                <span>START EXAM</span>
                            </ExamStartButton>

                            <ExamStatistic>
                                <div className="exam-statistic-title">EXAM STATISTIC</div>

                                <ExamStatisticBlock>
                                    {
                                        examStatistic && examStatistic.map((statistic, index) => (
                                            <div key={index} className="exam-statistic-element">
                                                <ChartDonuts failed={statistic.wrongAnswers} correct={statistic.correctAnswers} wrong={statistic.wrongAnswers} skipped={statistic.skippedAnswers}/>
                                                <div className="statistic-percent">{(statistic.correctAnswers * 100) / questionNumber}%</div>
                                                <div className={statistic.success ? "statistic-success" : "statistic-failed"}>{statistic.success ? "Passed":"Failed"}</div>
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
                                </ExamStatisticBlock>
                            </ExamStatistic>
                        </ExamContent>
                    }
                </Content>
            </Wrapper>
        </div>
    )
}

export default Exam

