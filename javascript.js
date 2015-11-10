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

function myOnClickMethod() {
	alert("my on click method fired");
	analytics.track('Contact Me Clicked', {
		plan: "Trial",
		features: "Full Analytics"
	})
	return false;
}