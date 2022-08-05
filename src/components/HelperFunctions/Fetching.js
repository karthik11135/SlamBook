const fetchData = async (reqType, data) => {
  if (reqType === "post") {
    const response = await fetch(
      "https://delta-task-default-rtdb.firebaseio.com/studentsData.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  } 
  if(reqType === 'get') {
    const responseLoginIn = await fetch(
      "https://delta-task-default-rtdb.firebaseio.com/studentsData.json"
    );
    const data = await responseLoginIn.json();

    return data;
  }
  
  return data;
};

export default fetchData;
