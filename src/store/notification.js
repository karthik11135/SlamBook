import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { showNotification: null, text: "", status: null },
  reducers: {
    popNotification(state) {
      state.showNotification = true;
    },
    noUserFound(state) {
      state.text = "No user found";
      state.status = "failure";
    },
    wrongPassword(state) {
      state.text = "Wrong Password";
      state.status = "failure";
    },
    signupSuccess(state) {
      state.status = "success";
      state.text = "Successfully SignedUp";
    },
    loginSuccess(state) {
        state.text = 'LoggedIn Successfully';
        state.status = 'success'
    },
    closeNotification(state) {
      state.showNotification = false;
    },
    signupFail (state) {
      state.text = 'User already Exists';
      state.status = 'failure';
    },
    somethingWentWrong(state) {
      state.text = 'Enter proper details';
      state.status = 'failure';
    }
  },
});

export const notificationSliceActions = notificationSlice.actions;
export default notificationSlice;
