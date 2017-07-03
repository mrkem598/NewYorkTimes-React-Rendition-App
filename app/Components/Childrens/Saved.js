// display Saved articles that were searched and stored in the database
var axios = ('require');
// Require react
var React = require("react");

// show recent searches of news
var Saved = React.createClass({
	// this component's render method
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center"> Searched News History</h3>
				</div>
				<div className="panel-body text-center">
				//map function to loop through an array in 	JSX
				{this.props.saved.map(function(search, i) {
					return (
						<p key={i}>{search.news} - {search.date}</p>);
				})}

			</div>
			</div>


			);

	}

});
//export the component
module.exports = Saved;
