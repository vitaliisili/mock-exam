import * as React from 'react';
import {useTimer} from "react-timer-hook";
import styled from "styled-components";
import {IoPause} from "react-icons/io5";
import {useState} from "react";
import {AiOutlineFieldTime} from "react-icons/ai";

const StyledTimer = styled.div `
  .timer {
    font-size: ${({theme}) => theme.size.fontPrimarySize};
    display: flex;
    
    .time-icon {
      margin-right: 2px;
    }
    
    .time-button {
      cursor: pointer;
      margin-left: 15px;
    }
  }

  .time-popup {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    padding-top: ${({theme}) => theme.size.navbarHeight};
    padding-left: ${({theme}) => theme.size.sidebarWidth};
    background-color: rgba(0,0,0,0.3);
    
    &-body {
      display: flex;
      flex-direction: column;
      position: relative;
      background-color: ${({theme}) => theme.colors.backgroundLight};
      width: 300px;
      padding: ${({theme}) => theme.size.defaultPadding};
      color: ${({theme}) => theme.colors.backgroundDark};
      font-weight: bold;
      font-size: ${({theme}) => theme.size.fontSizeExtra};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: ${({theme}) => theme.size.borderRadiusThin};
    }
    
    &-body-footer {
      display: flex;
      justify-content: end;
      margin-top: ${({theme}) => theme.size.defaultPadding};
    }
    
    .resume-btn {
      background-color: ${({theme}) => theme.colors.backgroundDark};
      color: ${({theme}) => theme.colors.fontLight};
      font-size: ${({theme}) => theme.size.fontMediumSize};
      padding: 5px 10px;
      border-radius: ${({theme}) => theme.size.borderRadiusThin};
    }
  }
`

const Timer = ({expiryTimestamp, expireCallBack }) => {

    const [showPause, setShowPause] = useState(false)
    const {
        seconds,
        minutes,
        hours,
        pause,
        resume,
    } = useTimer({ expiryTimestamp , onExpire: () => expireCallBack});

    const pauseHandler = () => {
        pause()
        setShowPause(true)
    }

    const resumeHandler = () => {
        setShowPause(false)
        resume()
    }


    return (
        <StyledTimer>
            <div className="timer">
                <span className="time-icon"><AiOutlineFieldTime/></span>
                <span className="time-text time-hour">{hours}</span>
                <span className="time-delimiter">:</span>
                <span className="time-text time-minute">{minutes}</span>
                <span className="time-delimiter">:</span>
                <span className="time-text time-second">{seconds}</span>
                <span className="time-button" onClick={pauseHandler}><IoPause/></span>
            </div>

            {
                showPause &&
                <div className="time-popup">
                    <div className="time-popup-body">
                        <div className="time-popup-body-header">Exam paused</div>
                        <div className="time-popup-body-footer">
                            <button className="resume-btn" onClick={resumeHandler}>Resume exam</button>
                        </div>

                    </div>
                </div>
            }


        </StyledTimer>
    )
}

export default Timer