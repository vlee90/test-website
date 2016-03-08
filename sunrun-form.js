(function() {
	//Get all form field IDs
	var formFields = ['#zipcode', '#Bill', '#ziptoolStreet', '#FirstName', '#LastName', '#Email', '#Phone', '#PostalCode', '#Average_Monthly_Electric_Bill__c', '#Referral_web_form__c'];

//Look through all form field IDs
for (var i = formFields.length - 1; i >= 0; i--) {
	var id = formFields[i];
	//Add blur listener onto all form fields
	//If form has text, then make dataLayer push.
	jQuery(id).blur(function(){
		var fieldName = jQuery(this).attr('id');
		var inputLength = jQuery(this).val().length;
		if (inputLength > 0) {
			window.dataLayer.push({
				'event' : 'form-field-complete',
				'form-field' : fieldName
			})
		};
	});
};

//Form Submit Listeners
jQuery('.mktoButton').click(function() {
	window.dataLayer.push({
		'event' : 'form-submission'
	});
});

//Input Submit Listeners
jQuery('.next.btn.btn-orange:contains("Show me my rating")').click(function() {
	//Get Checked values
	var checkedRoof = jQuery('input[name="roof"]:checked').val()
	var checkedShade = jQuery('input[name="shade"]:checked').val()


	window.dataLayer.push({
		'event' : 'form-field-radio-completed',
		'radio-type' : 'Your Roof Type',
		'form-field' : checkedRoof
	});
	window.dataLayer.push({
		'event' : 'form-field-radio-completed',
		'radio-type' : 'Your Roof Shade',
		'form-field' : checkedShade
	});
});

})()