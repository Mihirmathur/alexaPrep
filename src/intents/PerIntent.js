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
  var s = '/'+ (intent.slots.company.value).toString();
  var stock = ('/tools/hackathon/performance?endDate=20160915&identifiers=AAPL&includeReturnsMap=false&startDate=20160915&useCache=true').toString();
  var get_options = { 
  	host:  'immense-basin-63840.herokuapp.com', 
  	port: '443', 
  	path: s,
  	method: 'GET' 
  };
  var get_req = https.request(get_options, function(res) { 
  	res.setEncoding('utf8'); 
  	//console.log(res);
  	console.log(stock);
  	var returnData = ""; 
  	res.on('data', function (chunk) { 
  		returnData += chunk; 
  	}); 
  	res.on('end', function () {
  		var one_day = JSON.parse(returnData).oneDayChange;
  		console.log(one_day);
  		var text =  intent.slots.company.value + " is " + one_day +  " per cent up today.";
  		response.ask(text, "What else can I do?");
  	}); 
   });

  get_req.write("");
   get_req.end();
}


}