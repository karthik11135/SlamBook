import React from "react";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/auth";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const loginOpenHandler = () => {
    dispatch(authSliceActions.showLoginModal());
    dispatch(authSliceActions.openBackdrop());
  };

  const signupOpenHandler = () => {
    dispatch(authSliceActions.showSignupModal());
    dispatch(authSliceActions.openBackdrop());
  };

  return (
    <nav className={classes.navbar}>
      <h1>SlamBook</h1>
      <div className={classes.navFlex}>
        <div onClick={loginOpenHandler} className={classes.button}>
          Login
        </div>
        <div onClick={signupOpenHandler} className={classes.button}>
          SignUp
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
