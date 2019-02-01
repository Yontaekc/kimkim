import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TextField from "./common/TextField.jsx";
import TextAreaField from "./common/TextAreaField.jsx";

class DayDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
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
    const newDay = {
      title: this.state.title,
      description: this.state.description
    };

    axios
      .post(`/days/${this.props.match.params.id}`, newDay)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.setState({
      title: "",
      description: ""
    });
  }

  render() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form className="form-group" onSubmit={this.onSubmit}>
              <div className="card-header text-center">Day Title</div>
              <TextField
                placeholder="Day Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                type="text"
              />

              <div className="card-header text-center">description</div>
              <TextAreaField
                placeholder="description"
                name="description"
                value={this.state.description}
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

export default DayDetails;
