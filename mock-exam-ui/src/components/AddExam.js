import * as React from 'react';
import styled from "styled-components";
import Container from "./Container";
import ExamForm from "./ExamForm";

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
                        <ExamForm type="create" exam={null}/>
                    </section>
                </section>
            </StyledAddExam>
        </Container>
    )
}

export default AddExam