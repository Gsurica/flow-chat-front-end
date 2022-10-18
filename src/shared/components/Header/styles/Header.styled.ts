import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.light};
`;

export const UProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
`;

export const Uimage = styled.div`
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: aqua;
  justify-content: center;
  align-items: center;
`;

export const Uinfo = styled.div`
  display: flex;
`;

export const HTittle = styled.h1`
  font-weight: bold;
  letter-spacing: 5px;
  font-size: 16px;
`;

export const HLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HLoginButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${props => props.theme.colors.backgroundLight};
  border: none; 
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
`;