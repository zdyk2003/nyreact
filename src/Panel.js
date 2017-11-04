import React from "react";

const Panel = props =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h5>
        {props.heading}
      </h5>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>;

export default Panel;
