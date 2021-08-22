import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/Home/Header/NavBar/NavBar";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        
        <Switch>
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
