import * as React from 'react';
import Container from "./Container";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import useFetchData from "../service/useFetchData";
import {API_GET_EXAM_BY_ID, API_GET_EXAM_CATEGORY_BY_CURRENT_USER} from "../constant/ApiUrl";
import ExamEditForm from "./ExamEditForm";

const StyledExamEdit = styled.div`
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

const ExamEdit = () => {

    const {id} = useParams()
    const {data: exam, isPending, error} = useFetchData(`${API_GET_EXAM_BY_ID}/${id}`)

    return (
        <Container>
            <StyledExamEdit>
                <section className="section">
                    <div className="section-title">Edit Exam</div>
                </section>

                <section className="section">
                    <div className="section-form">
                        {exam &&
                            <ExamEditForm type="update" exam={exam}/>
                        }
                    </div>
                </section>
            </StyledExamEdit>
        </Container>
    )
}

export default ExamEdit