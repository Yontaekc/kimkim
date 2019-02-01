import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Link to={"/trip-plans"}>Click To View My Trip Plans</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
