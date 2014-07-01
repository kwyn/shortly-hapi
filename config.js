exports.server  = {
	cache: {
    engine: "catbox-redis",
    options: {
      host: "localhost",
      partition: "MyApp",
      password: "mypassword"
    }
  }
};