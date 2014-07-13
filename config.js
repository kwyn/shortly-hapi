var path = require('path');

exports.server  = {
  views: {
    engines: {
        hbs: "handlebars"
    },
    partialsPath: path.resolve(__dirname, 'hbs-partials'),
    helpersPath: path.resolve(__dirname, 'hbs-helpers')
	}
};