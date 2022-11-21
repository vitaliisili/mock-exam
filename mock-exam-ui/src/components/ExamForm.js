import * as React from 'react';
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import {AiOutlineCheck, AiOutlineCloseCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {RiQuestionAnswerLine} from "react-icons/ri";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {
    API_DELETE_EXAM_CATEGORY_BY_ID,
    API_GET_EXAM_CATEGORY_BY_CURRENT_USER,
    API_POST_SAVE_EXAM,
    API_UPDATE_EXAM
} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";
import {useEffect, useState} from "react";
import {MdSystemUpdateAlt} from "react-icons/md";
// import {GrEdit, GrTrash} from "react-icons/gr";
// import {BiTrash} from "react-icons/bi";
import {SlTrash} from "react-icons/sl";

const StyledExamForm = styled.form`
  margin-top: 40px;
  width: 980px;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.colors.fontLabel};
  }

  .section-wrapper {
    margin-top: 40px;

    :first-child {
      margin-top: 0;
    }
  }

  .exam-input {
    margin-top: 10px;
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.inputBorder};
    border-radius: ${({theme}) => theme.size.borderRadiusThin};
    padding: 10px 10px;
    color: ${({theme}) => theme.colors.fontPrimary};
  }

  .exam-input-description {
    min-height: 100px;
  }

  .block-section {
    display: flex;
    flex-direction: row;

    &-item {
      margin-right: 150px;

      &-input {
        margin-top: 15px;
        padding: 5px;
        font-size: ${({theme}) => theme.size.fontLabelSize};

        ::placeholder {
          color: ${({theme}) => theme.colors.fontLabel};
        }
      }

      &-error {
        margin-top: 40px;
        margin-left: -100px;
        color: ${({theme}) => theme.colors.iconHover};
      }
    }
  }

  .category-wrapper {
    display: flex;
    flex-direction: column;
  }

  .category-select-section {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .exam-category {
    display: flex;
    background-color: ${({theme}) => theme.colors.backgroundGrey};
    border-radius: ${({theme}) => theme.size.borderRadiusRound};
    padding: 5px 30px 5px 15px;
    margin-right: 10px;
    color: ${({theme}) => theme.colors.fontLight};
    margin-bottom: 10px;
    font-size: ${({theme}) => theme.size.fontLabelSize};
    box-shadow: ${({theme}) => theme.decoration.boxShadowCategory};
    position: relative;
    
    &-text {
      
    }
    
    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      border-top-right-radius: ${({theme}) => theme.size.borderRadiusRound};
      border-bottom-right-radius: ${({theme}) => theme.size.borderRadiusRound};
      background-color: #6C7376;
      margin-left: 10px;
      height: 100%;
      top: 0;
      right: 0;
      position: absolute;
      color: #B7856F;
      cursor: pointer;
      font-size: 12px;
    }
  }

  .add-category-icon {
    font-size: 27px;
    color: ${({theme}) => theme.colors.backgroundSelected};
    cursor: pointer;
    margin-top: -3px;
    box-shadow: ${({theme}) => theme.decoration.boxShadowCategory};
    border-radius: 50%;
  }

  .icon-active {
    display: none;
  }

  .add-input {
    background-color: transparent;
    border: 1px solid ${({theme}) => theme.colors.inputBorder};
    border-radius: ${({theme}) => theme.size.borderRadiusThin};
    color: ${({theme}) => theme.colors.fontPrimary};
    padding-left: 5px;
    height: 24px;
  }

  .add-category-input {
    position: relative;
  }

  .input-icon-wrapper {
    background-color: ${({theme}) => theme.colors.backgroundSelected};
    position: absolute;
    right: 23px;
    top: 0;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.fontLight};
  }

  .input-icon-wrapper-close {
    border-top-right-radius: ${({theme}) => theme.size.borderRadiusThin};
    border-bottom-right-radius: ${({theme}) => theme.size.borderRadiusThin};
    background-color: ${({theme}) => theme.colors.iconHover};
    right: 0;
  }

  .radio-access-wrapper {
    margin-top: 15px;
    display: flex;

  }

  .check-box {
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;

    :first-child {
      margin-left: 0;
    }
  }

  .radio-box {
    width: 14px;
    height: 14px;
    border: 1px solid ${({theme}) => theme.colors.backgroundGrey};
    border-radius: 50%;
    margin-top: -2px;
    position: relative;
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
    font-size: 16px;
  }

  .add-question-btn {
    margin-top: 40px;
    padding: 15px 25px;
    background-color: ${({theme}) => theme.colors.backgroundGrey};;
    color: ${({theme}) => theme.colors.fontLight};
    font-weight: bolder;
    width: fit-content;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: ${({theme}) => theme.decoration.boxShadowCategory};

    .question-btn-text {
      margin-left: 5px;
    }

    :hover {
      background-color: ${({theme}) => theme.colors.backgroundDarkThin};
      color: ${({theme}) => theme.colors.textHover};
    }
  }
`

const ExamForm = ({type, exam}) => {

    const {id: examId} = useParams()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isPublic, setIsPublic] = useState(false)
    const [time, setTime] = useState("")
    const [passPercentage, setPassPercentage] = useState("")
    const [categories, setCategories] = useState([])
    const [iconActive, setIconActive] = useState(true)
    const [categoryText, setCategoryText] = useState("")
    const [formError, setFormError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if (type === "update") {
            setTitle(exam.title)
            setDescription(exam.description)
            setIsPublic(exam.isPublic)
            setTime(exam.time)
            setPassPercentage(exam.passPercentage)
            setCategories(exam.examCategories)
        }
    }, [exam, type])

    const addCategoryHandler = () => {
        const category = {
            name: categoryText
        }
        setCategories([...categories, category])
        setCategoryText("")
        setIconActive(true)
    }

    const deleteCategory = (position) => {
        let categoriesCopy = categories;
        const category = categoriesCopy.splice(position, 1)
        setCategories([...categoriesCopy])

        if (category[0].id) {
            console.log(category[0].id)
            axios({
                url: `${API_DELETE_EXAM_CATEGORY_BY_ID}/${category[0].id}`,
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${getCookie("token")}`
                }
            }).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const onChangeTime = (e) => {
        const value = e.target.value
        if (value > 100) {
            setTime('1500')
            return
        }

        if(value < 0) {
            setTime("0")
            return;
        }

        setTime(value)
    }

    const onChangePercentage = (e) => {
        const value = e.target.value
        if (value > 100) {
            setPassPercentage('100')
            return
        }

        if(value < 0) {
            setPassPercentage("0")
            return;
        }

        setPassPercentage(value)
    }

    const checkExamForm = () => {
        if (title.trim() === "") {
            setFormError("Title must not be empty!")
            return false
        }

        if (time === "") {
            setFormError("Exam time must not be empty!")
            return false
        }

        if (passPercentage === "") {
            setFormError("Percentage must not be empty!")
            return false
        }

        return true
    }

    const saveExam = () => {
        if (!checkExamForm()) return

        axios({
            method: type === "create" ? "POST" : "PUT",
            url: type === "create" ? API_POST_SAVE_EXAM : API_UPDATE_EXAM,
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            },
            data: {
                id: examId,
                title,
                description,
                isPublic,
                time,
                passPercentage,
                examCategories: categories
            },
        }).then(res => {
            if (res.status === 200) {
                navigate(`/exam-questions/${type === "create" ? res.data.id : examId}`)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <StyledExamForm onSubmit={saveExam}>
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
                <div className="select-category-header">EXAM CATEGORIES</div>
                <div className="category-wrapper">
                    <div className="category-select-section">
                        {categories && categories.map((category, index) => (
                            <div key={index} className="exam-category">
                                <div className="exam-category-text">{category.name}</div>
                                <div onClick={() => deleteCategory(index)} className="exam-category-btn"><SlTrash className="exam-category-delete-icon"/></div>
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

                </div>


                <div className="access-section section-wrapper block-section">
                    <div className="block-section-item">
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

                    <div className="block-section-item">
                        <div className="access-title select-category-header">EXAM TIME MINUTE</div>
                        <input onChange={onChangeTime} value={time} className="block-section-item-input" type="number"
                               placeholder="Max 1500 minute"/>
                    </div>

                    <div className="block-section-item">
                        <div className="access-title select-category-header">PERCENTAGE TO PASS</div>
                        <input onChange={onChangePercentage} value={passPercentage} className="block-section-item-input"
                               type="number" placeholder="Max 100%"/>
                    </div>

                </div>
            </div>

            <div className="block-section">
                <div className="block-section-item">
                    <div onClick={saveExam} className="add-question-btn">
                        {type === "create" ?
                            <RiQuestionAnswerLine className="question-btn-icon"/> :
                            <MdSystemUpdateAlt className="question-btn-icon"/>
                        }

                        <span
                            className="question-btn-text">{type === "create" ? "Add Questions" : "Save Changes"}</span>
                    </div>
                </div>

                <div className="block-section-item">
                    <p className="block-section-item-error">{formError}</p>
                </div>
            </div>

        </StyledExamForm>
    )
}

export default ExamForm