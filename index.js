var Hapi = require('Hapi');
var Joi = require('Joi');
var config = require('./config.js');

var server = new Hapi.Server(8080, "localhost", config.server);

server.route({
  path: '/favicon.ico',
  method: 'GET',
  handler: { file: './favicon.ico' }
});

server.route({
  path: '/',
  method: 'GET',
  handler: function(req, res){
  	res({'home page': "OK"});
  }
});
server.pack.require({
	'./facets/user': null
}, function(err) {
    if (err) throw err;
    //middle wear setup?
    server.start(function() {
        console.log("Hapi server started @ " + server.info.uri);
    });
});
