import * as React from 'react';
import styled from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {useEffect, useRef, useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {API_GET_EXAM_CATEGORY_BY_CURRENT_USER, API_POST_SAVE_EXAM} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";
import axios from "axios";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {RiQuestionAnswerLine} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import Container from "./Container";
import ExamEditForm from "./ExamEditForm";

const StyledAddExam = styled.div`

    .section {
      
      &-title {
        padding: ${({theme}) => theme.size.defaultPadding};
        font-size: ${({theme}) => theme.size.fontSizeExtra};
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        color: ${({theme}) => theme.colors.fontLight};
        font-weight: bolder;
        border-radius: ${({theme}) => theme.size.borderRadiusThin};
      }
      
    }
`

const AddExam = () => {

    return (
        <Container>
            <StyledAddExam>
                <section className="section">
                    <div className="section-title">Create a New Mock Exam</div>
                </section>

                <section className="section">
                    <section className="section-form">
                        <ExamEditForm type="create" exam={null}/>
                    </section>
                </section>
            </StyledAddExam>
        </Container>
    )
}

export default AddExam