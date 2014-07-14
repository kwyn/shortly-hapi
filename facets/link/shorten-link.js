exports.handler = function(request, reply){
  //Checks for link in database
  console.log(request);
  console.log(reply.redirect);
  reply.redirect('/');
};