

$(document).ready(function() {
    function decodeJwt(token) {
    	return JSON.parse(atob(token.split('.')[1]));
    }
    function fillUserProfile(user) {
    	
    	$('#username').text(user.username)
    	$('#firstname').text(user.firstname)
    	$('#lastname').text(user.lastname)
    	$('#email').text(user.email)
    }

    let jwt_token = localStorage.getItem('jwt')
    let userData = decodeJwt(jwt_token);
    fillUserProfile(userData)

})