import React from "react";
import classes from "./CommentsReceived.module.css";
import Card from "../../resources/Card/Card";
import { useDispatch } from "react-redux";
import { authSliceActions } from "./../../store/auth";

const CommentsCard = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(authSliceActions.auth.closeBackdrop());
    props.setShowCommentCard((prevState) => {
      return !prevState;
    });
  };

  return (
    <Card>
      <div className={classes["comments-card--heading-box"]}>
        <h3 className={classes["comments-card--heading"]}>
          {props.name} commented on your profile
        </h3>

        <button onClick={closeModalHandler}>X</button>
      </div>

      <div className={classes["each-comment"]}>
        <h4 className={classes["comment-que"]}>
          First thing that striked about you
        </h4>
        <h5 className={classes["comment-ans"]}>{props.firstThingsInput}</h5>
      </div>
      <div className={classes["each-comment"]}>
        <h4 className={classes["comment-que"]}>Your nicknames</h4>
        <h5 className={classes["comment-ans"]}>{props.nicknames}</h5>
      </div>
      <div className={classes["each-comment"]}>
        <h4 className={classes["comment-que"]}>Your frequent Slangs</h4>
        <h5 className={classes["comment-ans"]}>{props.slangsUsed}</h5>
      </div>
    </Card>
  );
};

export default CommentsCard;
