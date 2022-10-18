import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginUser } from "./interfaces/Login-user-interface";
import { LoginUserInitialState } from "./interfaces/LoginUserInitialState";
import { LoginUser } from "./types/LoginUserTypes";

const initialState: LoginUserInitialState = {
  user: {
    id: "",
    avatar: "",
    username: "",
    email: "",
    created_at: "",
    updated_at: "",
    password: ""
  },
  loading: false,
  errors: []
}

export const loginUser = createAsyncThunk<ILoginUser, {
  username: string,
  password: string,
}>(
  "user/loginUser", async ({ username, password }: LoginUser, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3333/user/login", {
        username,
        password
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false 
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errors = action.payload
      state.loading = false 
    })
  }
})

export default loginUserSlice.reducer