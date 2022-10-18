import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMessage } from "./interfaces/IMessage";
import { MessageInitialState } from "./interfaces/MessageInitialState";
import { GetMessageTypes } from "./types/GetMessageTypes";

const initialState: MessageInitialState = {
  messages: [],
  loading: false,
  errors: []
}

export const getMessages = createAsyncThunk<IMessage[], {
  username: string 
}>(
  "messages/getMessages", async ({ username }: GetMessageTypes, thunkAPi) => {
    try {
      const response = await axios.get(`http://localhost:3333/messages/${username}`)
      return response.data 
    } catch (error) {
      return  thunkAPi.rejectWithValue(error)
    }
  }
)

const getMessagesSlice = createSlice({
  name: "getMessages",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMessages.pending, state => {
      state.loading = true 
    })
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload
      state.loading = false 
    })
    builder.addCase(getMessages.rejected, (state, action) => {
      state.errors = action.payload
    })
  }
})

export default getMessagesSlice.reducer