import React, { useRef} from "react";
import classes from "./Profiles.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../resources/Card/Card";
import Button from "../../resources/Button/Button";
import fetchData from "../HelperFunctions/Fetching";
import { profileSliceActions } from "./../../store/profiles";
import { authSliceActions } from "../../store/auth";

const CommentProfile = (props) => {
  const dispatch = useDispatch();
  const loggedInPerson = useSelector((state) => state.auth.loggedInPerson);
  const firstThingsInput = useRef();
  const nicknames = useRef();
  const slangsUsed = useRef();

  const submitCommentsHandler = async (event) => {
    event.preventDefault();

    const commentedData = {
      commentedPerson: loggedInPerson,
      firstThingsInput: firstThingsInput.current.value,
      nicknames: nicknames.current.value,
      slangsUsed: slangsUsed.current.value,
    };
    const data = await fetchData("get");

    let commentReceiverKey;
    for (const [key, value] of Object.entries(data)) {
      console.log(key, value);
      if (value.name == props.name) {
        commentReceiverKey = key;
      }
    }

    const studentsDataArray = Object.values(data);
    const commentReceiver = studentsDataArray.find((eachPerson) => {
      return eachPerson.name === props.name;
    });
    commentReceiver.details = commentedData;
    const response = await fetch(
      `https://delta-task-default-rtdb.firebaseio.com/studentsData/${commentReceiverKey}/details.json`,
      {
        method: "POST",
        body: JSON.stringify(commentedData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    dispatch(profileSliceActions.closeCommentsReducer());
    dispatch(authSliceActions.closeBackdrop());
  };

  return (
    <Card className={classes["comment-card"]}>
      <form onSubmit={submitCommentsHandler}>
        <h2 className={classes.commentHead}>Write about {props.name}</h2>
        <div className={classes["comments-box"]}>
          <h2 className={classes["comment-heading"]}>
            First thing that strikes you
          </h2>
          <input
            ref={firstThingsInput}
            className={classes["input-big"]}
            type="text"
          />
        </div>

        <div className={classes["comments-box"]}>
          <h2 className={classes["comment-heading"]}>Nicknames</h2>
          <input
            ref={nicknames}
            className={classes["input-small"]}
            type="text"
          />
        </div>

        <div className={classes["comments-box"]}>
          <h2 className={classes["comment-heading"]}>Frequently used slangs</h2>
          <input
            ref={slangsUsed}
            className={classes["input-small"]}
            type="text"
          />
        </div>

        <Button className={classes.submit} type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CommentProfile;
