
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendsList from './components/FriendsList'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'

function App() {

  const logout = () =>{
    localStorage.removeItem("token");
    window.location.href="/login";

  }
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to ="/login">Login</Link>
          </li>
          <li>
            <Link onClick ={logout}>Logout</Link>
            {/* <button onClick={logout}>Logout</button> */}
          </li>
          <li>
            <Link to ="/friends">Friends</Link>
          </li>
        </ul>

        <Switch>
      <PrivateRoute exact path="/friends" component={FriendsList}/>
        <Route path="/login" component={Login} />
        <Route component={Login} />
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
