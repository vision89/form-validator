'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FV = FV || Object.create(null);

/**
 * Constraint Class
 */
FV.Constraint = function () {

	var UPPERREGEX = /[A-Z]/g,
	    LOWERREGEX = /[a-z]/g,
	    NUMBERREGEX = /\d/g,
	    SPECIALREGEX = /[\!\@\#\$\%\^\&\*]/g,
	    URLREGEX = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
	    EMAILREGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
  * Holds a single constraint, error message, and helpful properties
  */
	return function () {
		function Constraint() {
			_classCallCheck(this, Constraint);

			this.constraint;
			this.errorMessage = '';
			this.minLength = 0;
			this.maxLength = 0;
			this.regex;
		}

		/**
   * Upper case regex
   * 
   */

		_createClass(Constraint, null, [{
			key: 'UPPERREGEX',
			get: function get() {

				return UPPERREGEX;
			}

			/**
    * Lower case regex
    * 
    */

		}, {
			key: 'LOWERREGEX',
			get: function get() {

				return LOWERREGEX;
			}

			/**
    * Number regex
    * 
    */

		}, {
			key: 'NUMBERREGEX',
			get: function get() {

				return NUMBERREGEX;
			}

			/**
    * Special characters regex
    */

		}, {
			key: 'SPECIALREGEX',
			get: function get() {

				return SPECIALREGEX;
			}

			/**
    * Url regex
    */

		}, {
			key: 'URLREGEX',
			get: function get() {

				return URLREGEX;
			}

			/**
    * Email regex
    */

		}, {
			key: 'EMAILREGEX',
			get: function get() {

				return EMAILREGEX;
			}
		}]);

		return Constraint;
	}();
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FV = FV || Object.create(null);

/**
 * Field Class
 * 
 */
FV.Field = function () {

	/**
  * Class to hold the element and the validations to be performed on the elemtns
  */
	return function Field() {
		_classCallCheck(this, Field);

		this.name;
		this.element;
		this.secondElement;
		this.constraints = [];
	};
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FV = FV || Object.create(null);

/**
 * Validator Class
 * 
 */
FV.Validator = function () {

	var MINLENGTH = 0,
	    MAXLENGTH = 1,
	    CONTAINSUPPER = 2,
	    CONTAINSLOWER = 3,
	    CONTAINSSPECIAL = 4,
	    REGEX = 5,
	    ISEMAIL = 6,
	    ISURL = 7,
	    EQUALSFIELD = 8;

	/**
  *Validates your entire form
  *
  */
	return function () {
		function Validator() {
			_classCallCheck(this, Validator);

			this.fields = [];
		}

		/**
   * Field has a minlength
   * 
   */

		_createClass(Validator, [{
			key: "checkForErrors",

			/**
    * Checks the fields for errors
    * 
    * @return {Array} Errors as [{name: '', error: ''}]
    */
			value: function checkForErrors() {

				var errorMessages = []; //Contains the error message to return

				//Loop through the fields and check for errors
				this.fields.forEach(function (field) {

					field.constraints.forEach(function (constraint) {

						switch (constraint.constraint) {

							case MINLENGTH:

								if (field.element.value.length < constraint.minLength) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case MAXLENGTH:

								if (field.element.value.length > constraint.maxLength) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case CONTAINSUPPER:

								if (!field.element.value.match(FV.Constraint.UPPERREGEX)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case CONTAINSLOWER:

								if (!field.element.value.match(FV.Constraint.LOWERREGEX)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case CONTAINSSPECIAL:

								if (!field.element.value.match(FV.Constraint.SPECIALREGEX)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case REGEX:

								if (!field.element.value.match(constraint.regex)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case ISEMAIL:

								if (!field.element.value.match(FV.Constraint.EMAILREGEX)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;
							case ISURL:

								if (!field.element.value.match(FV.Constraint.URLREGEX)) {

									errorMessages.push({
										name: field.name,
										error: constraint.errorMessage
									});
								}

								break;

							case equals:

								if (field.element.value !== field.secondElement.value) {

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
		}], [{
			key: "MINLENGTH",
			get: function get() {

				return MINLENGTH;
			}

			/**
    * Field has a maxlength
    * 
    */

		}, {
			key: "MAXLENGTH",
			get: function get() {

				return MAXLENGTH;
			}

			/**
    * Field contains an upper
    * 
    */

		}, {
			key: "CONTAINSUPPER",
			get: function get() {

				return CONTAINSUPPER;
			}

			/**
    * Field contains a lower
    * 
    */

		}, {
			key: "CONTAINSLOWER",
			get: function get() {

				return CONTAINSLOWER;
			}

			/**
    * Field contains a special
    * 
    */

		}, {
			key: "CONTAINSSPECIAL",
			get: function get() {

				return CONTAINSSPECIAL;
			}

			/**
    * Field matches regex
    * 
    */

		}, {
			key: "REGEX",
			get: function get() {

				return REGEX;
			}

			/**
    * Field is an email address
    * 
    */

		}, {
			key: "ISEMAIL",
			get: function get() {

				return ISEMAIL;
			}

			/**
    * Field is an url
    * 
    */

		}, {
			key: "ISURL",
			get: function get() {

				return ISURL;
			}

			/**
    * Field equals another field
    * 
    */

		}, {
			key: "EQUALSFIELD",
			get: function get() {

				return EQUALSFIELD;
			}
		}]);

		return Validator;
	}();
}();