import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img alt={props.alt} src={props.image} className="card-img-top" />
      <div className="card-body">
        <a href={props.website} className="btn btn-primary">
          Go to {props.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
