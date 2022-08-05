import { createSlice } from "@reduxjs/toolkit";

const profilesDataSlice = createSlice({
  name: "profilesDataSlice",
  initialState: {
    studentsData: [],
  },
  reducers: {
    addNewStudent(state, action) {
      state.studentsData.push(action.payload);
    },
    removeAllStudents(state, action) {
      state.studentsData = action.payload;
    }
  },
});

export const profilesDataActions = profilesDataSlice.actions;
export default profilesDataSlice;
