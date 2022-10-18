import { IGetUser } from "./IGetUser";

export interface GetUser {
  user: IGetUser[] | undefined
  loading: boolean
  error: any
}