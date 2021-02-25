import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={
              user.photo
                ? user.photo
                : 'https://pixabay.com/get/gf391205cd9ca37ab001db92bdae65cf11ce29de43c928b60df7c369b527c1e529b257d059bd04a3d619e435c1bd58146_1280.jpg'
            }
          />
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background: #350d36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`

const Main = styled.div`
  display: flex;
  margin-right: 16px;
  margin-left: 16px;
`

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #fff;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus {
    outline: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 100%;
  }
`
