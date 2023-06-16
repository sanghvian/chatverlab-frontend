
import { ChatMessage } from "@components/molecules/ChatFunction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatResponse {
  data: string,
  source_docs: string[]
}

interface state {
  bizProb: string,
  currentPane: number,
  archiObj: ChatResponse,
  chatMessages: ChatMessage[],
}

const initialState: state = {
  bizProb: "",
  currentPane: 0,
  archiObj: {
    data: "",
    source_docs: []
  },
  chatMessages: [],
}

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setBizProb: (state, action: PayloadAction<string>) => {
      state.bizProb = action.payload;
    },
    setChatResponse: (state, action: PayloadAction<ChatResponse>) => {
      state.archiObj = action.payload;
    },
    appendToChatHistory: (state, action: PayloadAction<ChatMessage>) => {
      state.chatMessages.push(action.payload);
    }
  },
});

export const {
  setBizProb,
  appendToChatHistory,
  setChatResponse,
} = stateSlice.actions;

export default stateSlice.reducer;
