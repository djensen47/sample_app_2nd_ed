$(document).ready( function(){
	Keen.addEvent("PageView",{page: document.title});
  	$('#new_micropost').submit(function() {
		Keen.addEvent("Microblog",{"post":true});
		console.log('keen post event tracked');
		return;	
	})
	 
	 $('#new_user').submit(function() {
		Keen.addEvent("Signups",{"signup":true});
		console.log('keen event tracked');
		return;	
	})
	
})
   
