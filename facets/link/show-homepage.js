exports.handler = function(request, reply){
  //Checks for link in database
  reply.view('index', { title: "Harleykwyn", info: "such info"})
};