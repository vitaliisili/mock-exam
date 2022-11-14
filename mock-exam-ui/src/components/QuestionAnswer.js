import * as React from 'react';
import styled from "styled-components";
import {useState} from "react";
import {TiEdit} from "react-icons/ti";
import {BiTrash} from "react-icons/bi";
import QuestionAnswerForm from "./QuestionAnswerForm";

const StyledQuestionAnswer = styled.div`
  .answer-item {
    box-shadow: ${({theme}) => theme.decoration.boxShadowThin};
    border: 1px solid ${({theme}) => theme.colors.inputBorder};
    border-radius: ${({theme}) => theme.size.borderRadiusThin};
    padding: 10px 10px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;

    :first-child {
      margin-top: 10px;
    }

    &-correct {
      background-color: ${({theme}) => theme.colors.backgroundGreenThin};
    }

    &-incorrect {
      background-color: ${({theme}) => theme.colors.backgroundPinkThin};
    }

    &-text {
      margin-left: 10px;
    }

    &-buttons {
      display: flex;

      &-item {
        margin-left: 15px;
        cursor: pointer;
        font-size: ${({theme}) => theme.size.fontMenuSize};
      }
    }
  }
`

const QuestionAnswer = ({data: answer, callBackDeleteAnswer}) => {

    const [showAnswerForm, setShowAnswerForm] = useState(false)

    return (
        <StyledQuestionAnswer>
            {
                !showAnswerForm ?
                    <div
                        className={answer.isCorrect ? "answer-item answer-item-correct" : "answer-item answer-item-incorrect"}>
                        <div className="answer-item-text">{answer.content}</div>
                        <div className="answer-item-buttons">
                            <div onClick={() => setShowAnswerForm(true)} className="answer-item-buttons-item">
                                <TiEdit/>
                            </div>
                            <div onClick={callBackDeleteAnswer} className="answer-item-buttons-item">
                                <BiTrash/>
                            </div>
                        </div>
                    </div>

                    :

                    <QuestionAnswerForm
                        type={"update"}
                        data={answer}
                        callBackShowForm={(toggle) => setShowAnswerForm(toggle)}
                    />
            }


        </StyledQuestionAnswer>
    )
}

export default QuestionAnswer