var Hapi = require('Hapi');
var config = require('./config.js')

var server = new Hapi.Server(8080, "localhost");
server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});



server.route({
    path: "/hello/{name*2}",
    method: "GET",
    config: config.helloConfig
});