$(document).ready( function(){
  $('#new_micropost').submit(function() {
		Keen.addEvent("post");
		console.log('keen post event tracked');
		return;	
	})
	 
	 $('#new_user').submit(function() {
		Keen.addEvent("signup");
		console.log('keen event tracked');
		return;	
	})
})
   
