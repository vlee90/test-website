var email;

$(document).ready(function() {
	$('#email-form').on("submit", function() {
		var email = $('#email-address').val();
		storeEmail(email);
		return false;
	});
})

$("p").append("HI");

function storeEmail(email) {
	alert("Thank you " + email + " for signing up.");
}