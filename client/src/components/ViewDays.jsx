import React from "react";

const ViewDays = ({ title, description }) => {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-10">
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default ViewDays;
