//Darth Validator
(function(document) {

	window.APP = 		Object.create(null);

	//Validation fields
	var validator = 		new FV.Validator();
	var reqConstraint = 	new FV.Constraint();
	var reqField = 			new FV.Field();

	//Dom elements
	var requiredEl = 	document.getElementById('required-input');
	reqConstraint.constraint = FV.Validator.REQUIRED;
	reqConstraint.errorMessage = "Field is required";
	reqField.name = "Required Field";
	reqField.element = requiredEl;
	reqField.constraints.push(reqConstraint);
	validator.fields.push(reqField);

	/**
	 * Check the form
	 * 
	 */
	APP.submitForm = function() {

		var errors = validator.checkForErrors();

		if(errors.length === 0) {

			alert('No errors!');

		} else {

			alert('Errors: See console');
			console.log(errors);

		}

	};

	console.log('Window: ', window);

	console.log('FV: ', FV);

})(document);