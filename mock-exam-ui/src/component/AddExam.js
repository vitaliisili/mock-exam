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
import { RiQuestionAnswerLine } from "react-icons/ri";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const Content = styled.div`
  margin-left: 200px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  min-width: 1024px;
`

const Title = styled.h1`
  font-weight: bolder;
  font-size: 25px;
  background-color: #EFF0F2;
  padding: 20px;
  text-shadow: 0 4px 3px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.1), 0 18px 17px rgba(0,0,0,0.1);
`

const Form = styled.form`
  padding: 40px;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    color: #8F9091;
  }
  
  .section-wrapper {
    margin-top: 40px;
    text-shadow: 0 4px 3px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.1), 0 18px 17px rgba(0,0,0,0.1);
    :first-child {
      margin-top: 0;
    }
  }

  .exam-input {
    margin-top: 10px;
    background-color: transparent;
    border: 1px solid #CBCBCD;
    border-radius: 4px;
    color: #4C4C4D;
    padding: 10px 10px;
  }

  .exam-input-description {
    font-size: 17px;
    min-height: 70px;
  }

  .category-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .exam-category {
    background-color: #5F6568;
    border-radius: 30px;
    padding: 5px 15px;
    margin-right: 10px;
    color: #F7F8FA;
    margin-bottom: 10px;
    font-size: 12px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  .select-category-header {
    color: #8F9091;
  }

  .selected-category {
    background-color: #87C89D;
  }

  .add-category-icon {
    font-size: 27px;
    color: #7DC896;
    cursor: pointer;
    margin-top: -3px;
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
    border-radius: 50%;
  }

  .icon-active {
    display: none;
  }

  .add-input {
    background-color: transparent;
    border: 1px solid #CBCBCD;
    border-radius: 4px;
    color: #4C4C4D;
    height: 20px;

    ::placeholder {
      color: #8F9091;
      padding-left: 5px;
    }
  }

  .add-category-input {
    position: relative;
  }

  .input-icon-wrapper {
    background-color: #5EC8A1;
    position: absolute;
    right: 23px;
    top: 0;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F7F8FA;
  }

  .input-icon-wrapper-close {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #C86671;
    right: 0;
  }
  
  .radio-access-wrapper {
    margin-top: 15px;
    display: flex;
    
  }
  
  .check-box {
    display: flex;
    margin-left: 20px;
    cursor: pointer;
    :first-child {
      margin-left: 0;
    }
  }
  
  .radio-box {
    width: 14px;
    height: 14px;
    border: 1px solid #838491;
    border-radius: 50%;
    margin-top: -2px;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  
  .radio-box-active {
    :after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #5F6568;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
    }
  }
  
  .radio-text {
    margin-left: 5px;
    font-weight: bolder;
    color: #5F6568;
    font-size: 16px;
  }
  
  .add-question-btn {
    margin-top: 40px;
    padding: 15px 25px;
    background-color: #5F6568;
    color: #F7F8FA;
    font-weight: bolder;
    width: fit-content;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
    
    .question-btn-text {
      margin-left: 10px;
    }
    
    :hover {
      background-color: #4C5153;
      .question-btn-icon {
        color: #82C1AE;
      }
    }
  }
`


const AccountEdit = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isPublic, setIsPublic] = useState(false)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [iconActive, setIconActive] = useState(true)
    const [categoryText, setCategoryText] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(API_GET_EXAM_CATEGORY_BY_CURRENT_USER, {
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        })
            .then(response => {
                setCategories(response.data)
                setPending(false)
                setError(null)
            }).catch(error => {
            setPending(false)
            setError(error)
        })
    }, [])

    const categorySelectHandle = (e, category) => {

        if (selectedCategories.find(c => c.name === category.name)) {

            e.currentTarget.classList.remove("selected-category")

            for (let i = 0; i < selectedCategories.length; i++) {
                if (selectedCategories[i].name === category.name) {
                    selectedCategories.splice(i, 1)
                    break
                }
            }

        } else {
            e.currentTarget.classList.add("selected-category")
            setSelectedCategories([...selectedCategories, category])
        }

    }

    const addCategoryHandler = () => {

        let category = {}

        if (categoryText.trim() === "") {
            setIconActive(!iconActive)
            return
        }

        category.name = categoryText.trim()

        if (categories.find(c => c.name === category.name)) {
            console.log("category already exist") // todo: show this message on UI
            setCategoryText("")
            setIconActive(!iconActive)
        } else {
            setCategories([...categories, category])
            setCategoryText("")
            setIconActive(!iconActive)
        }

    }

    const saveExam = () => {
        axios({
            method: "POST",
            url: API_POST_SAVE_EXAM,
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            },
            data: {
                title,
                description,
                isPublic,
                examCategories: selectedCategories
            },
        }).then(res => {
            if (res.status === 200) {
               navigate(`/exam/${res.data.id}`)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <NavBar/>
            <Wrapper>
                <SideBar/>
                <Content>
                    <FormWrapper>
                        <Title>Create a New Mock Exam</Title>
                        <Form onSubmit={saveExam}>
                            <div className="input-section">
                                <div className="input-wrapper section-wrapper">
                                    <label className="input-label" htmlFor="exam-title">SET TITLE</label>
                                    <input
                                        className="exam-input"
                                        id="exam-title"
                                        type="text"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}/>
                                </div>

                                <div className="input-wrapper section-wrapper">
                                    <label className="input-label" htmlFor="exam-description">DESCRIPTION</label>
                                    <TextareaAutosize
                                        className="exam-input exam-input-description"
                                        id="exam-description" onChange={(e) => setDescription(e.target.value)}
                                        value={description}/>
                                </div>
                            </div>

                            <div className="category-section section-wrapper">
                                <div className="select-category-header">SELECT EXAM CATEGORY</div>
                                <div className="category-wrapper">
                                    {categories && categories.map((category, index) => (
                                        <div key={index} onClick={(e) => categorySelectHandle(e, category)}
                                             className="exam-category">
                                            <span>{category.name}</span>
                                        </div>
                                    ))}

                                    <AiOutlinePlusCircle
                                        onClick={() => setIconActive(!iconActive)}
                                        id="category-input"
                                        className={iconActive ? "add-category-icon" : "icon-active"}
                                    />

                                    <div className="add-category-input">
                                        <input
                                            onChange={(e) => setCategoryText(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    addCategoryHandler()
                                                }
                                            }}
                                            value={categoryText}
                                            type="text" className={!iconActive ? "add-input" : "icon-active"}
                                            placeholder="add category"/>

                                        <span onClick={addCategoryHandler}
                                              className={!iconActive ? "input-icon-wrapper" : "icon-active"}>
                                            <AiOutlineCheck className="input-add input-icon"/>
                                        </span>

                                        <span onClick={() => setIconActive(!iconActive)}
                                              className={!iconActive ? "input-icon-wrapper input-icon-wrapper-close" : "icon-active"}>
                                            <AiOutlineCloseCircle className="input-close input-icon"/>
                                        </span>
                                    </div>
                                </div>

                                <div className="access-section section-wrapper">
                                    <div className="access-title select-category-header">ACCESS</div>
                                    <div className="radio-access-wrapper">
                                        <div onClick={() => setIsPublic(true)} className="check-box">
                                            <div className={isPublic ? "radio-box radio-box-active" : "radio-box"}></div>
                                            <div className="radio-text">Public</div>
                                        </div>

                                        <div onClick={() => setIsPublic(false)} className="check-box">
                                            <div className={isPublic ? "radio-box" : "radio-box radio-box-active"}></div>
                                            <div className="radio-text">Private</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div onClick={saveExam} className="add-question-btn">
                                <RiQuestionAnswerLine className="question-btn-icon"/>
                                <span className="question-btn-text">Save & Add Question</span>
                            </div>

                        </Form>
                    </FormWrapper>
                </Content>
            </Wrapper>
        </div>
    )
}

export default AccountEdit