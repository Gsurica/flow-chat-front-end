import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUserState } from "./interfaces/LoginUserState";
import { LoginUserTypes } from "./types/LoginUserTypes";
import axios from 'axios'
import { Login } from "../../../pages/Login/Login";

const initialState: LoginUserState = {
  user: [],
  loading: false,
  errors: []
}

export const LoginUser = createAsyncThunk(
  "login/loginUser", async (loginUserTypes: LoginUserTypes, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3333/user/login', {
        username: loginUserTypes.username,
        password: loginUserTypes.password
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const LoginUserSlice = createSlice({
  name: "createUserSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(LoginUser.pending, state => {
      state.loading = true
    })
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false 
    })
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.errors = action.payload
    })
  }
})

export default LoginUserSlice.reducer