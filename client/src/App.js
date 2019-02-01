import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.jsx";
import TripPlans from "./components/TripPlans.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/trip-plans" component={TripPlans} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
