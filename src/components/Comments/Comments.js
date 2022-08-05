import React, { useState } from "react";
import CommentsCard from "./CommentsCard";
import classes from "./CommentsReceived.module.css";


const Comments = (props) => {
  const [showCommentCard, setShowCommentCard] = useState(false);

  const commentsCardHandler = () => {
    setShowCommentCard((prevState) => {
      return !prevState;
    });
  };

  return (
    <div onClick={commentsCardHandler} className={classes.comments}>
      <h4>{props.name} commented on your profile</h4>

      {showCommentCard && (
        <CommentsCard
          setShowCommentCard={setShowCommentCard}
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
