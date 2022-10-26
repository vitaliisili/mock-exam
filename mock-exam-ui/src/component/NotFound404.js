import * as React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #3C3F41;
  font-weight: bolder;
  font-size: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`

const NotFound404 = () => {

    return (
        <Wrapper>
            <div>404</div>
        </Wrapper>
    )
}

export default NotFound404