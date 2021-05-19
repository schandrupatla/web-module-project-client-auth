import axios from 'axios';
import React,{useState, useEffect} from 'react';
 import {axiosWithAuth} from './../utils/axiosWithAuth'
 import Friend from './../components/Friend'
//import axios from 'axios'

const FriendsList =()=>{

    const [friends, setFriends]=useState(null);

    const getData =() =>{
        console.log("I am here")
        axiosWithAuth()
      .get('/friends')
    //  axios.get('http://localhost:5000/api/friends')
      .then(res=>{
        //console.log(res.data);
        setFriends(res.data)
         console.log("State:",friends);

      })
      .catch(err=> {
        console.log(err);
      })
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
          <div className="FriendsList">
      <header className="App-header">
        <h3>Welcome to Sridevi Friend's List Page</h3>
        <div className="friends-list">
           {/* { friends.map(friend=>{return <Friend key={friends.id} name={friends.name} age={friends.age}/>} )} */}
           { friends && friends.map(friend=>{return <Friend key={friend.id} friend={friend}/>} )}
        </div>
      </header>
    </div>
    )
}

export default FriendsList;