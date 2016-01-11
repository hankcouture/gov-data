var express = require('express');
var app = express();
var requestify = require('requestify');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));


app.get('/data', function(req, res){
	requestify.get('http://api.bls.gov/publicAPI/v1/timeseries/data/LNS14000000')
	  .then(function(response) {
	  	// Get the response body (JSON parsed or jQuery object for XMLs)
	  	var data = response.getBody();
    	res.setHeader('Content-Type', "application/json");
    	res.status(200).send(data);
	  }
	);
});


app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});