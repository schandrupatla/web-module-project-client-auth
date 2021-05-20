import axios from 'axios';
import React,{useState} from 'react';
//import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'


const AddFriend =(props) =>{
    const{setData} = props;

    const [friend, setFriend] = useState({
        name:"",
        age:"",
        email:""
    })

    const handleChange = (e)=>{
        setFriend({
            ...friend, [e.target.name]: e.target.value
        });

    }

const handleSave = (e) =>{
        e.preventDefault();
        const newFriend ={
        name:friend.name,
        age:friend.age,
        email:friend.email
    }
    console.log(newFriend);
    axiosWithAuth()
    .post("/friends", newFriend)
    .then(res=>{
         console.log("res:",res.data);
       // setFriend(res.data);
        setData(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
 

}


    return(
            <>
            <h3>Add New Friend</h3>
            <form onSubmit>
                <label htmlFor="name">Name:
                <input name='name' type='text' value ={friend.name} onChange={handleChange} placeholder="Enter name here"/>
                </label>

                <label htmlFor="age">Age:
                <input name='age' type='text' value={friend.age} onChange={handleChange} placeholder="Enter age here"/>
                </label>

                <label htmlFor="email">Email:
                <input name='email' type='email' value={friend.email} onChange={handleChange} placeholder="Enter email here"/>
                </label>
                <button className="btn" onClick={handleSave}>Save</button>
            </form>
            </>

    )


}
export default AddFriend;