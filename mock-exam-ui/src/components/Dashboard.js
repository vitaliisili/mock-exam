import * as React from 'react';
import Container from "./Container";
import styled from "styled-components";

const StyledDashBoard = styled.div`
  min-width: 1000px;
`

const Dashboard = () => {
    const code = `
console.log("hello world");
`;

    return (
        <Container>
            <StyledDashBoard>

            </StyledDashBoard>
        </Container>
    )
}

export default Dashboard