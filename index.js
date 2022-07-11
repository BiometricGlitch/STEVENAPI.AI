var request = require("request")
var http = require('http');
var url = require('url');
var base = 'http://api.brainshop.ai/get?bid=167797&key=Rn2dFsY9A78uIuzE&uid=167797&msg=';
var jsonObject;


http
  .createServer(function (req, res) {
    var queryObject = url.parse(req.url, true).search;

    //If QueryObject is a String
    if(queryObject != null){
      queryString = queryObject.toString().substring(1);
      console.log(queryString)


    // Requests brainshop ai for a response based on the query String
      request(base + queryString, function (error, response, body) {
  if (!error && response.statusCode == 200) {
     jsonObject = JSON.parse(body);
     console.log(jsonObject);

    //Then puts that json response to the body
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(body));
    
    
  }
});
    } else {
      console.log("There was no parameters found")
    }
  })
  .listen(8080);