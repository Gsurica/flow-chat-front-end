import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CreateUserReducer from './features/Create-user-slice/Create-user-slice'
import LoginUserReducer from './features/Login-user-slice/Login-user-slice'

export const store = configureStore({
  reducer: {
    createUser: CreateUserReducer,
    loginUser: LoginUserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector