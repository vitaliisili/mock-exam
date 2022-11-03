import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_ALL_EXAMS_BY_USER_ID} from "../constant/ApiUrl";
import {AiOutlineLike, AiOutlineDownload} from "react-icons/ai";
import {MdOutlinePeopleOutline} from "react-icons/md";
import {MdSecurity} from "react-icons/md";
import {RiCalendarTodoLine} from "react-icons/ri";
import {BsTag} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {AiOutlineFileAdd} from "react-icons/ai";
import Container from "./Container";
import { RiQuestionAnswerLine } from "react-icons/ri";

const StyledMyExams = styled.div`
  
  .my-exam-section {
    
    &-header {
      &-add-btn {
        background-color: ${({theme}) => theme.colors.backgroundGrey};
        color: ${({theme}) => theme.colors.fontLight};
        border: none;
        border-radius: ${({theme}) => theme.size.borderRadiusNormal};
        padding: 15px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;

        &-icon {
          font-size: ${({theme}) => theme.size.iconMedium};
          margin-right: 5px;
        }

        :hover {
          background-color: ${({theme}) => theme.colors.backgroundDarkThin};
          color: ${({theme}) => theme.colors.textHover};
        }
      }
    }

    &-exams {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 30px;
      column-gap: 30px;
      .exam-card {
        border-radius: ${({theme}) => theme.size.borderRadiusNormal};
        box-shadow: ${({theme}) => theme.decoration.boxShadowThin};
        cursor: pointer;
        max-width: 250px;
        .card-section {
          padding: 15px;
        }
        
        .exam-card-header {
          background-color: ${({theme}) => theme.colors.backgroundGrey};
          border-top-right-radius: ${({theme}) => theme.size.borderRadiusNormal};
          border-top-left-radius: ${({theme}) => theme.size.borderRadiusNormal};
          color: ${({theme}) => theme.colors.fontLight};
          
          &-title {
            font-size: ${({theme}) => theme.size.fontMenuSize};
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            height: 40px;
            line-height: 22px;
            overflow: hidden;
            position: relative;
            
          }
          
          &-info {
            display: flex;
            justify-content: space-around;
            margin-top: 15px;
            &-item {
              display: flex;
              align-items: center;
              font-size: ${({theme}) => theme.size.fontLabelSize};
              &-icon {
                margin-right: 5px;
              }
            }
          }
          
        }
        
        .exam-card-description {
          height: 60px;
          overflow: hidden;
          &-text {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        
        .card-section-category {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          height: 60px;
          overflow: hidden;
          .card-category {
            background-color: ${({theme}) => theme.colors.backgroundGrey};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: ${({theme}) => theme.size.borderRadiusRound};
            color: ${({theme}) => theme.colors.fontLight};
            font-size: ${({theme}) => theme.size.fontLabelSize};
            padding: 2px 10px;
            margin-right: 5px;
            margin-bottom: 5px;
            height: 20px;
            display: -webkit-box;
            overflow: hidden;
            &-text {
              line-height: 16px;
            }
          }
        }
        
        .exam-card-body-info {
          display: flex;
          flex-direction: column;
          align-items: end;
          &-section {
            display: flex;
            align-items: center;
            margin-top: 15px;
            :first-child {
              margin-top: 0;
            }
            
            &-icon {
              margin-right: 3px;
            }
          }
          
          &-privacy-public {
            color: ${({theme}) => theme.colors.backgroundSelected};
          }
          
          &-privacy-private {
            color: ${({theme}) => theme.colors.statisticText};
          }
        }

        :hover {
          .exam-card-header{
            color: ${({theme}) => theme.colors.textHover};
          }
          .exam-card-header-info-item-icon {
            color: ${({theme}) => theme.colors.statisticText};
          }
        }
      }
    }
  }
`

const MyExams = () => {

    const currentUser = JSON.parse(localStorage.getItem("user"))
    const {data: exams, isPending, error} = useFetchData(`${API_GET_ALL_EXAMS_BY_USER_ID}/${currentUser.id}`)
    const navigate = useNavigate()

    const onExamClickHandler = (id) => {
        navigate(`/exam/${id}`)
    }

    return (
        <Container>
            <StyledMyExams>
                <section className="my-exam-section">
                    <div className="my-exam-section-header">
                        <button onClick={() => navigate("/add-exam")} className="my-exam-section-header-add-btn">
                            <AiOutlineFileAdd className="my-exam-section-header-add-btn-icon"/>
                            <span className="my-exam-section-header-add-btn-text">Add New Exam</span>
                        </button>
                    </div>
                </section>

                <section className="my-exam-section">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading ...</div>}

                    <div className="my-exam-section-exams">
                        {exams && exams.map((exam, index) => (
                            <div key={index} className="exam-card" onClick={() => onExamClickHandler(exam.id)}>

                                <div className="card-section exam-card-header">
                                    
                                    <div className="exam-card-header-title">{exam.title}</div>
                                    
                                    <div className="exam-card-header-info">
                                        <div className="exam-card-header-info-item">
                                            <RiQuestionAnswerLine className="exam-card-header-info-item-icon"/>
                                            <span className="exam-card-header-info-item-text">50</span>
                                        </div>

                                        <div className="exam-card-header-info-item">
                                            <AiOutlineLike className="exam-card-header-info-item-icon"/>
                                            <span className="exam-card-header-info-item-text">2346</span>
                                        </div>

                                        <div className="exam-card-header-info-item">
                                            <AiOutlineDownload className="exam-card-header-info-item-icon"/>
                                            <span className="exam-card-header-info-item-text">123</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-section exam-card-description">
                                    <span className="exam-card-description-text">{exam.description}</span>
                                </div>

                                <div className="card-section card-section-category">
                                    {exams && exam.examCategories.map((category, index) => (
                                        <div className="card-category" key={index}>
                                            {/*<BsTag className="card-category-icon"/>*/}
                                            <span className="card-category-text">{category.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="card-section exam-card-body-info">
                                    <div className="exam-card-body-info-date exam-card-body-info-section">
                                        <RiCalendarTodoLine className="exam-card-body-info-section-icon"/>
                                        <span className="exam-card-body-info-date-text">{exam.createdAt}</span>
                                    </div>
                                    {exam.isPublic
                                        ?
                                        <div className="exam-card-body-info-privacy-public exam-card-body-info-section">
                                            <MdOutlinePeopleOutline className="exam-card-body-info-privacy-public-icon"/>
                                            <span className="exam-card-body-info-privacy-public-text">Public</span>
                                        </div>
                                        :
                                        <div className="exam-card-body-info-privacy-private exam-card-body-info-section">
                                            <MdSecurity className="exam-card-body-info-privacy-private-icon"/>
                                            <span className="exam-card-body-info-privacy-private-text">Private</span>
                                        </div>
                                    }
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                <section className="my-exam-section">
                    <div className="my-exam-section-pagination">

                    </div>
                </section>
            </StyledMyExams>
        </Container>
    )
}

export default MyExams

