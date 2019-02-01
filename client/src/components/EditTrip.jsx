import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import TextField from "./common/TextField.jsx";
import TextAreaField from "./common/TextAreaField.jsx";
import Days from "./Days.jsx";

class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/trip/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          title: res.data[0].title,
          summary: res.data[0].summary
        })
      )
      .catch(err => console.log(err));
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

    axios
      .put(`/trip/${this.props.match.params.id}`, newTrip)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form className="form-group" onSubmit={this.onSubmit}>
              <h3 className="display-4 text-center">Edit Trip Plan</h3>
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

            <Days id={this.props.match.params.id} />

            <Link to={"/trip-plans"}>back to list</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTrip;
