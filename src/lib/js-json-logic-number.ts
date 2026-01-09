import { addConstructorOperator, addInstMethodOperators, addMethodOperators, addPropOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// CLASS AND CONSTRUCTOR

operators['Number'] = () => {
	return Number;
};

addConstructorOperator('Number()', Number);

// STATIC PROPERTIES

addPropOperators('Number.', '', Number, [
	'EPSILON',
	'MAX_SAFE_INTEGER',
	'MAX_VALUE',
	'MIN_SAFE_INTEGER',
	'MIN_VALUE',
	'NaN',
	'NEGATIVE_INFINITY',
	'POSITIVE_INFINITY'
]);

// STATIC METHODS

addMethodOperators('Number.', '()', Number, [
	'isFinite',
	'isInteger',
	'isNaN',
	'isSafeInteger',
	'parseFloat',
	'parseInt'
]);

// INSTANCE PROPERTIES

// INSTANCE METHODS

addInstMethodOperators('Number:', '()', [
	'toExponential',
	'toFixed',
	'toLocaleString',
	'toPrecision',
	'toString',
	'valueOf'
]);
