exports.handler = function(request, reply){
	//Looks up link from database
	//Pulls linkInfo json
	//renders info into html template
	reply.view('linkInfo', linkInfo);
};
