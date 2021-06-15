import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const { setData } = props;
  const initialFormValues = {
    name: "",
    age: "",
    email: "",
  }

  const [friend, setFriend] = useState({initialFormValues});

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave =(e) =>{
      e.preventDefault();
      const newFriend ={
          name:friend.name,
          age:friend.age,
          email:friend.email
      }
      console.log(newFriend);
      axiosWithAuth()
      .post('/friends',newFriend)
      .then(res=>{
          setData(res.data)
          setFriend(initialFormValues);
      })
      .catch(err=>{
          console.log(err);
      })

  }

  return (
    <>
      <h3>Add New Friend</h3>
      <form onSubmit={handleSave}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={friend.name}
            onChange={handleChange}
            placeholder="Enter name here"
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            name="age"
            type="text"
            value={friend.age}
            onChange={handleChange}
            placeholder="Enter age here"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            value={friend.email}
            onChange={handleChange}
            placeholder="Enter email here"
          />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};
export default AddFriend;
