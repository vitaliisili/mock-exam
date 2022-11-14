import * as React from 'react';
import styled from "styled-components";

const StyledConfirmationModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(95, 101, 104, 0.5);
  top: 0;
  left: 0;
  overflow: hidden;

  .confirmation-popup-body {
    background-color: ${({theme}) => theme.colors.backgroundLight};
    padding: ${({theme}) => theme.size.defaultPadding};
    border-radius: ${({theme}) => theme.size.borderRadiusThin};

    &-text {
        //color: ${({theme}) => theme.colors.fontLight};
      font-size: ${({theme}) => theme.size.fontMediumSize};
    }

    &-buttons {
      margin-top: ${({theme}) => theme.size.defaultPadding};
      display: flex;
      justify-content: end;

      &-item {
        color: ${({theme}) => theme.colors.fontLight};
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: ${({theme}) => theme.size.borderRadiusThin};

        :hover {
          filter: brightness(95%);
        }
      }

      &-delete {
        background-color: ${({theme}) => theme.colors.iconHover};
      }

      &-close {
        background-color: ${({theme}) => theme.colors.backgroundSelected};
      }
    }
  }
`

const ConfirmationModal = ({callBackDelete, callBackModal}) => {

    return (
        <StyledConfirmationModal>
            <div className="confirmation-popup-body">
                <div className="confirmation-popup-body-text">Are you sure you want to delete this exam?</div>
                <div className="confirmation-popup-body-buttons">
                    <button className="confirmation-popup-body-buttons-item confirmation-popup-body-buttons-delete" onClick={() => callBackDelete(true)}>Yes Delete</button>
                    <button className="confirmation-popup-body-buttons-item confirmation-popup-body-buttons-close" onClick={() => callBackModal(false)}>No Close</button>
                </div>
            </div>
        </StyledConfirmationModal>
    )
}

export default ConfirmationModal