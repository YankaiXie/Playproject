import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyMenu from './components/MyMenu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


var menuItems = [{
  name: "about",
  route: "/about",
  color: "blue",


},
{
  name: "contactus",
  route: "/contactus",
  color: "red",

},
{
  name: "home",
  route: "/",
  color: "black",

}]

function App() {
  return (
    <div className="App">
      <Router>
        <MyMenu menuItems={menuItems} />
        <Switch>
          <Route path="/about" />
          <Route path="/contactus" />
          <Route path="/" />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
