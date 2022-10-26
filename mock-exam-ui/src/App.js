import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import PublicExam from "./component/PublicExam";
import Registration from "./component/Registration";
import Account from "./component/Account";
import NotFound404 from "./component/NotFound404";

const Root = styled.div`
  width: 100%;
  color: #222222;
`

const App = () => {
    return (
        <Root>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/public-exams" element={<PublicExam/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/*" element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>
        </Root>
    )
}

export default App
