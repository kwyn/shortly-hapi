var Joi = require('joi');
var loginConfig = require('./login');

exports.register = function User(plugin, options, next) {
	console.log(loginConfig);
  plugin.route({
  	path: '/login',
  	method: 'GET',
  	config: loginConfig
	});
	next();
};
 
exports.register.attributes = {
    pkg: require("./package.json")
}