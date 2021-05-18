import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList'

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h3>Welcome to Sridevi page</h3>
    //   </header>
    // </div>
    <Router>
      <Route exact path="/protected" component={FriendsList}/>
      <Route path="/login" component={Login} />
      <Route component={Login} />
    </Router>
  );
}

export default App;
