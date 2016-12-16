
var Github = function(){

	var url = 'https://api.github.com/users';

	/* ### REMOVE THIS ### */
	var $mainList = 'ul#mainList';

	
	function showUser(userObj){

		/* ### REMOVE THIS ### */
		var html = `
		  <li class="list-group-item" ng-userid="`+userObj.id+`">
			  <div class="col col-xs-3">
			  	<img class="img-circle img-responsive" src="`+userObj.avatar_url+`" />		
			  </div>
			  <div class="col col-xs-9">
			  	<h4 class="gh-heading">`+userObj.login+`</h4>
			  	<p class="gh-url">`+userObj.url+`</p>
			  	<p><button class="btn btn-danger btn-sm float-right removeUser">Remove</button></p>
			  </div>
			  <div class="clearfix"></div>
			</div>
		  </li>
		`;

		$($mainList).hide().append(html).fadeIn();
		return html;
	}



	/* This function will load the users and inject 
	them into the Dom (AJAX) */
	var loadUsers = function(){
		
		/* ### REMOVE THIS ### */
		$.ajax({
		  url: url
		})
		.done(function( data ) {
	
		  	$.each( data, function( key, value ) {
			  	showUser(value)
			});
		});
	};


	/* This function will remove an user from the list */
	var removeUser = function(d){

		/* ### REMOVE THIS ### */
		var $liElement = d.closest('li');
		$($liElement).fadeOut(function() {
		  $(this).remove();
		});
	};




	/* HINT!: You need to find a way to expose loadUsers() method 
	so it´s accessible outside the module */


	/* ### REMOVE THIS ### */
		this.getUsers = loadUsers;
		this.removeUser = function(d){
			removeUser(d);
		};

};

module.exports = Github;


