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