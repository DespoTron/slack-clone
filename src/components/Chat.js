import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># Clever</ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <InfoOutlinedIcon />
        </ChannelDetails>
      </Header>
      <MessageContainer></MessageContainer>
      <ChatInput></ChatInput>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

const Channel = styled.div``

const ChannelDetails = styled.div``

const ChannelName = styled.div`
  font-weight: 700;
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

const MessageContainer = styled.div``

const ChatInput = styled.div``
