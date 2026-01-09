import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// CLASS AND CONSTRUCTOR

operators['Boolean'] = () => {
	return Boolean;
};

addConstructorOperator('Boolean()', Boolean);

// STATIC PROPERTIES

// STATIC METHODS

// INSTANCE PROPERTIES

// INSTANCE METHODS

addInstMethodOperators('Boolean:', '()', [
	'toString',
	'valueOf'
]);
