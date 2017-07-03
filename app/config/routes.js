// include main react components
var React = require("react");
var ReactDOM = require("react-dom");

// include main component
var Main = require("../Components/Main");
//Grab property associated with Router
var Router = require("react-router").Router



// render our main components(main)
ReactDOM.render(<Main />, document.getElementById("app"));
