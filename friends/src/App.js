import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Friends</Link>
      </div>
      <Switch>
        <Route path='/protected' component={Friends}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
