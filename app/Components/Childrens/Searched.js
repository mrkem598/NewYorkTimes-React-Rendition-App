// Quiries the NYT API for articles
// Displays API search results from results component
// Gives user ability to save an article to their Saved Articles.
// Include React
var React = require("react");
var axios = require("axios");
var Searched = require("./Searched");
// Creating the searched component
var Searched = React.createClass({
  getInitialState: function(){
    return {
      title: "",
      url: ""
    }
  },
  aearchedArticle: function(event){
    var theurl = event.currentTarget.dataset.url
    var thetitle = event.currentTarget.dataset.title
    this.setState({title: thetitle});
    this.setState({url: theurl});
    axios.post('/api', {title: thetitle, url: theurl})
         .then(function(searched){
              console.log("Posted to MongoDB");
         })
         axios.get('/api')
        .then(function(searched){
            console.log("secretword" + JSON.stringify(searched));
           this.setState({title0: searched.data[0].title});
           this.setState({url0: searched.data[0].url});
           this.setState({date0: searched.data[0].date});
           this.setState({title1: searched.data[1].title});
           this.setState({url1: searched.data[1].url});
           this.setState({date1: searched.data[1].date});
           this.setState({title2: searched.data[2].title});
           this.setState({url2: searched.data[2].url});
           this.setState({date2: searched.data[2].date});
           this.setState({title3: searched.data[3].title});
           this.setState({url3: searched.data[3].url});
           this.setState({date3: searched.data[3].date});
           this.setState({title4: searched.data[4].title});
           this.setState({url4: searched.data[4].url});
           this.setState({url5: searched.data[4].date});
      }.bind(this))
	},
	// Here we render the function
	render: function(){

		return(

                    <div className="col-lg-12">
          			<div className="panel panel-default">
          				<div className="panel-heading">
          					<h3 className="panel-title text-center">Searched</h3>
          				</div>
          				<div className="panel-body text-left">
          						<h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url0} data-title={this.props.searched0}>Save</button><a style={articleStyle} href={this.props.url0} target="_blank" >{this.props.searched0}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url1} data-title={this.props.searched1}>Save</button><a style={articleStyle} href={this.props.url1} target="_blank" >{this.props.searched1}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url2} data-title={this.props.searched}>Save</button><a style={articleStyle} href={this.props.url2} target="_blank" >{this.props.searched2}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url3} data-title={this.props.searched3}>Save</button><a style={articleStyle}>{this.props.searched3}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url4} data-title={this.props.searched4}>Save</button><a style={articleStyle} href={this.props.url4} target="_blank" >{this.props.searched4}</a></h4>
          						{/* <p>{this.props.address}</p> */}

          				</div>
          			</div>

                    <div className="row">

                         {/*Added this.props.children to dump all of the child components into place*/}
                         <Searched title0={this.state.title0} url0={this.state.url0} date0={this.state.date0} title1={this.state.title1} url1={this.state.url1} date1={this.state.date1} title2={this.state.title2} url2={this.state.url2} date2={this.state.date2} title3={this.state.title3} url3={this.state.url3} date3={this.state.date3} title4={this.state.title4} url4={this.state.url4} date4={this.state.date4}/>

                    </div>
               </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Searched;
