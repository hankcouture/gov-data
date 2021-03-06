var express = require('express');
var app = express();
var requestify = require('requestify');
var tokens = require('./tokens')

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


app.get('/unemploymentData', function(req, res){
	console.log(req)
	requestify.post('http://api.bls.gov/publicAPI/v2/timeseries/data/', {
		seriesid: ["LNS14000000"],
		registrationKey: tokens.gov.key
	})
	  .then(function(response) {
	  	// Get the response body (JSON parsed or jQuery object for XMLs)
	  	var data = response.getBody();
	  	var good = JSON.parse(response.getBody());
	  	var result = good.Results.series[0];
	  	var obj = {}
	  	obj.labelsArr = [];
	  	obj.dataArr = [];
	  	for (var i = 0; i < result.data.length; i++) {
	  		obj.labelsArr.push(result.data[i].periodName + ' ' + result.data[i].year)
	  		obj.dataArr.push(result.data[i].value)
	  	}
	  	obj.labelsArr.reverse();
	  	obj.dataArr.reverse();
    	res.setHeader('Content-Type', "application/json");
    	res.status(200).send(obj);
	  }
	);
});

app.get('/hoursData', function(req, res){
	console.log(req)
	requestify.post('http://api.bls.gov/publicAPI/v2/timeseries/data/', {
		seriesid: ["CES0500000002"],
		registrationKey: tokens.gov.key
	})
	  .then(function(response) {
	  	// Get the response body (JSON parsed or jQuery object for XMLs)
	  	var data = response.getBody();
	  	var good = JSON.parse(response.getBody());
	  	var result = good.Results.series[0];
	  	var obj = {}
	  	obj.labelsArr = [];
	  	obj.dataArr = [];
	  	for (var i = 0; i < result.data.length; i++) {
	  		obj.labelsArr.push(result.data[i].periodName + ' ' + result.data[i].year)
	  		obj.dataArr.push(result.data[i].value)
	  	}
	  	obj.labelsArr.reverse();
	  	obj.dataArr.reverse();
    	res.setHeader('Content-Type', "application/json");
    	res.status(200).send(obj);
	  }
	);
});

app.get('/wagesData', function(req, res){
	console.log(req)
	requestify.post('http://api.bls.gov/publicAPI/v2/timeseries/data/', {
		seriesid: ["CES0500000003"],
		registrationKey: tokens.gov.key
	})
	  .then(function(response) {
	  	// Get the response body (JSON parsed or jQuery object for XMLs)
	  	var data = response.getBody();
	  	var good = JSON.parse(response.getBody());
	  	var result = good.Results.series[0];
	  	var obj = {}
	  	obj.labelsArr = [];
	  	obj.dataArr = [];
	  	for (var i = 0; i < result.data.length; i++) {
	  		obj.labelsArr.push(result.data[i].periodName + ' ' + result.data[i].year)
	  		obj.dataArr.push(result.data[i].value)
	  	}
	  	obj.labelsArr.reverse();
	  	obj.dataArr.reverse();
    	res.setHeader('Content-Type', "application/json");
    	res.status(200).send(obj);
	  }
	);
});


app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});