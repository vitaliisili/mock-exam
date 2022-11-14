import * as React from 'react';
import styled from "styled-components";
import {useEffect, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {BsPlusSquare} from "react-icons/bs";
import QuestionAnswer from "./QuestionAnswer";
import QuestionAnswerForm from "./QuestionAnswerForm";
import axios from "axios";
import {API_POST_QUESTION, API_POST_SAVE_EXAM, API_PUT_QUESTION, API_UPDATE_EXAM} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";
import {useParams} from "react-router-dom";

const StyledQuestionForm = styled.form`
  box-shadow: ${({theme}) => theme.decoration.boxShadowDark};
  padding: ${({theme}) => theme.size.defaultPadding};;
  border-radius: ${({theme}) => theme.size.borderRadiusThin};
  background-color: ${({theme}) => theme.colors.backgroundLightThin};

  .form-section {
    margin-top: 30px;

    :first-child {
      margin-top: 0;
    }

    &-label {
      color: ${({theme}) => theme.colors.fontLabel};
    }

    &-header {
      background-color: ${({theme}) => theme.colors.backgroundGrey};
      color: ${({theme}) => theme.colors.fontLight};
      padding: 10px;
      border-radius: ${({theme}) => theme.size.borderRadiusThin};
      
      &-index {
        margin-left: 5px;
      }
    }

    &-question_title {
      display: flex;
      flex-direction: column;

      &-input {
        margin-top: 10px;
        padding: 10px 10px;
        color: ${({theme}) => theme.colors.fontPrimary};
        min-height: 100px;
      }

    }

    &-answers {
      
      &-list {
        border: 1px solid ${({theme}) => theme.colors.inputBorder};
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
      }
      
      &-select {
        display: flex;
        margin-top: 10px;

        &-item {
          display: flex;
          margin-right: ${({theme}) => theme.size.defaultPadding};
          cursor: pointer;

          &-radio {
            width: 14px;
            height: 14px;
            background-color: transparent;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.colors.backgroundGrey};
            margin-right: 5px;
            position: relative;
          }

          &-radio_active {
            :after {
              content: "";
              position: absolute;
              width: 10px;
              height: 10px;
              background-color: ${({theme}) => theme.colors.backgroundGrey};
              border-radius: 50%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

        }

      }

      &-list {
        margin-top: 30px;
        box-shadow: ${({theme}) => theme.decoration.boxShadowDark};
        padding: 20px;
        
        &-add_btn {
          background-color: ${({theme}) => theme.colors.backgroundGrey};
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: ${({theme}) => theme.size.borderRadiusThin};
          width: 100%;
          padding: 10px;
          color: ${({theme}) => theme.colors.fontLight};
          font-weight: bold;
          margin-top: 20px;
          
          :hover {
            background-color: ${({theme}) => theme.colors.backgroundDarkThin};
            color: ${({theme}) => theme.colors.textHover};
            
            .form-section-answers-list-add_btn-icon {
              color: ${({theme}) => theme.colors.iconHover};
            }
          }
          
          &-text {
            margin-left: 5px;
          }
        }
      }
    }
    
    &-explanation {
      display: flex;
      flex-direction: column;
      
      &-label {
        color: ${({theme}) => theme.colors.fontLabel};
      }
      
      &-input  {
        margin-top: 10px;
        padding: 10px;
        min-height: 100px;
      }
    }
    
    &-buttons {
      display: flex;
      justify-content: end;
      
      &-item {
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        color: ${({theme}) => theme.colors.fontLight};
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
        padding: 5px 25px;
        margin-right: 10px;
        font-weight: bold;
        
        :hover {
          filter: brightness(95%);
        }
      }
      
      &-save {
        background-color: ${({theme}) => theme.colors.backgroundSelected};
      }
      
      &-close {
        background-color: ${({theme}) => theme.colors.iconHover};
      }
    }

  }
`

const QuestionForm = ({data: question, type, position, callBackShowForm, callBackQuestionData}) => {

    const {id: examId} = useParams()
    const [title, setTitle] = useState("")
    const [explanation, setExplanation] = useState("")
    const [isMultiple, setIsMultiple] = useState(false)
    const [answers, setAnswers] = useState([])
    const [showAnswerForm, setShowAnswerForm] = useState(false)


    useEffect(() => {
        if (type === "update") {
            setTitle(question.title)
            setExplanation(question.explanation)
            setIsMultiple(question.isMultiple)
            setAnswers(question.questionAnswers)
        }

        if (type === "create") {
            console.log("Type is create")
        }

    }, [question, type])

    const addAnswer = (item) => {
        setAnswers([...answers, item])
    }

    const deleteAnswer = (position) => {
        const answersCopy = answers
        answersCopy.splice(position, 1)
        setAnswers([...answersCopy])
    }

    const saveQuestion = (e) => {
        e.preventDefault()

        if (type === "update") {
            question.title = title
            question.explanation = explanation
            question.isMultiple = isMultiple
            question.questionAnswers = answers
        }

        const questionToSave = {
            id: `${type === "create" ? null : question.id}`,
            title,
            explanation,
            isMultiple,
            examId: examId,
            questionAnswers: answers
        }

        axios({
            method: type === "create" ? "POST" : "PUT",
            url: type === "create" ? API_POST_QUESTION : API_PUT_QUESTION,
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            },
            data: {...questionToSave},
        }).then(res => {
            if (res.status === 200) {
                callBackQuestionData(res.data)
            }
        }).catch(error => {
            console.log(error)
        })

        callBackShowForm(false)
    }

    return (
        <StyledQuestionForm onSubmit={saveQuestion}>
            <section className="form-section">
                <div className="form-section-header">
                    {type === "create" ? <span>CREATE NEW QUESTION</span> : <span>EDIT QUESTION <span className="form-section-header-index">{position + 1}</span></span>}
                </div>
            </section>

            <section className="form-section">
                <div className="form-section-question_title">
                    <label htmlFor="form-question-title" className="form-section-label">Question:</label>
                    <TextareaAutosize
                        id="form-question-title"
                        className="form-section-question_title-input"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
            </section>

            <section className="form-section">
                <div className="form-section-answers">
                    <div className="form-section-answers-label form-section-label">Question Type</div>
                    <div className="form-section-answers-select">
                        <div onClick={() => setIsMultiple(true)} className="form-section-answers-select-item">
                            <div
                                className={isMultiple ? "form-section-answers-select-item-radio form-section-answers-select-item-radio_active" : "form-section-answers-select-item-radio"}></div>
                            <div className="form-section-answers-select-item-text">Multiple Choice</div>
                        </div>

                        <div onClick={() => setIsMultiple(false)} className="form-section-answers-select-item">
                            <div
                                className={isMultiple ? "form-section-answers-select-item-radio" : "form-section-answers-select-item-radio form-section-answers-select-item-radio_active"}></div>
                            <div className="form-section-answers-select-item-text">Single Answer</div>
                        </div>
                    </div>

                    <div className="form-section-answers-list">
                        <div className="form-section-answers-list-title form-section-label">Question Answers:</div>
                        {answers.map((answer, index) => (
                            <QuestionAnswer
                                key={index}
                                data={answer}
                                callBackDeleteAnswer={() => deleteAnswer(index)}
                            />
                        ))}

                        <div>
                            {
                                !showAnswerForm ?
                                    <button onClick={(e) => setShowAnswerForm(true)} className="form-section-answers-list-add_btn">
                                        <BsPlusSquare className="form-section-answers-list-add_btn-icon"/>
                                        <span className="form-section-answers-list-add_btn-text">Add Answer</span>
                                    </button>
                                    :
                                    <QuestionAnswerForm type="create"
                                                        callBackShowForm={(toggle) => setShowAnswerForm(toggle)}
                                                        callBackData={(item) => addAnswer(item)}/>
                            }
                        </div>

                    </div>
                </div>
            </section>

            <section className="form-section">
                <div className="form-section-explanation">
                    <label htmlFor="explanation-area" className="form-section-explanation-label">Explanation:</label>
                    <TextareaAutosize
                        id="explanation-area"
                        className="form-section-explanation-input"
                        onChange={(e) => setExplanation(e.target.value)}
                        value={explanation}
                    />
                </div>
            </section>

            <section className="form-section">
                <div className="form-section-buttons">
                    <button onClick={saveQuestion} className="form-section-buttons-item form-section-buttons-save">Save</button>
                    <button onClick={() => callBackShowForm(false)} className="form-section-buttons-item form-section-buttons-close">Close</button>
                </div>
            </section>
        </StyledQuestionForm>
    )
}

export default QuestionForm