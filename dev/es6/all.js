var FV = FV || Object.create(null);

/**
 * Constraint Class
 */ 
FV.Constraint = (function() {

	const 	UPPERREGEX = 	/[A-Z]/g,
			LOWERREGEX = 	/[a-z]/g,
			NUMBERREGEX =	/\d/g,
			SPECIALREGEX =	/[\!\@\#\$\%\^\&\*]/g,
			URLREGEX =		/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
			EMAILREGEX =	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * Holds a single constraint, error message, and helpful properties
	 */
	return class Constraint {

		constructor() {

			this.constraint;
			this.errorMessage =		'';
			this.minLength = 		0;
			this.maxLength = 		0;
			this.regex;

		}

		/**
		 * Upper case regex
		 * 
		 */
		static get UPPERREGEX() {

			return UPPERREGEX;

		}

		/**
		 * Lower case regex
		 * 
		 */
		static get LOWERREGEX() {

			return LOWERREGEX;

		}

		/**
		 * Number regex
		 * 
		 */
		static get NUMBERREGEX() {

			return NUMBERREGEX;

		}

		/**
		 * Special characters regex
		 */
		static get SPECIALREGEX() {

			return SPECIALREGEX;

		}

		/**
		 * Url regex
		 */
		static get URLREGEX() {

			return URLREGEX;

		}

		/**
		 * Email regex
		 */
		static get EMAILREGEX() {

			return EMAILREGEX;

		}

	}

})();
var FV = FV || Object.create(null);

/**
 * Field Class
 * 
 */
FV.Field = (function() {

	/**
	 * Class to hold the element and the validations to be performed on the elemtns
	 */
	return class Field {

		constructor() {

			this.name;
			this.element;
			this.secondElement;
			this.constraints = [];

		}	

	}

})();
var FV = FV || Object.create(null);

/**
 * Validator Class
 * 
 */
FV.Validator = (function() {

	const 	MINLENGTH = 		0,
			MAXLENGTH = 		1,
			CONTAINSUPPER =		2,
			CONTAINSLOWER =		3,
			CONTAINSSPECIAL =	4,
			REGEX =				5,
			ISEMAIL =			6,
			ISURL =				7,
			EQUALSFIELD =		8;

	/**
	 *Validates your entire form
	 *
	 */
	return class Validator {

		constructor() {

			this.fields = [];

		}

		/**
		 * Field has a minlength
		 * 
		 */
		static get MINLENGTH() {

			return MINLENGTH;

		}

		/**
		 * Field has a maxlength
		 * 
		 */
		static get MAXLENGTH() {

			return MAXLENGTH;

		}

		/**
		 * Field contains an upper
		 * 
		 */
		static get CONTAINSUPPER() {

			return CONTAINSUPPER;

		}

		/**
		 * Field contains a lower
		 * 
		 */
		static get CONTAINSLOWER() {

			return CONTAINSLOWER;

		}

		/**
		 * Field contains a special
		 * 
		 */
		static get CONTAINSSPECIAL() {

			return CONTAINSSPECIAL;

		}

		/**
		 * Field matches regex
		 * 
		 */
		static get REGEX() {

			return REGEX;

		}

		/**
		 * Field is an email address
		 * 
		 */
		static get ISEMAIL() {

			return ISEMAIL;

		}

		/**
		 * Field is an url
		 * 
		 */
		static get ISURL() {

			return ISURL;

		}

		/**
		 * Field equals another field
		 * 
		 */
		static get EQUALSFIELD() {

			return EQUALSFIELD;

		}

		/**
		 * Checks the fields for errors
		 * 
		 * @return {Array} Errors as [{name: '', error: ''}]
		 */
		checkForErrors() {

			var errorMessages = [];	//Contains the error message to return

			//Loop through the fields and check for errors
			this.fields.forEach(field => {

				field.constraints.forEach( constraint => {

					switch(constraint.constraint) {

						case MINLENGTH:

							if(field.element.value.length < constraint.minLength) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case MAXLENGTH:

							if(field.element.value.length > constraint.maxLength) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case CONTAINSUPPER:

							if(!field.element.value.match(FV.Constraint.UPPERREGEX)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case CONTAINSLOWER:

							if(!field.element.value.match(FV.Constraint.LOWERREGEX)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case CONTAINSSPECIAL:

							if(!field.element.value.match(FV.Constraint.SPECIALREGEX)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case REGEX:

							if(!field.element.value.match(constraint.regex)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case ISEMAIL:

							if(!field.element.value.match(FV.Constraint.EMAILREGEX)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;
						case ISURL:

							if(!field.element.value.match(FV.Constraint.URLREGEX)) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

							break;

						case equals:

							if(field.element.value !== field.secondElement.value) {

								errorMessages.push({
									name: field.name,
									error: constraint.errorMessage
								});

							}

					}

				});

			});

			return errorMessages;

		}

	}

})();	