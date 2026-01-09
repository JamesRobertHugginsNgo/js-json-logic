import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// CLASS AND CONSTRUCTOR

operators['Object'] = () => {
	return Object;
};

addConstructorOperator('Object()', Object);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('Object.', '()', Object, [
	'assign',
	'create',
	'defineProperties',
	'defineProperty',
	'entries',
	'freeze',
	'fromEntries',
	'getOwnPropertyDescriptor',
	'getOwnPropertyDescriptors',
	'getOwnPropertyNames',
	'getOwnPropertySymbols',
	'getPrototypeOf',
	'groupBy',
	'hasOwn',
	'is',
	'isExtensible',
	'isFrozen',
	'isSealed',
	'keys',
	'preventExtensions',
	'seal',
	'setPrototypeOf',
	'values'
]);

// INSTANCE PROPERTIES

// INSTANCE METHODS

addInstMethodOperators('Object:', '()', [
	// '__defineGetter__',
	// '__defineSetter__',
	// '__lookupGetter__',
	// '__lookupSetter__',
	// '__proto__',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'toLocaleString',
	'toString',
	'valueOf'
]);
