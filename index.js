var Hapi = require('Hapi');
var Joi = require('Joi');
var config = require('./config.js');

var server = new Hapi.Server(8080, "localhost", config.server);
server.start(function() {
    console.log("Hapi server started @", server.info.uri);
});

server.method("getColour", function(name, next){
	var colours = ["red", "blue", "indigo", "violet", "green"];
  var colour = colours[Math.floor(Math.random() * colours.length)];
  next(null, colour);
},{
	cache : {
		expiresIn: 30000
	}
});

var helloConfig = {
	handler : function(req, res){
		var name = req.params.name.split("/");
			server.methods.getColour(req.params.name, function(err, colour){
	      res.view("hello", {
			    first: name[0],
			    last: name[1],
			    mood: req.query.mood,
			    age: req.query.age,
			    colour: colour
				});
			})
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
