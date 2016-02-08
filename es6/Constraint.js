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