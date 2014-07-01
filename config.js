exports.server  = {
	cache: {
    engine: "catbox-redis",
    options: {
      host: "localhost",
      partition: "MyApp",
      password: "mypassword"
    }
  },
  views: {
    engines: {
        hbs: "handlebars"
    },
    path: "./views"
	}
};