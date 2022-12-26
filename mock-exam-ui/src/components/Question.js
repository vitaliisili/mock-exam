import * as React from 'react';
import styled from "styled-components";
import {useEffect, useState} from "react";
import QuestionForm from "./QuestionForm";
import {FaRegEdit} from "react-icons/fa";
import {TfiTrash} from "react-icons/tfi";
import axios from "axios";
import {API_DELETE_QUESTION_BY_ID} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";


const StyledQuestion = styled.div`
  margin-top: 40px;
  box-shadow: ${({theme}) => theme.decoration.boxShadowDark};
  border-radius: ${({theme}) => theme.size.borderRadiusThin};
  background-color: ${({theme}) => theme.colors.backgroundLightThin};
  border: 1px solid ${({theme}) => theme.colors.inputBorder};
  
  .question-preview {
    padding: 35px;
    display: flex;
    flex-direction: column;

    &-block {
      display: flex;
      justify-content: space-between;
    }

    &-index {
      &-text {
        font-weight: bold;
      }
    }

    &-type {
      margin-left: 10px;
      font-size: ${({theme}) => theme.size.fontLabelSize};
      color: ${({theme}) => theme.colors.fontLabel};
      font-style: italic;
    }

    &-buttons {
      display: flex;
      align-items: center;

      &-item {
        font-size: ${({theme}) => theme.size.fontMenuSize};
        margin-left: 10px;
        cursor: pointer;

        :hover {
          .question-preview-buttons-edit-icon {
            color: ${({theme}) => theme.colors.backgroundSelected};
          }

          .question-preview-buttons-delete-icon {
            color: ${({theme}) => theme.colors.iconHover};
          }
        }
      }
    }

    &-content {
      margin-top: 10px;
    }

    &-answers-text {
      font-weight: bold;
      margin-top: 40px;
    }
    
    &-answers {
      margin-top: 10px;
      
      &-item {
        padding: 15px;
        box-shadow: ${({theme}) => theme.decoration.boxShadowThin};
        margin-top: 10px;
        display: flex;
        align-items: center;
        border: 1px solid ${({theme}) => theme.colors.inputBorder};
        border-radius: ${({theme}) => theme.size.borderRadiusThin};

        &__correct {
          background-color: ${({theme}) => theme.colors.backgroundGreenThin};
        }

        &__incorrect {
          background-color: ${({theme}) => theme.colors.backgroundPinkThin};
        }

        &-box {
          min-width: 17px;
          height: 17px;
          position: relative;
          border-radius: ${({theme}) => theme.size.borderRadiusThin};
          border: 1px solid ${({theme}) => theme.colors.backgroundGrey};
          
        }

        &-box__active {
          :after {
            content: "";
            left: 5px;
            top: 2px;
            width: 6px;
            height: 10px;
            position: absolute;
            border: solid ${({theme}) => theme.colors.backgroundGrey};
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
          }
        }

        &-radio {
          min-width: 14px;
          height: 14px;
          position: relative;
          border-radius: 50%;
          border: 1px solid ${({theme}) => theme.colors.backgroundGrey};
        }

        &-radio__active {
          :after {
            content: "";
            width: 9px;
            height: 9px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            background-color: ${({theme}) => theme.colors.backgroundGrey};
          }
        }

        &-text {
          margin-left: 10px;
          font-weight: bold;
        }
      }


    }
    
    &-explanation {
      margin-top: 40px;
      
      &-label {
        font-weight: bold;
      }
      
      &-content {
        margin-top: ${({theme}) => theme.size.defaultPadding};
        a {
          display: block;
          margin-top: 7px;
        }
      }
    }
  }
`

const Question = ({data: question, index, callBackDeleteQuestion}) => {

    const [showEdit, setShowEdit] = useState(false)

    const deleteQuestion = () => {
        axios({
            url: `${API_DELETE_QUESTION_BY_ID}/${question.id}`,
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        }).then(res => {
            if (res.status === 200) {
                console.log("Question has been deleted")
                callBackDeleteQuestion(index)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <StyledQuestion>
            {

                !showEdit ?

                    <div className="question-preview">
                        <div className="question-preview-block">
                            <div className="question-preview-index">
                                <span className="question-preview-index-text">Question: {index + 1}</span>
                                <span className="question-preview-type">{question.isMultiple ? "Multiple Choice" : "Single Answer"}</span>
                            </div>
                            <div className="question-preview-buttons">
                                <div onClick={() => setShowEdit(true)} className="question-preview-buttons-item question-preview-buttons-edit">
                                    <FaRegEdit className="question-preview-buttons-edit-icon"/>
                                </div>
                                <div onClick={deleteQuestion} className="question-preview-buttons-item question-preview-buttons-delete">
                                    <TfiTrash className="question-preview-buttons-delete-icon"/>
                                </div>
                            </div>
                        </div>

                        <div className="question-preview-content" dangerouslySetInnerHTML={{__html: question.title}}></div>

                        <span className="question-preview-answers-text">Answers:</span>
                        <div className="question-preview-answers">

                            {
                                question.questionAnswers.map((answer, index) => (
                                    <div key={answer.id} className={
                                        answer.isCorrect ? "question-preview-answers-item question-preview-answers-item__correct" :
                                            "question-preview-answers-item question-preview-answers-item__incorrect"}>
                                        {
                                            question.isMultiple ?
                                                <div className={
                                                    answer.isCorrect ? "question-preview-answers-item-box question-preview-answers-item-box__active" :
                                                        "question-preview-answers-item-box"}>

                                                </div>
                                                :
                                                <div className={
                                                    answer.isCorrect ? "question-preview-answers-item-radio question-preview-answers-item-radio__active" :
                                                        "question-preview-answers-item-radio"}>

                                                </div>
                                        }
                                        <div className="question-preview-answers-item-text">{answer.content}</div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="question-preview-explanation">
                            <div className="question-preview-explanation-label">Explanation:</div>
                            <div className="question-preview-explanation-content" dangerouslySetInnerHTML={{__html: question.explanation}}></div>
                        </div>
                    </div>

                    :
                    <div className="question-modal-form">
                        <QuestionForm data={question} type={"update"}
                                      callBackShowForm={(toggle) => setShowEdit(toggle)}
                                      position={index}
                        />
                    </div>
            }

        </StyledQuestion>
    )
}

export default Question