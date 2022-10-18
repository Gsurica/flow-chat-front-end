import { IPostMessage } from "./IPostMessage";

export interface PostMessageInitialState {
  message : IPostMessage
  loading: boolean
  errors: any
}