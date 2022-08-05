import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../store/auth";
import { profileSliceActions } from "../store/profiles";
import { commentsSliceActions } from './../store/comments';

const Backdrop = () => {
  const dispatch = useDispatch();
  const showBackdrop = useSelector((state) => state.auth.backdropFilter);
  const backdropCloseHandler = () => {
    dispatch(authSliceActions.closeBackdrop());
    dispatch(profileSliceActions.closeCommentsReducer());
    dispatch(commentsSliceActions.closeCommentsCard());
  };
  return (
    <div>
      {showBackdrop && (
        <div onClick={backdropCloseHandler} className="backdrop"></div>
      )}
    </div>
  );
};

export default Backdrop;
