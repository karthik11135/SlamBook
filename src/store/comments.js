import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: { showCommentsCard: false, commentsStore: null},
  reducers: {
    openCommentsCard(state) {
      state.showCommentsCard = true;
    },
    closeCommentsCard(state) {
      state.showCommentsCard = false;
    },
    addToCommentsStore(state, action) {
      state.commentsStore = action.payload;
    },
  },
});

export const commentsSliceActions = commentsSlice.actions;
export default commentsSlice;
