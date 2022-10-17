import { Container, Form, FormButton, FormDiv, FormInputs, FormPhrase, FormTittle, FormTittleContainer } from "./styles/Create.styles"

export const Create = () => {
  return (
    <Container>
      <FormDiv>
        <Form>
          <FormTittleContainer>
            <FormTittle>Flow Chat</FormTittle>
            <FormPhrase>Register</FormPhrase>
          </FormTittleContainer>
          <FormInputs placeholder="Username" />
          <FormInputs placeholder="password" />
          <FormInputs placeholder="Email" />
          <div>
            <FormButton>
              Register
            </FormButton>
          </div>
        </Form>
      </FormDiv>
    </Container>
  )
}