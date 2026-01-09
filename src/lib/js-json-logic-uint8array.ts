import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, addPropOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

// CLASS AND CONSTRUCTOR

operators['Uint8Array'] = () => {
	return Uint8Array;
};

addConstructorOperator('Uint8Array()', Uint8Array);

// STATIC PROPERTIES

addPropOperators('Uint8Array.', '', Uint8Array, [
	'BYTES_PER_ELEMENT'
])

// STATIC METHODS

addMethodOperators('Uint8Array.', '()', Uint8Array, [
	'fromBase64',
	'fromHex'
]);

// INSTANCE PROPERTIES

addInstPropOperators('Uint8Array:', '', [
	'BYTES_PER_ELEMENT'
]);

// INSTANCE METHODS

addInstMethodOperators('Uint8Array:', '()', [
  'setFromBase64',
  'setFromHex',
  'toBase64',
  'toHex'
]);
