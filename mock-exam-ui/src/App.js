import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PublicExam from "./components/PublicExam";
import Registration from "./components/Registration";
import Account from "./components/Account";
import NotFound404 from "./components/NotFound404";
import AccountEdit from "./components/AccountEdit";
import Exam from "./components/Exam";
import AddExam from "./components/AddExam";
import ExamAttempt from "./components/ExamAttempt";
import DarkTheme from "./style/DarkTheme";
import AppContainer from "./components/AppContainer";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import MyExams from "./components/MyExams";
import ExamEdit from "./components/ExamEdit";
import ExamQuestions from "./components/ExamQuestions";

const App = () => {
    return (
        <DarkTheme>
            <AppContainer>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/public-exams" element={<PublicExam/>}/>
                        <Route  path='/exam/:id' element={<Exam/>}/>
                        <Route path="/my-exams" element={<MyExams/>}/>
                        <Route path="/add-exam" element={<AddExam/>}/>
                        <Route path="/exam-edit/:id" element={<ExamEdit/>}/>
                        <Route path="/exam-questions/:id" element={<ExamQuestions/>}/>
                        <Route path="/exam-attempt/:id" element={<ExamAttempt/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/account-edit" element={<AccountEdit/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/*" element={<NotFound404/>}/>
                    </Routes>
                </BrowserRouter>
            </AppContainer>
        </DarkTheme>
    )
}

export default App
