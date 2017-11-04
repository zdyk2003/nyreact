import React, { Component } from 'react';
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import Saved from "./Saved";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./API";

class Main extends Component {
	state={
		articles: [],
		// articleSearch: ""
	};

	searchArticles = query => {
		API.search(query)
      .then(res => 
      	
      	this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };
	

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.searchArticles(this.state.search);
     };

	render() {
		return (
		  <Container>
		    <Jumbotron />
		      <Row>
		        <Col size="sm-12">
		          <Panel>
		            <Search 
		             	value={this.state.search}
                 		handleInputChange={this.handleInputChange}
                 		handleFormSubmit={this.handleFormSubmit}
		            />
		          </Panel>
		        </Col>
		      </Row>
		      <Row>
		        <Col size="sm-6">
		          <Panel heading = "Results">	            	
	            	{this.state.articles.Title
                		? <ArticleDetail  			                  
		                  title={this.state.articles.title}
		                  date={this.state.articles.date}
		                  url={this.state.articles.url}
		                />
		            	: <h5>No Articles to Display</h5>}     	 
		          </Panel>
		        </Col>
		        <Col size="sm-6">
		          <Panel heading = "Saved">
		            {this.state.articles.Title
                		? <Saved  			                  
		                  title={this.state.articles.title}
		                  date={this.state.articles.date}
		                  url={this.state.articles.url}
		                />
		            	: <h5>No Articles to Display</h5>}
		          </Panel>
		        </Col>
		      </Row>
		  </Container>
		);
	}


};

export default Main;