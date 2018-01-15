var server = require('websocket').server, http = require('http');
var axios = require('axios');

var socket = new server({
    httpServer: http.createServer().listen(1337)
});

socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
		
			
 
axios.get('http://s2.netradiofm.com:'+message.utf8Data+'/stats?sid=1&json=1')
  .then(response => {
    console.log(response.data.streamstatus);
    console.log(response.data.streamstatus);
	
 connection.sendUTF('{"id":"'+response.data.servergenre+'","sonando":"'+response.data.songtitle+'","estado":"'+response.data.streamstatus+'","puerto":"'+message.utf8Data+'"}');

	
  })
  .catch(error => {
    console.log(error);


 connection.sendUTF('{"id":"0","sonando":"","estado":"0","puerto":"'+message.utf8Data+'"}');


  });
	
	
	
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });
});
