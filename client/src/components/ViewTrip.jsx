import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ViewDays from "./ViewDays.jsx";

class ViewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripDetail: []
    };
  }

  componentDidMount() {
    axios
      .get(`/view/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          tripDetail: res.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    let dayItem;
    let summary;
    if (this.state.tripDetail.length > 0) {
      dayItem = this.state.tripDetail.map(day => (
        <ViewDays
          key={day.id}
          title={day.title}
          description={day.description}
        />
      ));
    } else {
      dayItem = <h4>Have no plan for any day</h4>;
    }

    if (this.state.tripDetail.length > 0) {
      summary = this.state.tripDetail[0].summary;
    } else {
      summary = "loading";
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div />
            <h1 className="display-7 text-center">Summary</h1>
            <h4 className="text-center">{summary}</h4>

            {dayItem}
          </div>
        </div>
        <Link to={"/trip-plans"}>back to list</Link>
      </div>
    );
  }
}

export default ViewTrip;
