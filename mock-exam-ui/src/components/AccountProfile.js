import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import profile from "../image/profile.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillYoutube
} from "react-icons/ai";
import {Link} from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const StyledAccountProfile = styled.div`
  display: flex;
  justify-content: space-between;
  
  .profile-section {
    margin: 0 30px;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }

  .profile-info-section {
    display: flex;
    flex-direction: row;

    &-photo-wrapper {
      width: 100px;
      height: 100px;
      border-radius: ${({theme}) => theme.size.borderRadiusNormal};
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      position: relative;
    }

    img {
      width: 100%;
    }

    &-data {
      margin-left: 20px;

      &-label {
        font-size: ${({theme}) => theme.size.fontLabelSize};
        color: ${({theme}) => theme.colors.fontLabel};
        margin-top: 10px;
        padding-bottom: 3px;

        :first-child {
          margin-top: 0;
        }
      }

      &-full-name {
        display: inline-flex;

        &-text {
          margin-right: 5px;
          font-size: ${({theme}) => theme.size.fontSizeExtra};
        }
      }
    }
  }

  .profile-social-section {
    &-link {
      margin-left: 10px;
      position: relative;
      
      :before {
        content: attr(data-name);
        visibility: hidden;
        opacity: 0;
        padding: 3px 10px;
        border-radius: 5px;
        position: absolute;
        background-color: ${({theme}) => theme.colors.fontPrimary};
        color: ${({theme}) => theme.colors.fontLight};
        font-size: ${({theme}) => theme.size.fontLabelSize};
        top: -34px;
        //left: -50%;
        z-index: 2;
      }
      
      :after {
        content: "";
        visibility: hidden;
        opacity: 0;
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${({theme}) => theme.colors.fontPrimary};
        position: absolute;
        transform: rotate(45deg);
        top: -22px;
        left: 7px;
      }

      :hover:before {
        opacity: 1;
        visibility: visible;
      }
      
      :hover:after {
        opacity: 1;
        visibility: visible;
      }

      &-icon {
        font-size: ${({theme}) => theme.size.iconLarge};
        :hover {
          color: ${({theme}) => theme.colors.iconHover};
        }
      }
    }
  }
  
  .profile-edit-section {
    display: flex;
    align-items: end;
    
    &-icon {
      
    }
  }
`


const AccountProfile = () => {

    const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)

    return (
        <StyledAccountProfile>
            <div className="profile-info-section">
                <div className="profile-info-section-photo-wrapper">
                    <img src={profile} alt="profile"/>
                </div>


                <div className="profile-info-section-data profile-section">
                    <div className="profile-info-section-data-label">Full Name</div>
                    <div className="profile-info-section-data-full-name">
                        {user && <div className='profile-info-section-data-full-name-text'>{user.firstName}</div>}
                        {user && <div className='profile-info-section-data-full-name-text'>{user.secondName}</div>}
                    </div>
                    <div className="profile-info-section-data-label">Username</div>
                    <div>
                        {user && <span className="profile-info-section-data-full-name-text">{user.username}</span>}
                    </div>
                </div>
            </div>


            <div className="profile-social-section profile-section">
                <Link className="profile-social-section-link" data-name="GitHub" to="#">
                    <AiFillGithub className="profile-social-section-link-icon"/>
                </Link>

                <Link className="profile-social-section-link" data-name="LinkedIn" to="#">
                    <AiFillLinkedin className="profile-social-section-link-icon"/>
                </Link>

                <Link className="profile-social-section-link" data-name="Instagram" to="#">
                    <AiFillInstagram className="profile-social-section-link-icon"/>
                </Link>

                <Link className="profile-social-section-link" data-name="FaceBook" to="#">
                    <AiFillFacebook className="profile-social-section-link-icon"/>
                </Link>

                <Link className="profile-social-section-link" data-name="Twitter" to="#">
                    <AiFillTwitterCircle className="profile-social-section-link-icon"/>
                </Link>

                <Link className="profile-social-section-link" data-name="YouTube" to="#">
                    <AiFillYoutube className="profile-social-section-link-icon"/>
                </Link>
            </div>

            <div className="profile-edit-section profile-section">
                <Link className="profile-social-section-link" data-name="Edit" to="/account-edit">
                    <FiEdit className="profile-social-section-link-icon profile-edit-section-icon"/>
                </Link>
            </div>


        </StyledAccountProfile>
    )
}

export default AccountProfile