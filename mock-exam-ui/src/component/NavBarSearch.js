import * as React from 'react';
import styled from "styled-components";
import {TfiSearch} from "react-icons/tfi";
import {useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Icon = styled.div`
  background-color: #F0F0F0;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  margin-right: -2px;
  .search-icon {
    color: #3C3F41;
  }
`

const Input = styled.input`
  padding: 4px 5px;
  height: 22px;
  width: 200px;
  border: none;
  background-color: #F0F0F0;
`

const SearchBtn = styled.button`
  text-decoration: none;
  border: none;
  -webkit-appearance: button;
  overflow: visible;
  text-transform: none;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #5F6568;
  color: #F0F0F0;
  padding: 0 10px;
  :hover {
    background-color: #656B6E;
  }
`

const NavBarSearch = () => {

    const [searchText, setSearchText] = useState("")

    const searchHandler = () => {
        console.log(searchText)
    }

    return (
        <Wrapper>
            <Icon><TfiSearch className="search-icon"/></Icon>
            <Input onChange={(e) => setSearchText(e.target.value)}
                   value={searchText}
                   type="text"
                   placeholder="What are you looking for?"/>
            <SearchBtn onClick={searchHandler}>Search</SearchBtn>
        </Wrapper>
    )
}

export default NavBarSearch