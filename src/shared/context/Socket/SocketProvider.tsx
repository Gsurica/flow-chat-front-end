import { FunctionComponent, PropsWithChildren, useReducer, useState } from "react";
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from "./Context";

interface ISocketContextComponentProps extends PropsWithChildren {}
 
const ISocketContextComponent: FunctionComponent<ISocketContextComponentProps> = (props) => {
  
  const { children } = props

  const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState)
  const [loading, setLoading] = useState(true)

  if (loading) <p>loading socket io</p>

  return <SocketContextProvider value={{ SocketState, SocketDispatch }}>
    { children }
  </SocketContextProvider>
}
 
export default ISocketContextComponent;