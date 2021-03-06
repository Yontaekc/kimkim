import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TripPlansItem from "./TripPlansItem.jsx";

class TripPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/trip/all")
      .then(res =>
        this.setState({
          trips: res.data
        })
      )
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get("/trip/all")
      .then(res =>
        this.setState({
          trips: res.data
        })
      )
      .catch(err => console.log(err));
  }

  onDeleteClick(id) {
    axios
      .delete(`/trip/${id}`)
      .then(res => console.log(res.data + `${id} deleted`))
      .catch(err => console.log(err));
  }

  render() {
    let tripItem;

    if (this.state.trips.length > 0) {
      tripItem = this.state.trips.map(trip => (
        <TripPlansItem
          key={trip.id}
          title={trip.title}
          summary={trip.summary}
          id={trip.id}
          onDeleteClick={this.onDeleteClick}
        />
      ));
    } else {
      tripItem = <h4>No Trip Plans Found</h4>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div />
            <h1 className="display-4 text-center">Trip Plans</h1>
            <Link to={"/trip-plans/new"}>add new trip</Link>
            {tripItem}
          </div>
        </div>
      </div>
    );
  }
}

export default TripPlans;
