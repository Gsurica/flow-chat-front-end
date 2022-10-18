import { ICreateUser } from "./Create-user-interface";

export interface CreateUserInitialState {
  user: ICreateUser
  loading: boolean
  error: any
}