import React, { useState, useEffect } from "react";
import CommentsCard from "./CommentsCard";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CommentsReceived.module.css";
import { commentsSliceActions } from "./../../store/comments";
import { authSliceActions } from "./../../store/auth";
import fetchData from "../HelperFunctions/Fetching";

const Comments = (props) => {
  const dispatch = useDispatch();
  //   const loggedInPerson = useSelector((state) => state.auth.loggedInPerson);
  //   const [commentsDataArray, setCommentsDataArray] = useState([]);

  //   useEffect(() => {
  //     const fetchingdata = async () => {
  //       const data = await fetchData("get");
  //       const studentsDataArray = Object.values(data);
  //       const loggedInPersonData = studentsDataArray.find((eachData) => {
  //         return loggedInPerson === eachData.name;
  //       });
  //       if (Object.values(loggedInPersonData.details)) {
  //         const commentsReceivedDetails = Object.values(
  //           loggedInPersonData.details
  //         );
  //         setCommentsDataArray(commentsReceivedDetails);
  //         console.log(commentsDataArray);
  //         dispatch(commentsSliceActions.addToCommentsStore(commentsDataArray));
  //       } else {
  //         console.log("No comments received");
  //       }
  //     };
  //     fetchingdata();
  //   }, []);

  const showCommentsCard = useSelector(
    (state) => state.comments.showCommentsCard
  );
  const commentsCardHandler = () => {
    dispatch(commentsSliceActions.openCommentsCard());
    dispatch(authSliceActions.openBackdrop());
  };
  return (
    <div onClick={commentsCardHandler} className={classes.comments}>
      <h4>{props.name} commented on your profile</h4>
      {/* {showCommentsCard &&
        commentsDataArray.map((eachComment, index) => {
            console.log(eachComment.commentedPerson, eachComment.firstThingsInput)
          return (
            <CommentsCard
            key ={index}
              name={eachComment.commentedPerson}
              firstThingsInput={eachComment.firstThingsInput}
              nicknames={eachComment.nicknames}
              slangsUsed={eachComment.slangsUsed}
            />
          );
        })} */}
      {showCommentsCard && (
        <CommentsCard
          name={props.name}
          firstThingsInput={props.firstThingsInput}
          nicknames={props.nicknames}
          slangsUsed={props.slangsUsed}
        />
      )}
    </div>
  );
};

export default Comments;
