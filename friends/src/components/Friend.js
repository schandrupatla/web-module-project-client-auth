import React from 'react';
import {axiosWithAuth} from './../utils/axiosWithAuth'

const Friend =(props)=>{
     const {friend, setFriends} = props;

     const handleDelete = (id)=>{
         console.log("Delete:Friend-id:",id);
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(resp=>{
            console.log("Delete Resp:", resp.data);
            setFriends(resp.data);
        })
     }

    return (
    <div className="Friend">
        <div className="card">
        <h3>Id: {friend.id}</h3>
        <h3>Name: {friend.name}</h3>
        <h4>Age: {friend.age}</h4>
        <h5>Email: {friend.email}</h5>
        <button onClick={()=>{handleDelete(friend.id)}}>Delete</button>
        <h5>----------------</h5>
        </div>
        
    </div>
    )
}

export default Friend;