import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import PublicExam from "./component/PublicExam";
import Registration from "./component/Registration";
import Account from "./component/Account";
import NotFound404 from "./component/NotFound404";
import AccountEdit from "./component/AccountEdit";
import PersonalExams from "./component/PersonalExams";
import Exam from "./component/Exam";
import AddExam from "./component/AddExam";
import ExamAttempt from "./component/ExamAttempt";
import TestTheme from "./components/TestTheme";
import {StyledAppContainer} from "./style/StyledAppContainer";
import DarkTheme from "./style/DarkTheme";

const App = () => {
    return (
        <DarkTheme>
            <StyledAppContainer>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/public-exams" element={<PublicExam/>}/>
                        <Route  path='/exam/:id' element={<Exam/>}/>
                        <Route path="/personal-exams" element={<PersonalExams/>}/>
                        <Route path="/add-exam" element={<AddExam/>}/>
                        <Route path="/exam-attempt/:id" element={<ExamAttempt/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/account-edit" element={<AccountEdit/>}/>
                        <Route path="/*" element={<NotFound404/>}/>
                        <Route path="/test" element={<TestTheme/>}/>
                    </Routes>
                </BrowserRouter>
            </StyledAppContainer>
        </DarkTheme>
    )
}

export default App
