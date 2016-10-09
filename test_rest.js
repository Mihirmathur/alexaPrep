var https = require('https');
var stock = 'aapl';
  var get_options = { 
    host:  'www.blackrock.com', 
    port: '443', 
    path: '/tools/hackathon/performance?endDate=20160915&identifiers='+stock.toString().toUpperCase()+'&includeReturnsMap=false&startDate=20160915&useCache=true', 
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
                console.log("hello");
                console.log(JSON.parse(returnData).resultMap.RETURNS);
                console.log(JSON.parse(returnData).resultMap.RETURNS[0].latestPerf.oneDay*100);
            }); 
         });

get_req.write("");
 get_req.end();


// console.log("test begin");

// var post_data =
// {
//     "usstate":
//     "Maine"
// };

// var post_options = {
//     host:  'rmwum5l4zc.execute-api.us-east-1.amazonaws.com',
//     port: '443',
//     path: '/prod/stateresource',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(JSON.stringify(post_data))
//     }
// };

// var post_req = https.request(post_options, function(res) {
//     res.setEncoding('utf8');
//     var returnData = "";
//     res.on('data', function (chunk) {
//         returnData += chunk;
//     });
//     res.on('end', function () {
//         console.log('returnData: ' + returnData);

//         console.log(JSON.parse(returnData).attributes[0].population);

//     });

// });

// post_req.write(JSON.stringify(post_data));
// post_req.end();
