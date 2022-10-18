import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IPostMessage } from "./interfaces/IPostMessage";
import { PostMessageInitialState } from "./interfaces/PostMessageInitialState";
import { PostMessageTypes } from "./types/PostMessageTypes";

const initialState: PostMessageInitialState = {
  message: {
    message: "",
    username: ""
  },
  loading: false,
  errors: [],
}

export const postMessages = createAsyncThunk<IPostMessage, {
  message: string,
  username: string
}>(
  "messages/postMessages", async ({ username, message }: PostMessageTypes, thunkAPi) => {
    try {
      const response = await axios.post(`http://localhost:3333/messages/${username}`, {
        username,
        message,
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPi.rejectWithValue(error)
    }
  }
)

const postMessagesSlice = createSlice({
  name: "postMessages",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postMessages.pending, state => {
      state.loading = true 
    })
    builder.addCase(postMessages.fulfilled, (state, action) => {
      state.message = action.payload
      state.loading = false 
    })
    builder.addCase(postMessages.rejected, (state, action) => {
      state.errors = action.payload
    })
  }
})

export default postMessagesSlice.reducer