	/* contains the main-container div
	holds main layout and navigation
	holds subcomponenet Search and Saved */

	// Here is the main code!!

	// Require React
	var React = require("react");
	var axios = require("axios");
	var ReactRouter = require("react-router");
	var Router = ReactRouter.Router;
	var Router = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRouter;

	var Searched = require("./Childrens/Searched");
	var Saved = require("./Childrens/Saved");
	// helper function
	var helpers = require("../utils/helpers.js");
	// creating the Main component
		var Main = React.createClass({
		// here we set a generic state associated with the News being searched
		getInitialState: function() {
			return { search_term: "",
				begin_year:"198000801",
				end_year: "20170801",
			}
		},
		// respond to the user input/search
		handleChange: function(event) {
			this.setState({ term: event.target.value });
		},
		// When the user Search News..
		handleSearch: function(event) {
			// prevent the HTML from trying to submit a form if the usr hits "ENTER" instead
			// of clicking the search button
			var newState = {};
			newState[event.target.id] = event.target.value;
			this.setState(newState);
		},
			handleClick: function(){
				helpers.runQuery(this.state.search_term, this.state.begin_year, this.state.end_year)
				.then(function(data){


		this.setState({searched0: data[0][0]});
		this.setState({searched1: data[1][0]});
		this.setState({searched2: data[2][0]});
		this.setState({searched3: data[3][0]});
		this.setState({searched4: data[4][0]});
		this.setState({url1: data[1][1]});
                this.setState({url2: data[2][1]});
                this.setState({url3: data[3][1]});
                this.setState({url4: data[4][1]});

				}.bind(this))
		},
		 // describe this component's render method
		 render: function() {
		 	return (
				<div className="container">
				<div className="row">
				<div className="jumbotron text-center">
		 		<h3 className="panel-title text-center">NewYork Times MERN stack Search App</h3>
		 		</div>

				<br />
				<div className="panel-body text-center">
				<div className="panel-heading">
				<h3 className="panel-title text-center">Search</h3>
                          </div>

		 		<div className="panel-body">
                                        <form>
                                             <div className="form-group">
                                                  <h4 className="text-center"><strong>Topic</strong></h4>


		 	<input
		 		type="text"
				className="form-control text-center"
				id="search_term"
				onChange={this.handleChange}
				required
			/>
                        <br />
                        <h4 className="text-center"><strong>Enter a Start Date (YYYYMMDD)</strong></h4>
                        <input type="text" className="form-control text-center" id="begin_year" onChange= {this.handleChange} required/>
                        <br />
                        <h4 className="text-center"><strong>Enter an End Date (YYYYMMDD)</strong></h4>
                        <input type="text" className="form-control text-center" id="end_year" onChange= {this.handleChange} required/>
                        <br />
                        <button type="button" className="btn btn-primary btn-block text-center" onClick={this.handleClick}>Search</button>
                   </div>
              </form>
              </div>
         </div>
    </div>
				<div>
					<div className="row">
					<Searched searched0={this.state.searched0} searched1={this.state.searched1} searched2={this.state.searched2} searched3={this.state.searched3} searched4={this.state.searched4} url0={this.state.url0} url1={this.state.url1} url2={this.state.url2} url3={this.state.url3} url4={this.state.url4}/>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Main;
