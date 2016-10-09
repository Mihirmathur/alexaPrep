var https = require('https');
//var $ = require('jquery');
module.exports = {
	execute: function (intent, session, response) {
  var s = '/'+ (intent.slots.company.value).toString() + '/1237087/display/234';
  //var stock = ('/tools/hackathon/performance?endDate=20160915&identifiers=AAPL&includeReturnsMap=false&startDate=20160915&useCache=true').toString();
  var get_options = { 
  	host:  'immense-basin-63840.herokuapp.com', 
  	port: '443', 
  	path: s,
  	method: 'GET' 
  };
  var get_req = https.request(get_options, function(res) { 
  	res.setEncoding('utf8'); 
  	//console.log(res);
  	console.log(s);
  	var returnData = ""; 
  	res.on('data', function (chunk) { 
  		returnData += chunk; 
  	}); 
  	res.on('end', function () {
  		var d = JSON.parse(returnData);
  		var one_day = d.oneDayChange;
  		var lifetime = d.sinceStartDateChange;
  		console.log(one_day);
  		var text =  "Displaying chart for last thirty days stock price of "+ intent.slots.company.value+ " in browser." ;
  		response.ask(text, "What else can I do?");
  	}); 
   });

  get_req.write("");
   get_req.end();
}


}