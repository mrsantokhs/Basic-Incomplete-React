import React from "react"
import style from "./Components/App.css"
import Home from "./Views/Home"
import Contact from "./Views/Contact"
import Users from "./Views/Users"
import {Switch,Route,} from "react-router-dom";

function App() {
  
return (
  <Switch>
  <Route path="/users">
    <Users />
  </Route>
  <Route  path="/contact/:id">
    <Contact/>
  </Route>
  <Route  path="/contact">
    <Contact/>
  </Route>
 <Route path="/">
    <Home />
  </Route>
</Switch>

  )};

export default App;
