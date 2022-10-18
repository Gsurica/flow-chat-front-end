import { IMessage } from "./IMessage";

export interface MessageInitialState {
  messages: IMessage[]
  loading: boolean 
  errors: any
}