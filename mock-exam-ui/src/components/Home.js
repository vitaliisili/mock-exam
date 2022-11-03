import styled from "styled-components";
import Login from "./Login";

const HomeWrapper = styled.div`
  display: flex;
`

const HomeInfo = styled.div`
  width: 100%;
  height: 100%;
`

const HomeAccess = styled.div`
  //background-color: aqua;
  width: 100%;
  height: 100%;
  .home-access-input {
    border-radius: 5px;
  }
    
`


const Button = styled.button`
  
`

const Home = () => {



    return (
        <HomeWrapper>
            <HomeInfo>s</HomeInfo>
            <HomeAccess>
                <Login/>
            </HomeAccess>
        </HomeWrapper>
    )
}

export default Home