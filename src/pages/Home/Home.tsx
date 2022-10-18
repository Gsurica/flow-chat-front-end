import { Container } from "./styles/Home.styles"
import { useEffect } from "react"
import { useAppDispatch } from "../../app/store"
import { getUser } from "../../app/features/Get-user/Get-user-slice"
import { useParams } from "react-router-dom"
 
export const Home: React.FC = () => {

  const { username } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser({username}))   
  }, [])

  return (
    <Container>
      
    </Container>
  )
}