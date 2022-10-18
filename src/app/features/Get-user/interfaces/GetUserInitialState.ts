import { IGetUser } from "./IGetUser";

export interface GetUser {
  user: IGetUser[]
  loading: boolean
  error: any
}