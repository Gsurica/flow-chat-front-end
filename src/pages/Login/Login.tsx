import { Container, FormDiv, Form, FormInputs, FormButton, FormTittleContainer, FormTittle, FormPhrase } from "./styles/Login.styles"

export const Login = () => {
  return (
    <Container>
      <FormDiv>
        <Form>
          <FormTittleContainer>
            <FormTittle>Flow Chat</FormTittle>
            <FormPhrase>Login</FormPhrase>
          </FormTittleContainer>
          <FormInputs placeholder="Username" />
          <FormInputs placeholder="password" />
          <div>
            <FormButton>
              Login
            </FormButton>
          </div>
        </Form>
      </FormDiv>
    </Container>
  )
}