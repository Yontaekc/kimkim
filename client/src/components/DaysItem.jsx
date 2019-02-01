import React from "react";
import { Link } from "react-router-dom";

const DaysItem = ({ id, title, description, onDeleteClick }) => {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-10">
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
        <div>
          <Link className="col-2" to={`/day/${id}/edit`}>
            edit
          </Link>
          <button
            type="button"
            onClick={() => onDeleteClick(id)}
            className="btn btn-danger mr-1"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaysItem;
