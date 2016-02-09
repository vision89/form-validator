//Darth Validator
(function(document) {

	window.APP = 		Object.create(null);

	//Validation fields
	var validator = 		new FV.Validator();
	var minConstraint = 	new FV.Constraint();
	var maxConstraint =		new FV.Constraint();
	var upperConstraint =	new FV.Constraint();
	var lowerConstraint =	new FV.Constraint();
	var specialConstraint =	new FV.Constraint();
	var regexConstraint =	new FV.Constraint();
	var passwordField = 	new FV.Field();
	var regexField =		new FV.Field();

	//Dom elements
	var passwordEl = 	document.getElementById('password-input');
	var regexEl =		document.getElementById('regex-input');
	var submitButton = 	document.getElementById('submit-button');

	passwordField.name = 	"Password1";
	passwordField.element = passwordEl;

	regexField.name =		"RegexField";
	regexField.element =	regexEl;

	minConstraint.constraint = 			FV.Validator.MINLENGTH;
	minConstraint.errorMessage = 		"* Password must be at least 3 characters long.\n";
	minConstraint.minLength = 			3;

	maxConstraint.constraint = 			FV.Validator.MAXLENGTH;
	maxConstraint.errorMessage = 		"* Password must be no more than 8 characters long.\n";
	maxConstraint.maxLength = 			8;

	upperConstraint.constraint =		FV.Validator.CONTAINSUPPER;
	upperConstraint.errorMessage =		"* Password must contain at least one upper case letter.\n";

	lowerConstraint.constraint =		FV.Validator.CONTAINSLOWER;
	lowerConstraint.errorMessage =		"* Password must contain at least one lower case letter.\n";

	specialConstraint.constraint =		FV.Validator.CONTAINSSPECIAL;
	specialConstraint.errorMessage =	"* Password must contain at least one special character (!, @, #, $, %, ^, &, *).\n";

	regexConstraint.constraint =		FV.Validator.REGEX;
	regexConstraint.errorMessage =		"* Must contain the word 'Test'.\n";
	regexConstraint.regex =				/Test/;

	passwordField.constraints.push(minConstraint);
	passwordField.constraints.push(maxConstraint);
	passwordField.constraints.push(upperConstraint);
	passwordField.constraints.push(lowerConstraint);
	passwordField.constraints.push(specialConstraint);

	regexField.constraints.push(regexConstraint);

	validator.fields.push(passwordField);
	validator.fields.push(regexField);

	/**
	 * Check the form
	 * 
	 */
	submitButton.onclick = function() {

		var errors = 			validator.checkForErrors();
		var passwordErrors = 	"";
		var regexErrors = 		"";

		errors.forEach(function(error) {

			switch(error.name) {

				case "Password1":

					passwordErrors += error.error;

					break;

				case "RegexField":

					if(regexErrors === '') {

						regexErrors = "Please correct the following errors:\n";

					}

					regexErrors += error.error;

					break;

			}

		});

		if(passwordErrors !== '') {

			passwordErrors = "Please correct the following errors:\n" + passwordErrors;

		}

		if(regexErrors !== '') {

			regexErrors = "Please correct the following errors:\n" + regexErrors;

		}

		passwordEl.setCustomValidity(passwordErrors);
		regexEl.setCustomValidity(regexErrors);

	};

	/**
	 * Form submitted succesfully
	 * 
	 */
	APP.submitted = function() {

		alert('Success!');

	};

	console.log('Window: ', window);

	console.log('FV: ', FV);

})(document);