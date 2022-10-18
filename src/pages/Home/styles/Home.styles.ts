import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const MessageCardContainer = styled.div`
  width: 100%;
`;

export const MessageCard = styled.div`
  background-color: white;
  max-width: 200px;
  max-height: 400px;
  width: 900px;
  height: 80px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const MessageSendingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const MessageInput = styled.input`
  margin-top: 200px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundDark};
  color: white;
`;

export const SendMessageButton = styled.button`

`;