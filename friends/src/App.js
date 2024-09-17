import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
//import axios from 'axios'
// import {axiosWithAuth} from './utils/axiosWithAuth'

function App() {
  // console.log("Window Object:",window);
  const logout = () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
  };

  return (
    <div className="App" >
    
    <Router>
    <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <Link to="/protected">Friends</Link>}
          </li>
        </ul>

      <Switch>
      <PrivateRoute exact path="/protected" component={FriendsList}/>
        <Route path="/login" component={Login} />
        <Route component={Login} />
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
