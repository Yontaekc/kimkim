import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import TripPlans from "./components/TripPlans.jsx";
import TripPlanDetails from "./components/TripPlanDetails.jsx";
import EditTrip from "./components/EditTrip.jsx";
import EditDay from "./components/EditDay.jsx";
import DayDetails from "./components/DayDetails.jsx";
import ViewTrip from "./components/ViewTrip.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/trip-plans" component={TripPlans} />
            <Route exact path="/trip-plans/new" component={TripPlanDetails} />
            <Route exact path="/trip-plans/:id/edit" component={EditTrip} />
            <Route exact path="/day/:id" component={DayDetails} />
            <Route exact path="/day/:id/edit" component={EditDay} />
            <Route exact path="/view-plan/:id" component={ViewTrip} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
