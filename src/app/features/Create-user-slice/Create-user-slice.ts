import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./interfaces/IUser";
import { UserState } from "./interfaces/UserState";
import axios from 'axios'
import { CreateUserTypes } from "./types/CreateUserTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  errors: []
}

export const CreateUser = createAsyncThunk(
  "user/CreateUser", async (CreateUserTypes: CreateUserTypes, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3333/user/create', {
        username: CreateUserTypes.username,
        password: CreateUserTypes.password,
        email: CreateUserTypes.email,
        avatar: CreateUserTypes.avatar
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    } 
  }
)

export const createUserSlice = createSlice({
  name: "CreateUser",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(CreateUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false 
    })
    builder.addCase(CreateUser.rejected, (state, action) => {
      state.loading = false
      state.errors = action.payload
    })
  }
})

export default createUserSlice.reducer
