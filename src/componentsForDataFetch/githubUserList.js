import { useState, useEffect } from "react";
import GithubUser from "./githubUser";

const GithubUserList = () => {
  // initialise view with default 
  let [data, setData] = useState([]);
  let getData = () => {
    fetch(`https://api.github.com/users`)
    .then((response) => response.json())
    .then(setData)
  }

  // useffect is the combination of componentdidmount/willunmount etc
  // and guaranteed to run _after_ render
  useEffect(() => {
    getData()
    // used to show that usestate runs after every state change when second
    // param is NOT empty array or is not passed
    // console.log(new Date().toString())
  },[])

  if (data) {
    return (
      <ul>
        {data.map((user) => (
          <GithubUser key={user.id} user={user}/>
        ))
        }
      </ul>
    )
  } else {
    return <p> No users </p>
  }

}

export default GithubUserList;