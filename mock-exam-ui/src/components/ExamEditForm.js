import * as React from 'react';
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import {AiOutlineCheck, AiOutlineCloseCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {RiQuestionAnswerLine} from "react-icons/ri";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {API_GET_EXAM_CATEGORY_BY_CURRENT_USER, API_POST_SAVE_EXAM, API_UPDATE_EXAM} from "../constant/ApiUrl";
import {getCookie} from "../service/cookies-service";
import {useEffect, useState} from "react";
import {MdSystemUpdateAlt} from "react-icons/md";

const StyledExamEditForm = styled.form`
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
    background-color: ${({theme}) => theme.colors.backgroundGrey};
    border-radius: ${({theme}) => theme.size.borderRadiusRound};
    padding: 5px 15px;
    margin-right: 10px;
    color: ${({theme}) => theme.colors.fontLight};
    margin-bottom: 10px;
    font-size: ${({theme}) => theme.size.fontLabelSize};
    cursor: pointer;
    box-shadow: ${({theme}) => theme.decoration.boxShadowCategory};
  }

  .select-category-header {
    color: ${({theme}) => theme.colors.fontLabel};
    margin-top: 20px;
  }

  .selected-category {
    background-color: ${({theme}) => theme.colors.backgroundSelected};
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

const ExamEditForm = ({type, exam}) => {

    const {id} = useParams()
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
                if (exam != null && type === "update") {
                    setTitle(exam.title)
                    setDescription(exam.description)
                    setIsPublic(exam.isPublic)
                    setSelectedCategories(exam.examCategories)

                }

                let allCategories = response.data;
                allCategories = allCategories.filter(item => !selectedCategories.find(s => s.name === item.name))
                setCategories(allCategories)

                setPending(false)
                setError(null)
            }).catch(error => {
            setPending(false)
            setError(error)
        })

    }, [isPending])

    const categorySelectHandle = (e, category, isSelected) => {

        if (isSelected) {
            for (let i = 0; i < selectedCategories.length; i++) {
                if (selectedCategories[i].name === category.name) {
                    selectedCategories.splice(i, 1)
                    break
                }
            }
            setCategories([...categories, category])
        }
        else {
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].name === category.name) {
                    categories.splice(i, 1)
                    break
                }
            }

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
            method: type === "create" ? "POST" : "PUT",
            url: type === "create" ? API_POST_SAVE_EXAM : API_UPDATE_EXAM,
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            },
            data: {
                id,
                title,
                description,
                isPublic,
                examCategories: selectedCategories
            },
        }).then(res => {
            if (res.status === 200) {
                navigate(`/exam-questions/${type === "create" ? res.data.id : id}`)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <StyledExamEditForm onSubmit={saveExam}>
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


                <div className="select-category-header">All EXAM CATEGORY</div>
                <div className="category-wrapper">
                    <div className="category-select-section">
                        {categories && categories.map((category, index) => (
                            <div key={index} onClick={(e) => categorySelectHandle(e, category, false)}
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

                    <div className="select-category-header">SELECTED EXAM CATEGORY</div>
                    <div className="category-select-section">
                        {selectedCategories && selectedCategories.map((category, index) => (
                            <div key={index} onClick={(e) => categorySelectHandle(e, category, true)}
                                 className="exam-category selected-category">
                                <span>{category.name}</span>
                            </div>
                        ))}
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
                {type === "create" ?
                    <RiQuestionAnswerLine className="question-btn-icon"/> :
                    <MdSystemUpdateAlt className="question-btn-icon"/>
                }

                <span className="question-btn-text">{type === "create" ? "Add Questions" : "Save Changes"}</span>
            </div>
        </StyledExamEditForm>
    )
}

export default ExamEditForm