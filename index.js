var Hapi = require('Hapi');
var Joi = require('Joi');

var server = new Hapi.Server(8080, "localhost");

server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});


var helloConfig = {
	handler : function(req, res){
		var name = req.params.name.split("/");
        res({
        	first : name[0],
        	last : name[1],
        	mood : req.query.mood || "neutral"
        });
	},
	validate : {
		params: {
			name: Joi.string().min(8).max(100)
		},
		query:  {
			mood: Joi.string().valid(["neutral","happy","sad"]).default("neutral")
		}
	}
};

server.route({
    path: "/hello/{name*2}",
    method: "GET",
    config: helloConfig
});