import React, { useRef } from "react";
import Button from "../../resources/Button/Button";
import classes from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { profileSliceActions } from "../../store/profiles";
import fetchData from "../HelperFunctions/Fetching";
import { profilesDataActions } from "./../../store/profilesData";
import notificationSlice, {
  notificationSliceActions,
} from "../../store/notification";

const SearchBar = () => {
  const loggedInPerson = useSelector((state) => state.auth.loggedInPerson);
  const dispatch = useDispatch();
  const enteredName = useRef();
  const searchHandler = async () => {
    dispatch(profilesDataActions.removeAllStudents([]));
    dispatch(profileSliceActions.closeProfilesReducer());
    if (loggedInPerson === enteredName.current.value) {
      dispatch(notificationSliceActions.popNotification());
      dispatch(notificationSliceActions.somethingWentWrong());
    } else {
      const data = await fetchData("get");
      const studentsData = Object.values(data);
      const searchedStudentsObject = studentsData.find((data) => {
        return data.name === enteredName.current.value;
      });
      if (searchedStudentsObject) {
        dispatch(profilesDataActions.addNewStudent(searchedStudentsObject));
        dispatch(profileSliceActions.showProfilesReducer());
      } else {
        dispatch(notificationSliceActions.popNotification());
        dispatch(notificationSliceActions.somethingWentWrong());
      }
    }

    enteredName.current.value = "";
  };
  return (
    <div className={classes.searchbox}>
      <input
        ref={enteredName}
        className={classes["name-input-search"]}
        type="text"
        placeholder="Enter a name"
      />
      <Button onClick={searchHandler} className={classes.searchBtn} type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
