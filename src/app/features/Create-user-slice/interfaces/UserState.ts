import { IUser } from "./IUser";

export interface UserState {
  users: IUser[]
  loading: boolean
  errors: any
}