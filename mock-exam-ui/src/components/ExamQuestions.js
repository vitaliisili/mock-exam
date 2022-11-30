import * as React from 'react';
import styled from "styled-components";
import Container from "./Container";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../service/useFetchData";
import {
    API_DELETE_EXAM_BY_ID,
    API_GET_EXAM_BY_ID,
    API_GET_QUESTIONS_BY_EXAM_ID,
    API_GET_QUESTIONS_BY_EXAM_ID_DESC
} from "../constant/ApiUrl";
import {MdOutlinePeopleOutline, MdSecurity} from "react-icons/md";
import {RiQuestionnaireLine} from "react-icons/ri";
import {AiOutlineCalendar, AiOutlineFieldTime, AiOutlineFileDone} from "react-icons/ai";
import Question from "./Question";
import QuestionForm from "./QuestionForm";
import {useCallback, useState} from "react";
import {BiCommentAdd, BiTrash} from "react-icons/bi";
import {TiEdit} from "react-icons/ti";
import ConfirmationModal from "./ConfirmationModal";
import axios from "axios";
import {getCookie} from "../service/cookies-service";
import {useEffect} from "react";

const StyledExamQuestions = styled.div`
  width: 960px;

  .section {
    &-exam {

      .exam-info {
        display: flex;
        flex-direction: column;

        &-item {
          margin-top: 25px;
          color: ${({theme}) => theme.colors.skippet};
          font-weight: bold;

          :first-child {
            margin-top: 0;
          }
        }

        &-block {
          display: flex;

          &-item-inline {
            display: flex;
            align-items: center;
            margin-right: ${({theme}) => theme.size.defaultPadding};

            &-icon {
              margin-right: 3px;
            }
          }
        }

        &-title {
          font-size: ${({theme}) => theme.size.fontSizeExtra};
          color: ${({theme}) => theme.colors.fontPrimary};
          max-width: 100ch;
        }

        &-description {
          max-width: 100ch;
          color: ${({theme}) => theme.colors.fontPrimary};
          line-height: 18px;
        }

        &-categories {
          display: flex;
          flex-wrap: wrap;
          max-width: 720px;

          &-item {
            background-color: ${({theme}) => theme.colors.backgroundGrey};
            color: ${({theme}) => theme.colors.fontLight};
            padding: 5px 10px;
            margin-right: 10px;
            border-radius: ${({theme}) => theme.size.borderRadiusRound};
            font-size: ${({theme}) => theme.size.fontLabelSize};
            font-weight: lighter;
          }
        }

        &-modify {
          display: flex;

          &-button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({theme}) => theme.colors.fontLight};
            padding: 10px 10px;
            font-weight: bold;
            border-radius: ${({theme}) => theme.size.borderRadiusThin};
            font-size: ${({theme}) => theme.size.fontLabelSize};
            width: 150px;
            margin-right: ${({theme}) => theme.size.defaultPadding};
            box-shadow: ${({theme}) => theme.decoration.boxShadowDark};

            &-icon {
              margin-right: 3px;
              font-size: ${({theme}) => theme.size.fontMediumSize};
            }

            :hover {
              filter: brightness(95%);
              box-shadow: ${({theme}) => theme.decoration.boxShadowDark};
            }
          }

          &-edit {
            background-color: ${({theme}) => theme.colors.backgroundSelected};
          }

          &-delete {
            background-color: ${({theme}) => theme.colors.iconHover};
          }
        }
      }
    }

    &-question {
      border-radius: ${({theme}) => theme.size.borderRadiusThin};
      margin-top: 50px;

      &-label {
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        color: ${({theme}) => theme.colors.fontLight};
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
        padding: 10px;
      }

      &-create {
        
        &-button {
          background-color: ${({theme}) => theme.colors.backgroundGrey};
          color: ${({theme}) => theme.colors.fontLight};
          display: flex;
          align-items: center;
          padding: 10px 10px;
          border-radius: ${({theme}) => theme.size.borderRadiusThin};
          font-weight: bold;
          

          &-icon {
            margin-right: 3px;
            font-size: ${({theme}) => theme.size.fontMediumSize};
          }

          :hover {
            background-color: ${({theme}) => theme.colors.backgroundDarkThin};
            color: ${({theme}) => theme.colors.textHover};

            .section-create-button-icon {
              color: ${({theme}) => theme.colors.iconHover};
            }
          }
        }
      }
    }
  }
  
  // pre {
  //   background-color: ${({theme}) => theme.colors.backgroundDark} !important;
  //   padding: ${({theme}) => theme.size.defaultPadding};
  //   color: ${({theme}) => theme.colors.fontLight};
  // }
  
`

const ExamQuestions = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)
    const {data: questions, isPending: questionPending, error: questionError} = useFetchData(`${API_GET_QUESTIONS_BY_EXAM_ID_DESC}/${id}/desc`)
    const [showCreate, setShowCreate] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), [])

    useEffect(() => {
        document.body.style.overflow = confirmModal ? "hidden" : "unset"
    }, [confirmModal])

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

    const saveQuestion = (item) => {
        questions.unshift(item)
        forceUpdate()
    }

    const deleteQuestion = (position) => {
        questions.splice(position, 1)
        forceUpdate()
    }

    return (
        <Container>
            <StyledExamQuestions>
                <section className="section">
                    <div className="section-exam">
                        {isPending && <div>Exam Loading...</div>}
                        {error && <div>{error}</div>}
                        {exam &&
                            <div className="exam-info">
                                <div className="exam-info-item exam-info-title">{exam.title}</div>
                                <div className="exam-info-item exam-info-description">{exam.description}</div>
                                <div className="exam-info-item exam-info-block">
                                    {exam.isPublic
                                        ?
                                        <div className="exam-info-block-item">
                                            <div className="exam-info-block-item-inline exam-info-access">
                                                <MdOutlinePeopleOutline
                                                    className="exam-info-block-item-inline-icon exam-info-access-public-icon"/>
                                                <span className="exam-info-access-public-text">Public</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="exam-info-block-item">
                                            <div className="exam-info-block-item-inline exam-info-access">
                                                <MdSecurity
                                                    className="exam-info-block-item-inline-icon exam-info-access-private-icon"/>
                                                <span className="exam-info-access-private-text">Private</span>
                                            </div>
                                        </div>
                                    }

                                    <div className="exam-info-block-item">
                                        <div className="exam-info-block-item-inline exam-info-date">
                                            <AiOutlineCalendar
                                                className="exam-info-block-item-inline-icon exam-info-date-icon"/>
                                            <div className="exam-info-date-text">{exam.createdAt}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exam-info-item exam-info-categories">
                                    {
                                        exam && exam.examCategories.map((category, index) => (
                                            <div key={index} className="exam-info-categories-item">{category.name}</div>
                                        ))
                                    }
                                </div>

                                <div className="exam-info-item exam-info-block">
                                    <div className="exam-info-block-item">
                                        <div className="exam-info-block-item-inline exam-info-question_number">
                                            <RiQuestionnaireLine
                                                className="exam-info-block-item-inline-icon exam-info-question_number-icon"/>
                                            {questions &&
                                                <div className="exam-info-question_number-text">{questions.length}</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="exam-info-block-item">
                                        <div className="exam-info-block-item-inline exam-info-question_time">
                                            <AiOutlineFieldTime
                                                className="exam-info-block-item-inline-icon exam-info-question_time-icon"/>
                                            <div className="exam-info-question_time-text">{exam.time} minutes</div>
                                        </div>
                                    </div>

                                    <div className="exam-info-block-item">
                                        <div className="exam-info-block-item-inline exam-info-question_pass">
                                            <AiOutlineFileDone
                                                className="exam-info-block-item-inline-icon exam-info-question_pass-icon"/>
                                            <div className="exam-info-question_time-text">{exam.passPercentage}% Required to pass</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exam-info-item exam-info-modify">
                                    <button onClick={() => navigate(`/exam-edit/${id}`)}
                                            className="exam-info-modify-button exam-info-modify-edit">
                                        <TiEdit className="exam-info-modify-button-icon"/>
                                        <span className="exam-info-modify-edit-text">Edit Exam</span>
                                    </button>
                                    <button onClick={() => setConfirmModal(true)}
                                            className="exam-info-modify-button exam-info-modify-delete">
                                        <BiTrash className="exam-info-modify-button-icon"/>
                                        <span className="exam-info-modify-delete-text">Delete Exam</span>
                                    </button>
                                </div>

                            </div>
                        }
                    </div>
                </section>


                <section className="section">
                    <div className="section-question">
                        <div className="section-question-create">
                            {
                                !showCreate ?
                                    <button className="section-question-create-button"
                                            onClick={() => setShowCreate(true)}>
                                        <BiCommentAdd className="section-question-create-button-icon"/>
                                        <span className="section-question-create-button-text">Add New Question</span>
                                    </button>

                                    :

                                    <QuestionForm
                                        type={"create"}
                                        callBackShowForm={(toggle) => setShowCreate(toggle)}
                                        callBackQuestionData={(item) => saveQuestion(item)}
                                    />
                            }
                        </div>

                        {questionPending && <div>Question Loading...</div>}
                        {error && <div>{questionError}</div>}
                        {questions && questions.map((question, index) => (
                            <Question
                                key={index}
                                data={question}
                                index={questions.length - index}
                                callBackShowCreate={(toggle) => setShowCreate(toggle)}
                                callBackDeleteQuestion={(index) => deleteQuestion(index)}
                            />
                        ))}
                    </div>
                </section>

                {confirmModal &&
                    <ConfirmationModal
                        callBackDelete={(confirm) => confirm && deleteExam()}
                        callBackModal={(toggle) => setConfirmModal(toggle)}
                    />
                }

            </StyledExamQuestions>
        </Container>
    )
}

export default ExamQuestions