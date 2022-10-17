import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  padding: 20px;
`;

export const FormInputs = styled.input`
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const FormButton = styled.button`
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundLight};
  width: 100px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  color: black;
  border: none;
  margin-top: 10px;
`;

export const FormTittleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
`;

export const FormTittle = styled.h1`
  font-weight: lighter;
  letter-spacing: 2px;
`;

export const FormPhrase = styled.p`
  font-weight: lighter;
  letter-spacing: 2px;
  font-style: italic;
`;