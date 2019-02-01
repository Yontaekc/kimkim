import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container h-100 d-flex justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="display-7 text-center text-info mb-4">
            My Trip Plan Builder
          </h1>
          <Link to={"/trip-plans"}>
            <div className="btn btn-dark">Click To View My Trip Plans</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
