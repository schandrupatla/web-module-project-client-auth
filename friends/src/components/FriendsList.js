import axios from "axios";
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import Friend from './../components/Friend'
import AddFriend from './AddFriend';

const FriendsList = () => {
  const [friends, setFriends] = useState(null);
  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      // axios.get('http://localhost:5000/api/friends')
      .then((res) => {
        console.log("Friends Data:", res.data);
        setFriends(res.data);
        console.log("State:", friends);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // const HandleAddFriend = () =>{
  //   this.props.history.push('AddFriends');
  // }

  return (
    <div className="FriendsList">
      <header className="App-header">
        <h3>Welcome to Sridevi Friend's List Page</h3>
        {/* <button onClick={HandleAddFriend}>Add Friend</button> */}
        <div>
            <AddFriend setData={setFriends}/>
        </div>
        <div className="friends-list">
         { friends && friends.map(friend=>{return <Friend key={friend.id} friend={friend} setFriends={setFriends}/>})}

        </div>
      </header>
    </div>
  );
};
export default FriendsList;
