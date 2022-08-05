import React from "react";
import classes from "./Notification.module.css";
import { useDispatch, useSelector } from "react-redux";
import { notificationSliceActions } from "../../store/notification";

const Notification = () => {
  const text = useSelector((state) => state.notifications.text);
  const status = useSelector((state) => state.notifications.status);
  const dispatch = useDispatch();
  

  return (
    <div className={`${classes.notification} ${classes[status]}`}>
      <h3 >{text}</h3>
      <button
        onClick={() => dispatch(notificationSliceActions.closeNotification())}
        className={classes.button}
      >
        Ok
      </button>
    </div>
  );
};

export default Notification;
