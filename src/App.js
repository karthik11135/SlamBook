import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Signup/SignUp";
import "./App.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authSliceActions } from "./store/auth";
import SearchBar from "./components/SearchBar/SearchBar";
import Profile from "./components/Profiles/Profile";
import CommentProfile from "./components/Profiles/CommentProfile";
import LoggedInComponents from "./components/LoggedInComponents/LoggedInComponents";
import { profileSliceActions } from "./store/profiles";
import Notification from "./components/Notification/Notification";
import Backdrop from "./resources/Backdrop";

function App() {
  
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const showNotification = useSelector(
    (state) => state.notifications.showNotification
  );
  const showLogin = useSelector((state) => state.auth.loginModal);
  const showSignup = useSelector((state) => state.auth.signupModal);

  return (
    <div className="App">
      {showNotification && <Notification />}
      {loggedIn && <LoggedInComponents />}
      <Backdrop />
      {!loggedIn && <Navbar />}
      {showLogin && <Login />}
      {showSignup && <SignUp />}
    </div>
  );
}

export default App;
