import { Container, FormDiv, Form, FormInputs, FormButton, FormTittleContainer, FormTittle, FormPhrase } from "./styles/Login.styles"
import { useAppDispatch } from "../../app/store"
import { LoginUser } from "../../app/features/Login-user-slice/Login-user-slice"
import { FormEvent, useState } from "react"

export const Login = () => {

  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const formHandle = (e: FormEvent) => {
    e.preventDefault()
    dispatch(LoginUser({ username, password }))
  }

  return (
    <Container>
      <FormDiv>
        <Form onSubmit={formHandle}>
          <FormTittleContainer>
            <FormTittle>Flow Chat</FormTittle>
            <FormPhrase>Login</FormPhrase>
          </FormTittleContainer>
          <FormInputs placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <FormInputs placeholder="password" onChange={e => setPassword(e.target.value)} />
          <div>
            <FormButton type="submit">
              Login
            </FormButton>
          </div>
        </Form>
      </FormDiv>
    </Container>
  )
}