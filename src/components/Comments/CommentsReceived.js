import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import CommentsCard from "./CommentsCard";
import classes from "./CommentsReceived.module.css";
import fetchData from "./../HelperFunctions/Fetching";
import { useSelector, useDispatch } from "react-redux";
import { commentsSliceActions } from "./../../store/comments";

const CommentsReceived = () => {
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState([]);
  const loggedInPerson = useSelector((state) => state.auth.loggedInPerson);
  useEffect(() => {
    const fetchingdata = async () => {
      const data = await fetchData("get");
      console.log(data);
      const studentsDataArray = Object.values(data);
      console.log(studentsDataArray);
      const loggedInPersonData = studentsDataArray.find((eachData) => {
        return loggedInPerson === eachData.name;
      });
      console.log(loggedInPersonData);
      if (loggedInPersonData.details) {
        const commentsReceivedDetails = Object.values(
          loggedInPersonData.details
        );
        setFetchedData(commentsReceivedDetails);
        console.log(fetchedData);
        dispatch(commentsSliceActions.addToCommentsStore(fetchedData));
      } else {
        console.log("No comments received");
      }
    };
    fetchingdata();
  }, []);

//   const showCommentsCard = useSelector(
//     (state) => state.comments.showCommentsCard
//   );
  return (
    <React.Fragment>
      <div className={classes["comments-received"]}>
        <h3>Comments Received</h3>

        {fetchedData.map((eachComment, index) => {
          return (
            <Comments
              key={index}
              name={eachComment.commentedPerson}
              firstThingsInput={eachComment.firstThingsInput}
              nicknames={eachComment.nicknames}
              slangsUsed={eachComment.slangsUsed}
            />
          );
        })}

        {/* {showCommentsCard &&
          fetchedData.map((eachComment, index) => {
            return (
              <CommentsCard
                key={index}
                name={eachComment.commentedPerson}
                firstThingsInput={eachComment.firstThingsInput}
                nicknames={eachComment.nicknames}
                slangsUsed={eachComment.slangsUsed}
              />
            );
          })} */}
      </div>
    </React.Fragment>
  );
};

export default CommentsReceived;
