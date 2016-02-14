"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),FV=FV||Object.create(null);FV.Constraint=function(){var e=/[A-Z]/g,n=/[a-z]/g,r=/[\!\@\#\$\%\^\&\*]/g;return function(){function t(e,n,r,a){_classCallCheck(this,t),this.constraint=e||void 0,this.errorMessage=n||"",this.fieldLength=r||0,this.regex=a||void 0}return _createClass(t,null,[{key:"UPPERREGEX",get:function(){return e}},{key:"LOWERREGEX",get:function(){return n}},{key:"NUMBERREGEX",get:function(){return NUMBERREGEX}},{key:"SPECIALREGEX",get:function(){return r}}]),t}()}();var FV=FV||Object.create(null);FV.Field=function(){return function e(n,r,t,a){_classCallCheck(this,e),this.name=n||"",this.element=r||void 0,this.secondElement=t||void 0,this.constraints=a||[]}}();var _createClass=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),FV=FV||Object.create(null);FV.Validator=function(){var e=1,n=2,r=3,t=4,a=5,s=6,c=7;return function(){function o(e){_classCallCheck(this,o),this.fields=e||[]}return _createClass(o,[{key:"checkForErrors",value:function(){var o=[];return this.fields.forEach(function(u){u.constraints.forEach(function(i){switch(i.constraint){case e:u.element.value.length<i.fieldLength&&o.push({name:u.name,error:i.errorMessage,type:e});break;case n:u.element.value.length>i.fieldLength&&o.push({name:u.name,error:i.errorMessage,type:n});break;case r:u.element.value.match(FV.Constraint.UPPERREGEX)||o.push({name:u.name,error:i.errorMessage,type:r});break;case t:u.element.value.match(FV.Constraint.LOWERREGEX)||o.push({name:u.name,error:i.errorMessage,type:t});break;case a:u.element.value.match(FV.Constraint.SPECIALREGEX)||o.push({name:u.name,error:i.errorMessage,type:a});break;case s:u.element.value.match(i.regex)||o.push({name:u.name,error:i.errorMessage,type:s});break;case c:u.element.value!==u.secondElement.value&&o.push({name:u.name,error:i.errorMessage,type:c})}})}),o}}],[{key:"MINLENGTH",get:function(){return e}},{key:"MAXLENGTH",get:function(){return n}},{key:"CONTAINSUPPER",get:function(){return r}},{key:"CONTAINSLOWER",get:function(){return t}},{key:"CONTAINSSPECIAL",get:function(){return a}},{key:"REGEX",get:function(){return s}},{key:"EQUALSFIELD",get:function(){return c}}]),o}()}();