import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GetUser } from "./interfaces/GetUserInitialState";
import { IGetUser } from "./interfaces/IGetUser";
import { GetUserType } from "./types/GetUserType";

const initialState: GetUser = {
  user: [],
  loading: false,
  error: []
}

export const getUser = createAsyncThunk<IGetUser[], {
  username: string 
}>(
  "user/getUser", async ({ username }: GetUserType, thunkAPi) => {
    try {
      const response = await axios.get(`http://localhost:3333/user/${username}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPi.rejectWithValue(error)
    }
  }
)

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.loading = true
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false 
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false 
    })
  }
})

export default getUserSlice.reducer