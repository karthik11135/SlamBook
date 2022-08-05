import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import commentsSlice from "./comments";
import notificationSlice from "./notification";
import profileSlice from "./profiles";
import profilesDataSlice from "./profilesData";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profiles: profileSlice.reducer,
    profilesData: profilesDataSlice.reducer,
    notifications: notificationSlice.reducer,
    comments: commentsSlice.reducer,
  },
});


export default store;