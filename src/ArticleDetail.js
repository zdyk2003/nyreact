import React from "react";

const ArticleDetail = props =>
 <form>
    <div className="form-group">
      <label htmlFor="search">Search Results</label>
        <h5>
          Title: {props.title}
        </h5>
        <h5>
          Date: {props.date}
        </h5>
        <h5>
          Url: {props.url}
        </h5>
    
    <button onClick={props.handleFormSubmit} className="btn btn-primary" id= "saveBtn">
      <i className="fa fa-save"></i>  Save
      </button>
      </div>
      </form>;

export default ArticleDetail;

