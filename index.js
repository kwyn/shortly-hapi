var Hapi = require('Hapi');

var server = new Hapi.Server(8080, "localhost");

server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});

server.route({
    path: "/",
    method: "GET",
    handler: function(request, reply) {
        reply("Hello, world!");
    }
});