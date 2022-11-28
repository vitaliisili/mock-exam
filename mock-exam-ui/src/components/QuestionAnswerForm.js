import * as React from 'react';
import styled from "styled-components";
import {useEffect, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import {API_POST_QUESTION_ANSWER} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";
import question from "./Question";

const StyledQuestionAnswerForm = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({theme}) => theme.decoration.boxShadowThin};
  padding: 10px;
  margin: 20px 0 20px 0;
  border: 1px solid ${({theme}) => theme.colors.inputBorder};
  
  .section {
    
    &-text {
      display: flex;
      flex-direction: column;
      
      &-label {
        color: ${({theme}) => theme.colors.fontLabel};
      }
      
      &-input {
        margin-top: 10px;
        padding: 10px;
        min-height: 50px;
      }
    }
    
    &-type {
      display: flex;
      margin-top: ${({theme}) => theme.size.defaultPadding};
      &-item {
        margin-right: ${({theme}) => theme.size.defaultPadding};
        display: flex;
        align-items: center;
        cursor: pointer;
        &-radio {
          width: 14px;
          height: 14px;
          border: 1px solid ${({theme}) => theme.colors.backgroundGrey};
          border-radius: 50%;
          margin-right: 5px;
          position: relative;
        }
        
        &-radio__active {
          :after {
            content: "";
            width: 9px;
            height: 9px;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${({theme}) => theme.colors.backgroundGrey};
          }
        }
      }
    }
    
    &-buttons {
      margin-top: ${({theme}) => theme.size.defaultPadding};
      display: flex; align-items: center;
      &-item {
        margin-right: 10px;
        color: ${({theme}) => theme.colors.fontLight};
        padding: 5px 10px;
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
        
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

const QuestionAnswerForm = ({data: answer, callBackShowForm, type, callBackData}) => {

    const [answerContent, setAnswerContent] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    const saveAnswerCallBack = (e) => {
        e.preventDefault()

        if (!answerContent || answerContent.trim() === "") { // todo: show in ui input is empty
            callBackShowForm(false)
            return
        }

        if (type === "update") {
            answer.content = answerContent
            answer.isCorrect = isCorrect
        }

        if (type === "create") {
            let toSave = {
                content: answerContent,
                isCorrect: isCorrect
            }
            callBackData(toSave)
        }

        callBackShowForm(false)
    }

    useEffect(() => {
        if (type === "update") {
            setAnswerContent(answer.content)
            setIsCorrect(answer.isCorrect)
        }
    }, [type, callBackShowForm, answer])

    return (
        <StyledQuestionAnswerForm>
            <section className="section">
                <div className="section-text">
                    <label htmlFor="answer-content" className="section-text-label">Answer Text</label>
                    <TextareaAutosize
                        id="answer-content"
                        className="section-text-input"
                        onChange={(e) => setAnswerContent(e.target.value)}
                        value={answerContent}
                    />
                </div>
            </section>

            <section className="section">
                <div className="section-type">
                    <div onClick={() => setIsCorrect(true)} className="section-type-item">
                        <div className={isCorrect ? "section-type-item-radio section-type-item-radio__active" : "section-type-item-radio"}></div>
                        <div className="section-type-item-text">correct answer</div>
                    </div>
                    <div onClick={() => setIsCorrect(false)} className="section-type-item">
                        <div className={isCorrect ? "section-type-item-radio" : "section-type-item-radio section-type-item-radio__active"}></div>
                        <div className="section-type-item-text">incorrect answer</div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-buttons">
                    <button onClick={saveAnswerCallBack} className="section-buttons-item section-buttons-save">Save</button>
                    <button onClick={() => callBackShowForm(false)} className="section-buttons-item section-buttons-close">Close</button>
                </div>
            </section>


        </StyledQuestionAnswerForm>
    )
}

export default QuestionAnswerForm