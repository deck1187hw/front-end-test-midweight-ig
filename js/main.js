var Github = require('../js/Githubparser');



$(function() {
    
    var parser = new Github;

    $( "#loadUsers" ).on( "click", function() {
	  	parser.getUsers();
	});


	$( "#mainList" ).on( "click", ".removeUser", function() {
	    parser.removeUser(this);
	});

	$( "#clearList" ).on( "click", function() {
	  	parser.clearList();
	});


	/*Github.prototype.countUsers = function(){
		console.log(12);
	}*/


});



