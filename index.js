var Hapi = require('Hapi');
var Joi = require('Joi');
var config = require('./config.js');

var bole = require('bole'),
    pretty = require('bistre')(),
    log = bole('server');

bole.output({
  level: 'info',
  stream: pretty
});

pretty.pipe(process.stdout);

var server = new Hapi.Server(8080, "localhost", config.server);


server.route({
  path: '/favicon.ico',
  method: 'GET',
  handler: { file: './favicon.ico' }
});

server.route({
  path: '/static/{path*}',
  method: 'GET',
  handler: {
    directory: {
      path: './static',
      listing: false,
      index: false
    }
  }
});

server.pack.register(
  [{plugin: require('./facets/link')}],
  function(err) {
    if (err) throw err;
    server.start(function() {
        console.log("Hapi server started @ " + server.info.uri);
    });
  });
