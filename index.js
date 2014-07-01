var Hapi = require('Hapi');

var server = new Hapi.Server(8080, "localhost");

server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});

server.route({
    path: "/hello/{name*2}",
    method: "GET",
    handler: function(request, reply) {
    		var name = request.params.name.split("/");
        reply({
        	first : name[0],
        	last : name[1],
        	mood : request.query.mood || "neutral"
        });
    }
});