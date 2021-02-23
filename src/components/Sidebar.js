import React from 'react'
import styled from 'styled-components'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutline />
        </NewMessage>
      </WorkspaceContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  background: #3f0e40;
`
const WorkspaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: #fff;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`
