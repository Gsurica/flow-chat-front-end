import { Container, Form, FormButton, FormDiv, FormInputs, FormPhrase, FormTittle, FormTittleContainer } from "./styles/Create.styles"
import { useAppDispatch } from "../../app/store"
import { FormEvent, useState } from "react"
import { CreateUser } from "../../app/features/Create-user-slice/Create-user-slice"

export const Create = () => {

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const dispatch = useAppDispatch()

  const formHandle = (e: FormEvent) => {
    e.preventDefault()
    dispatch(CreateUser({ username, password, email }))
  }

  return (
    <Container>
      <FormDiv>
        <Form onSubmit={formHandle}>
          <FormTittleContainer>
            <FormTittle>Flow Chat</FormTittle>
            <FormPhrase>Register</FormPhrase>
          </FormTittleContainer>
          <FormInputs placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <FormInputs placeholder="password" onChange={e => setPassword(e.target.value)}/>
          <FormInputs placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <div>
            <FormButton type="submit">
              Register
            </FormButton>
          </div>
        </Form>
      </FormDiv>
    </Container>
  )
}