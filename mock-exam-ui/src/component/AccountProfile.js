import * as React from 'react';
import styled from "styled-components";
import useFetchData from "../service/useFetchData";
import {API_GET_CURRENT_USER} from "../constant/ApiUrl";
import Profile from "../image/profile.png";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillYoutube } from "react-icons/ai";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .profile-info-section {
    display: flex;
    flex-direction: row;
  }

`

const ProfilePhotoWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #FFF;
  display: inline-block;
  vertical-align: middle;
  position: relative;
`

const ProfilePhoto = styled.img`
  width: 100%;
`

const ProfileInfo = styled.div`
  margin-left: 20px;
  .profile-label {
    font-size: 12px;
    color: #C1C1C1;
    margin-top: 10px;
    padding-bottom: 3px;

    :first-child {
      margin-top: 0;
    }
  }

  .profile-info-full-name {
    display: inline-flex;
  }

  .profile-info-text {
    font-size: 27px;
    font-weight: bold;
    color: #3C3F41;
  }

  .second-name {
    margin-left: 10px;
  }

  .info-username {
    font-size: 20px;
  }

`

const ProfileSocial = styled.div`
  .social-link {
    margin-left: 10px;
  }
  .social-icon {
    font-size: 25px;
    color: #3C3F41;
  }
`


const AccountProfile = () => {

    const {data: user, isPending, error} = useFetchData(API_GET_CURRENT_USER)

    return (
        <Wrapper>
            <div className="profile-info-section">
                <ProfilePhotoWrapper>
                    <ProfilePhoto src={Profile} alt="profile"/>
                </ProfilePhotoWrapper>


                <ProfileInfo>
                    <div className="profile-label">Full Name</div>
                    <div className="profile-info-full-name">
                        {user && <div className='first-name profile-info-text'>{user.firstName}</div>}
                        {user && <div className='second-name profile-info-text'>{user.secondName}</div>}
                    </div>
                    <div className="profile-label">Username</div>
                    <div>
                        {user && <span className="profile-info-text info-username">{user.username}</span>}
                    </div>
                </ProfileInfo>
            </div>


            <div className="profile-section-social-edit">
                <ProfileSocial>
                    <Link className="social-link" to="#">
                        <AiFillGithub className="social-icon"/>
                    </Link>

                    <Link className="social-link" to="#">
                        <AiFillLinkedin className="social-icon"/>
                    </Link>

                    <Link className="social-link" to="#">
                        <AiFillInstagram className="social-icon"/>
                    </Link>

                    <Link className="social-link" to="#">
                        <AiFillFacebook className="social-icon"/>
                    </Link>

                    <Link className="social-link" to="#">
                        <AiFillTwitterCircle className="social-icon"/>
                    </Link>

                    <Link className="social-link" to="#">
                        <AiFillYoutube className="social-icon"/>
                    </Link>
                </ProfileSocial>
            </div>


        </Wrapper>
    )
}

export default AccountProfile