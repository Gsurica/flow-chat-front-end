import { Container, FormDiv, Form, FormInputs, FormButton, FormTittleContainer, FormTittle, FormPhrase } from "./styles/Login.styles"
import { useAppDispatch } from "../../app/store"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../app/features/Login-user/Login-user-slice"

export const Login = () => {

  const redirect = useNavigate()
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const formHandle = (e: FormEvent) => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
    redirect(`/home/${username}`);
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