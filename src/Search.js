import React from "react";

const Search = props =>
  <form>
    <div className="form-group">
      <label htmlFor="search">Enter Article Subject</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="articleSearch"
        type="text"
        className="form-control"
        placeholder=""
        id="search"
      />
    </div>
    
    <div>  
      <label htmlFor="search">Number of Records to Retrieve</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder=""
        id="number"
      />
    </div>  
    <br />
    <div>  
      <label htmlFor="search">Start Date (optional)</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder=""
        id="startDate"
      />
    </div>
    <br />
    <div>  
      <label htmlFor="search">End Date (optional)</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder=""
        id="endDate"
      />
    </div>  
    <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary" id="submitBtn">
      <i className="fa fa-search"></i>  Search
      </button>
      {" "}
      <button onClick={props.handleFormSubmit} type="button" className="btn btn-primary" id="deleteBtn">
      <i className="fa fa-trash"></i> Clear Results</button>
  </form>;

export default Search;