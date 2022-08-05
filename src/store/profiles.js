import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profiles',
    initialState: {showProfiles: false, showComments: false},
    reducers: {
        showProfilesReducer (state) {
           state.showProfiles = true;
        },
        closeProfilesReducer(state){
            state.showProfiles =false;
        },
        showCommentsReducer (state) {
            state.showComments = true;
        },
        closeCommentsReducer (state) {
            state.showComments = false;
        }
    }
});

export const profileSliceActions = profileSlice.actions;
export default profileSlice;