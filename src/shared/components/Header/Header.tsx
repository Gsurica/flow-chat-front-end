import { Container, HLogin, HLoginButton, HTittle, Uimage, Uinfo, UProfile } from "./styles/Header.styled"

export const Header = () => {
  return (
    <Container>
      <UProfile>
        <Uimage>
          
        </Uimage>
        <Uinfo>
          User
        </Uinfo>
      </UProfile>
      <HTittle>
        Flow Chat
      </HTittle>
      <HLogin>
        <HLoginButton>
          Login
        </HLoginButton>
      </HLogin>
    </Container>
  )
}