var https = require('https');
//var $ = require('jquery');
module.exports = {
	execute: function (intent, session, response) {
		// // var options = {
		// // 	host: "blackrock.com",
		// // 	port: '443',
		// // 	method: 'GET',
		// // 	path: "/tools/hackathon/performance?endDate=20160915&identifiers=AAPL&includeReturnsMap=false&startDate=20160915&useCache=true"
		// // };

		// // var callback = function(res) {
		// // 	res.on('end', function () {
		// // 		var text = res.bmsRequestTime;
		// // 		var cardText = "Alexa has demoed";
		// // 		var heading = "Alexa Portfolio Manager Demo";
		// // 		response.ask(text, heading, cardText);
		// // 	});
		// // }

		// // https.get(options, callback).end();
		// $.ajax({
		// 	url: 'www.blackrock.com/tools/hackathon/performance?endDate=20160915&identifiers=AAPL&includeReturnsMap=false&startDate=20160915&useCache=true',
		// 	success: function(data){
		// 		pop = JSON.parse(data).bmsRequestTime;
		// 		response.tellWithCard(pop, "Hi", "Hello");
  //           //process the JSON data etc
  //       }
  //   });

  var get_options = { 
  	host:  'www.blackrock.com', 
  	port: '443', 
  	path: '/tools/hackathon/performance?endDate=20160915&identifiers=AAPL&includeReturnsMap=false&startDate=20160915&useCache=true', 
  	method: 'GET' 
  };
  var get_req = https.request(get_options, function(res) { 
  	res.setEncoding('utf8'); 
  	console.log(res);
  	var returnData = ""; 
  	res.on('data', function (chunk) { 
  		returnData += chunk; 
  	}); 
  	res.on('end', function () {
  
  		response.tellWithCard(JSON.parse(returnData).bmsRequestTime, "Hi", "How");
  	}); 
   });

  get_req.write("");
   get_req.end();
}


}