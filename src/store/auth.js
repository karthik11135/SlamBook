import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {loginModal: false, signupModal: false, backdropFilter: false, loggedIn: false, loggedInPerson: null},
    reducers: {
        showLoginModal (state) {
           state.loginModal = true;
           state.signupModal = false;
        },
        showSignupModal (state) {
            state.loginModal = false;
            state.signupModal = true;
         },
        closeSignupModal(state) {
           state.signupModal = false;
        },
        closeLoginModal(state) {
            state.loginModal = false;
        },
        openBackdrop (state) {
          state.backdropFilter = true;
        },
        closeBackdrop (state) {
            state.backdropFilter = false;
            state.loginModal = false;
            state.signupModal = false;
        },
        onLogin(state) {
            state.loggedIn = true;
        },
        loggedInName(state, action) {
            state.loggedInPerson = action.payload;
        }

    }
})


export const authSliceActions = authSlice.actions;
export default authSlice;