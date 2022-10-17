import { ILoginUser } from "./ILoginUser";

export interface LoginUserState {
  user: ILoginUser[]
  loading: boolean
  errors: any
}