import React from "react";

const Saved = props =>
 <form>
    <div className="form-group">
      <label htmlFor="search">Saved Articles</label>
        <h5>
          Title: {props.title}
        </h5>
        <h5>
          Date: {props.date}
        </h5>
        <h5>
          Url: {props.url}
        </h5>
    </div>
    <button onClick={props.handleFormSubmit} className="btn btn-primary" id= "deleteBtn">
      <i className="fa fa-trash"></i>  Delete
      </button>
  </form>;

export default Saved;