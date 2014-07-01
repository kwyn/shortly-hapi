var Joi = require('Joi');

exports.helloConfig = {
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
}