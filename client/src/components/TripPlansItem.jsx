import React from "react";
import { Link } from "react-router-dom";

const TripPlansItem = ({ id, title, summary, onDeleteClick }) => {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-10">
          <Link to={`/view-plan/${id}`}>
            <h3>{title}</h3>
          </Link>
          <h5>{summary}</h5>
        </div>
        <div>
          <Link className="col-2" to={`/trip-plans/${id}/edit`}>
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

export default TripPlansItem;
