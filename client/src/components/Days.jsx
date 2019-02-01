import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DaysItem from "./DaysItem.jsx";

class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/days/${this.props.id}/all`)
      .then(res =>
        this.setState({
          days: res.data
        })
      )
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get(`/days/${this.props.id}/all`)
      .then(res =>
        this.setState({
          days: res.data
        })
      )
      .catch(err => console.log(err));
  }

  onDeleteClick(id) {
    axios
      .delete(`/days/${id}`)
      .then(res => console.log(res.data + `${id} deleted`))
      .catch(err => console.log(err));
  }

  render() {
    let dayItem;

    if (this.state.days.length > 0) {
      dayItem = this.state.days.map(day => (
        <DaysItem
          key={day.id}
          tripId={day.trip_plan_id}
          title={day.title}
          description={day.description}
          id={day.id}
          onDeleteClick={this.onDeleteClick}
        />
      ));
    } else {
      dayItem = <h4>You do not have plan for any day</h4>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div />
            <h1 className="display-4 text-center">Days</h1>
            {dayItem}
            <Link to={`/day/${this.props.id}`}>Add Day</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Days;
