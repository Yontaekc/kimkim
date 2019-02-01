import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TextField from "./common/TextField.jsx";
import TextAreaField from "./common/TextAreaField.jsx";

class TripPlanDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newTrip = {
      title: this.state.title,
      summary: this.state.summary
    };
    console.log(newTrip);
    axios
      .post("/trip", newTrip)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({
      title: "",
      summary: ""
    });
  }

  render() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form className="form-group" onSubmit={this.onSubmit}>
              <div className="card-header text-center">Title</div>
              <TextField
                placeholder="Trip Name"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                type="text"
              />

              <div className="card-header text-center">Summary</div>
              <TextAreaField
                placeholder="Summary"
                name="summary"
                value={this.state.summary}
                onChange={this.onChange}
              />

              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>

            <Link to={"/trip-plans"}>back to list</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TripPlanDetails;
