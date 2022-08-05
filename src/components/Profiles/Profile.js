import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../resources/Button/Button";
import CommentProfile from "./CommentProfile";
import classes from "./Profiles.module.css";
import { authSliceActions } from "../../store/auth";
import { profileSliceActions } from "../../store/profiles";

const Profile = (props) => {
  const dispatch = useDispatch();
  const showComments = useSelector((state) => state.profiles.showComments);

  const showCommentsHandler = (event) => {
    event.preventDefault();
    dispatch(profileSliceActions.showCommentsReducer());
    dispatch(authSliceActions.openBackdrop());
  };
  return (
    <div onClick={props.onClick} className={classes.profile}>
      <div className={classes["profile-flex"]}>
        <h1 className={classes["profile-name"]}>{props.name}</h1>
        <h2 className={classes["dept"]}>{props.department}</h2>
        <h2 className={classes["profile-year"]}>{props.year}</h2>
        <h3 className={classes["profile-hostel"]}>{props.hostel}</h3>
        <h3 className={classes["profile-rollno"]}>{props.rollno}</h3>
      </div>
      <Button className={classes.commentBtn} onClick={showCommentsHandler}>Comment</Button>
      {showComments && <CommentProfile h='heythere' name={props.name}/>}
    </div>
  );
};

export default Profile;
