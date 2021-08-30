import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddJob from "./components/DashBoard/AddJob/AddJob";
import OrderService from "./components/DashBoard/OrderService/OrderService";
import NavBar from "./components/Home/Header/NavBar/NavBar";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addJob">
            <AddJob></AddJob>
          </Route>
          <Route path='/orderService'>
            <OrderService></OrderService>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
