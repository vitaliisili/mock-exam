
import * as React from 'react';
import {StyledAppContainer} from "../style/StyledAppContainer";

const AppContainer = ({ children }) => {

    return (
        <StyledAppContainer>
            { children }
        </StyledAppContainer>
    )
}

export default AppContainer