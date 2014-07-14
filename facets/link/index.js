var path = require('path');
var internals = {};

exports.register = function Link (facet, options, next){

	facet.views({
		engines: { hbs: require('handlebars') },
		path: path.resolve(__dirname, 'templates')
	});

	facet.route([
			{ path: '/', method: 'GET', handler: require('./show-homepage').handler },
			{ path: '/info/{link_id}', method: 'GET', handler: require('./show-link-info').handler},
		 	{ path: '/shorten', method: ['GET','POST'], handler: require('./shorten-link').handler}
	]);
	
	next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};	