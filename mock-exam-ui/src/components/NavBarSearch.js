import * as React from 'react';
import styled from "styled-components";
import {TfiSearch} from "react-icons/tfi";
import {useState} from "react";

const StyledNavBarSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
  .search-section {
    background-color: ${({theme}) => theme.colors.backgroundLight};
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: ${({theme}) => theme.size.borderRadiusStrong};
    border-top-left-radius: ${({theme}) => theme.size.borderRadiusStrong};
    margin-right: -2px;
  }
  
  .search-input {
    padding: 4px 5px;
    border: none;
    background-color: ${({theme}) => theme.colors.backgroundLight};
    ::placeholder {
      font-size: 14px;
    }
  }
  
  .search-btn {
    text-decoration: none;
    border: none;
    -webkit-appearance: button;
    overflow: visible;
    text-transform: none;
    border-bottom-right-radius: ${({theme}) => theme.size.borderRadiusStrong};
    border-top-right-radius: ${({theme}) => theme.size.borderRadiusStrong};
    background-color: ${({theme}) => theme.colors.backgroundGrey};
    color: ${({theme}) => theme.colors.fontLight};
    padding: 0 10px;
    :hover {
      color: ${({theme}) => theme.colors.textHover};
    }
  }
`

const NavBarSearch = () => {

    const [searchText, setSearchText] = useState("")

    const searchHandler = () => {
        console.log(searchText)
    }

    return (
        <StyledNavBarSearch>
            <div className="search-section">
                <TfiSearch className="search-section-icon"/>
            </div>
            <input onChange={(e) => setSearchText(e.target.value)}
                   className="search-input"
                   value={searchText}
                   type="text"
                   placeholder="Search"
            />
            <button className="search-btn" onClick={searchHandler}>Search</button>
        </StyledNavBarSearch>
    )
}

export default NavBarSearch