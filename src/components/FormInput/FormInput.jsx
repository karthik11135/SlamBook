import React, { useRef} from "react";
import Button from "../../resources/Button/Button";
import classes from "./FormInput.module.css";
import Card from "../../resources/Card/Card";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/auth";
import { notificationSliceActions } from "../../store/notification";
import fetchData from "../HelperFunctions/Fetching";

const FormInput = (props) => {
  const dispatch = useDispatch();
  const name = useRef();
  const rollno = useRef();
  const hostel = useRef();
  const year = useRef();
  const email = useRef();
  const dept = useRef();
  const password = useRef();

  const formClass = props.additionalInfo
    ? `${classes["form"]} ${classes["sign-up-form"]}`
    : `${classes["form"]}`;

  const formInputSubmissionHandler = async (e) => {
    e.preventDefault();
    if (props.additionalInfo) {
      const studentDataObj = {
        name: name.current.value,
        department: dept.current.value,
        rollno: rollno.current.value,
        hostel: hostel.current.value,
        year: year.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      dispatch(authSliceActions.closeSignupModal());
      dispatch(authSliceActions.closeBackdrop());
      const data = await fetchData("get");
      const studentsDataFetched = Object.values(data);

      function correctInputs(obj) {
        const dataExists = studentsDataFetched.some((eachData) => {
          return (
            eachData.email === studentDataObj.email ||
            eachData.name.toLowerCase().trim() ===
              studentDataObj.name.toLowerCase().trim()
          );
        });

        const crctEmail = obj.email !== "" && obj.email.includes("@gmail.com");
        const crctPassword = obj.password.length > 4;
        const crctNameRollDeptYear =
          obj.name !== "" &&
          obj.rollno !== "" &&
          obj.department !== "" &&
          obj.year !== "";

        if (!dataExists && crctEmail && crctPassword && crctNameRollDeptYear) {
          fetchData("post", studentDataObj);
          dispatch(notificationSliceActions.popNotification());
          dispatch(notificationSliceActions.signupSuccess());
        } else {
          if (dataExists) {
            dispatch(notificationSliceActions.popNotification());
            dispatch(notificationSliceActions.signupFail());
          } else {
            dispatch(notificationSliceActions.popNotification());
            dispatch(notificationSliceActions.somethingWentWrong());
          }
        }
      }

      correctInputs(studentDataObj);
    } else {
      const data = await fetchData("get");
      const studentsDataFetched = Object.values(data);
      let studentsAuthDetails = [];

      studentsDataFetched.forEach((eachData) => {
        studentsAuthDetails.push({
          name: eachData.name,
          email: eachData.email,
          password: eachData.password,
        });
      });

      const loggedInAuthDetails = studentsAuthDetails.find((eachDetail) => {
        return eachDetail.email === email.current.value;
      });

      if (!loggedInAuthDetails) {
        dispatch(notificationSliceActions.popNotification());
        dispatch(notificationSliceActions.noUserFound());
        return;
      } else {
        if (loggedInAuthDetails?.password !== password.current.value) {
          dispatch(notificationSliceActions.popNotification());
          dispatch(notificationSliceActions.wrongPassword());
        }
        if (loggedInAuthDetails.password === password.current.value) {
          dispatch(notificationSliceActions.popNotification());
          dispatch(notificationSliceActions.loginSuccess());
          const loggedInPerson = studentsAuthDetails.find((eachDetail) => {
            return eachDetail.email === email.current.value;
          }).name;
          dispatch(authSliceActions.loggedInName(loggedInPerson));
          dispatch(authSliceActions.closeBackdrop());
          dispatch(authSliceActions.onLogin());
        }
      }

      dispatch(authSliceActions.closeBackdrop());
      dispatch(authSliceActions.closeLoginModal());
    }
  };

  return (
    <Card className={formClass}>
      <form onSubmit={formInputSubmissionHandler}>
        <h1 className={classes["form-title"]}>{props.title}</h1>
        <div className={classes["inputs-grid"]}>
          {props.additionalInfo && <label htmlFor="Name">Name</label>}
          {props.additionalInfo && (
            <input ref={name} type="text" name="name" id="Name" />
          )}
          {props.additionalInfo && <label htmlFor="roll-no">Roll No</label>}
          {props.additionalInfo && (
            <input ref={rollno} type="number" name="roll-no" id="roll-no" />
          )}
          {props.additionalInfo && <label htmlFor="Hostel">Hostel</label>}
          {props.additionalInfo && (
            <input ref={hostel} list="hostels" id="Hostel" />
          )}
          <datalist id="hostels">
            <option value="ZirconA" />
            <option value="ZirconB" />
          </datalist>

          {props.additionalInfo && <label htmlFor="Dept">Department</label>}
          {props.additionalInfo && <input ref={dept} type="text" id="Dept" />}

          {props.additionalInfo && <label htmlFor="Year">Year</label>}
          {props.additionalInfo && <input ref={year} type="text" id="Year" />}

          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input ref={email} id="email" type="text" />

          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" />
        </div>

        <Button>Submit</Button>
      </form>
    </Card>
  );
};

export default FormInput;
