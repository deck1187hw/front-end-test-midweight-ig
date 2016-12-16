var Github = require('../js/Githubparser');



$(function() {
    

	/* ### REMOVE THIS ### */
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
    	/* ### REMOVE THIS ### */
	  	parser.getUsers();
	});


	$( "#mainList" ).on( "click", ".removeUser", function() {
		/* ### REMOVE THIS ### */
	    parser.removeUser(this);
	});

	$( "#clearList" ).on( "click", function() {
		/* ### REMOVE THIS ### */
	  	parser.clearList(this);
	});


});



