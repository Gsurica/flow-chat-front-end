import { ILoginUser } from "./Login-user-interface";

export interface LoginUserInitialState {
  user: ILoginUser
  loading: boolean
  errors: any
}