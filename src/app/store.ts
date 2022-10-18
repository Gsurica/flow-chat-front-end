import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import createUserReducer from './features/Create-user/Create-user-slice'
import loginUserReducer from './features/Login-user/Login-user-slice'
import getUserReducer from './features/Get-user/Get-user-slice'

export const store = configureStore({
  reducer: {
    createUser: createUserReducer,
    loginUser: loginUserReducer,
    getUser: getUserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector