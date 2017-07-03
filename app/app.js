// include main react components
var React = require("react");
var ReactDOM = require("react-dom");

// include main component
var Main = require("./Components/Childrens/Main");
//Grab property associated with Router
var Router = require("react-router");
//Grab the Routes
var routes = require("./config/routes");


// render our main components(main)
ReactDOM.render(<Main />, document.getElementById("app"));
