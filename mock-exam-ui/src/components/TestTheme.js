import * as React from 'react';
import styled from "styled-components";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import "../fonts/sf/SF-Pro-Display-Regular.ttf"
import useFetchData from "../service/useFetchData";
import {API_GET_ALL_EXAMS_BY_USER_ID} from "../constant/ApiUrl";
import "../fonts/sf/SF-Pro-Display-Regular.ttf"
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import "../fonts/sf/SF-Pro-Display-Light.ttf"
import "../fonts/Lato/Lato-Regular.ttf"
import {AiOutlineLike, AiOutlineDownload} from "react-icons/ai";
import {MdOutlinePeopleOutline} from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import Container from "./Container";

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  font-family: SF-Pro-Display-Regular, sans-serif;
`

const Content = styled.div`
  margin-left: 200px;
  padding: 20px;
`

const AddExamButton = styled.button`
  font-weight: bolder;
  color: #F7F8FA;
  background-color: #5F6568;
  border: none;
  border-radius: 4px;
  padding: 15px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .add-exam-text {
    margin-left: 10px;
  }
  .add-exam-icon {
    font-size: 23px;
  }
  :hover {
    background-color: #54595C;
    color: #bcded0;
  }
`

const ExamCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 30px;
  font-family: SF-Pro-Display-Regular, sans-serif;
  color: #3C3F41;
  max-width: 100%;
  margin-top: 40px;
`

const ExamCard = styled.div`
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .title {
    font-family: SF-Pro-Display-Bold, sans-serif;
    font-weight: bold;
    font-size: 18px;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    background-color: #5F6568;
    color: #F3F3F3;
    padding: 15px 10px 5px 10px;
    line-height: 24px;
    text-align: center;

    .card-rank {
      font-weight: lighter;
      font-family: Roboto, sans-serif;
      margin-top: 10px;
      font-size: 12px;
      display: flex;
      justify-content: end;
      align-items: center;

      .card-rank-item {
        margin-left: 15px;
      }

      .card-rank-icon {
        font-size: 16px;
        margin-bottom: -2px;
        margin-right: 3px;
      }
    }
  }

  :hover {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    background-color: #E9EAEC;
    .title {
      color: #bcded0;
    }

    .card-rank {
      color: #F3F3F3;
    }
  }
`

const CardDescription = styled.div`

  padding: 20px 10px 10px 10px;
  font-weight: bold;
  color: #656A6D;
  font-size: 15px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 66px;
    line-height: 17px;
  }
  
`

const ExamCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 10px 10px 5px;
`

const CategoryItem = styled.div`
  background-color: #5F6568;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #FFF;
  font-size: 15px;
  width: fit-content;
  padding: 2px 10px;
  margin-left: 5px;
  margin-bottom: 5px;
  .exam-category-name {
    margin-left: 3px;
  }
`

const CardExamPrivacy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .privacy-icon {
    margin-bottom: -2px;
    margin-right: 2px;
  }
  
  .exam-card-create-text {
    font-size: 14px;
    margin-left: 3px;
    position: relative;
    top: -1px;
  }
  
  .card-privacy-item-public {
    color: #81C891;
  }

  .card-privacy-item-private {
    color: #C49BA7;
  }
`

const TestTheme = () => {

    const currentUser = JSON.parse(localStorage.getItem("user"))
    const {data: exams, isPending, error} = useFetchData(`${API_GET_ALL_EXAMS_BY_USER_ID}/${currentUser.id}`)
    const navigate = useNavigate()

    const onExamClickHandler = (id) => {
        navigate(`/exam/${id}`)
    }

    return (
        <Container>
            dsad
        </Container>
    )
}

export default TestTheme

