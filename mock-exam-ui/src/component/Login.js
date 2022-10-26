import styled from "styled-components";
import {useEffect, useState} from "react";
import {API_POST_SIGN_IN} from "../constant/ApiUrl";
import axios from "axios";
import {setCookie} from "../service/cookies-service";
import {Link, useNavigate} from "react-router-dom";
import "../fonts/sf/SF-Pro-Display-Bold.ttf"
import "../fonts/sf/SF-Pro-Display-Regular.ttf"

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 80px;
  font-family: SF-Pro-Display-Regular, sans-serif;
  .login-form-link {
    text-decoration: none;
    color: #5CB5CB;
  }
  .login-form-link:hover {
    color: #56A9BE;
  }
  .login-password-recovery {
    align-self: end;
    margin-top: 20px;
  }
`

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
    margin-top: 40px;
  }
  input {
    margin-top: 15px;
    padding: 12px 10px;
    border: 1px solid #C8C8C8;
  }
  input:hover {
    background-color: #F6F6F6;
  }
`

const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LoginButton = styled.button`
  padding: 15px 80px;
  width: fit-content;
  margin-top: 40px;
  align-self: end;
  border: none;
  background-color: #5CB5CB;
  color: #FFFFFF;
  font-weight: bolder;
  font-family: SF-Pro-Display-Bold, sans-serif;
  :hover {
    background-color: #56A9BE;
  }
`

const Login = () => {

    const [username, setUsername] = useState("demo-admin")
    const [password, setPassword] = useState("password")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post(API_POST_SIGN_IN, {
            username,
            password
        }).then(res => {
            setCookie("token", res.data.token)
            navigate('/account')
        }).catch(error => {
            console.log(error) //todo: set error data
        })


    }

    return (
        <LoginWrapper>
            <LoginForm onSubmit={submitHandler}>
                <LoginInputWrapper>
                    <label htmlFor="login-username">Enter Your Username</label>
                    <input id="login-username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </LoginInputWrapper>

                <LoginInputWrapper>
                    <label htmlFor="login-password">Enter Your Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </LoginInputWrapper>

                <LoginButtonWrapper>
                    <div>New to Mock Exam? <Link className='login-form-link' to="/registration">Sign Up</Link></div>
                    <LoginButton type="submit">Login</LoginButton>
                </LoginButtonWrapper>

                <Link className='login-form-link login-password-recovery' to="/forgot-password">Forgot password?</Link>

            </LoginForm>
        </LoginWrapper>
    )
}

export default Login;