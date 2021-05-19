
import React from 'react';

const Friend =(props)=>{
     const {friend} = props;

    return (
          <div className="Friend">
      <header className="App-header">
        <h1>Welcome to Sridevi's friend's page</h1>
        <div className="card">
        <h3>Name={friend.name}</h3>
        <h3>Age={friend.age}</h3>
        <h3>Email={friend.email}</h3>
        </div>
        
      </header>
    </div>
    )
}

export default Friend;