import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Profile from "../Profiles/Profile";
import { useSelector } from "react-redux/es/exports";
import classes from "./LoggedInComponents.module.css";
import CommentsReceived from "../Comments/CommentsReceived";

const LoggedInComponents = (props) => {
  const studentDataArray = useSelector(
    (state) => state.profilesData.studentsData
  );
  console.log(studentDataArray)
  const showProfiles = useSelector((state) => state.profiles.showProfiles);

  return (
    <div>
      <SearchBar />
      <div className={classes["profiles-list"]}>
        {showProfiles &&
          studentDataArray.map((item, index) => {
            return (
              <Profile
                key={index}
                name={item.name}
                department={item.department}
                year={item.year}
                rollno={item.rollno}
                hostel={item.hostel}
              />
              );
            })}
          <CommentsReceived />
      </div>
    </div>
  );
};

export default LoggedInComponents;
