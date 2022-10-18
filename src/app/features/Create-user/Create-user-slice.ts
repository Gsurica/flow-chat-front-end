import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICreateUser } from "./interfaces/Create-user-interface";
import { CreateUserInitialState } from "./interfaces/CreateUserInitialState";
import { CreateUserTypes } from "./types/CreateUserTypes";

const initialState: CreateUserInitialState = {
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
  error: []
}

export const createUser = createAsyncThunk<ICreateUser, {
  username: string,
  email: string,
  password: string,
  avatar?: string,
}>(
  "user/createUser", async ({ username, email, password, avatar }: CreateUserTypes, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3333/user/create', {
        username,
        email,
        password,
        avatar
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.loading = true 
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false 
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export default createUserSlice.reducer