import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, addPropOperators } from './add-operators.js';
import { operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

// CLASS AND CONSTRUCTOR

ops['Uint8Array'] = async () => {
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
