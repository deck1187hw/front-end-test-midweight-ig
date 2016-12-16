var Github = require('../js/Githubparser');



$(function() {
    
    
	//TODO!
    Github.prototype = {
		  clearList: function(){
		    $( 'ul#mainList li' ).each(function( index ) {
			  $(this).fadeOut(function() {
				  $(this).remove();
				});
			});
		  }
	};

    var parser = new Github;


    $( "#loadUsers" ).on( "click", function() {
	  	parser.getUsers();
	});


	$( "#mainList" ).on( "click", ".removeUser", function() {
	    parser.removeUser(this);
	});


	
	$( "#clearList" ).on( "click", function() {
	  	parser.clearList(this);
	});


});



