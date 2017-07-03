// Includes the axios package for performing HTTP requests(promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAPI = "7142c7f6b817474981ad8d5105b475d8";

// helper function for making API calls 
var helper = {
// This function serves our purpose of running the query to NYT.
runQuery: function(queryTerm, startYear, endYear) {
	//console.log(news);
	// Figure Oout the news
	var queryURL = "http://api.nytimes.com/svc/search/v1/json?query=" + nytAPI + "&q=" + queryTerm + "&begin_date=" +startYear + "&end_date=" + endYear;
	return axios.get(queryURL).then(function(response) {
		console.log(response);
		var sendThisData = [];
		var doc = response.data.response.docs;
		var returnData = [[],[],[],[],[]];
		for (var i = 0; i < returnData.length; i++) {
			returnData[i].push(doc[i].headline.main);
			returnData[i].push(doc[i].web_url);
			returnData[i].push(doc[i].pub_date);
	};
		return returnData;
	});
}
};

// Export the API helpeś
module.exports = helpers;
