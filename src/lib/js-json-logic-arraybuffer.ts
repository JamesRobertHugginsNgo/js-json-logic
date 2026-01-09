import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

// CLASS AND CONSTRUCTOR

operators['ArrayBuffer'] = () => {
	return ArrayBuffer;
};

addConstructorOperator('ArrayBuffer()', ArrayBuffer);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('ArrayBuffer.', '()', ArrayBuffer, [
	'isView'
]);

// INSTANCE PROPERTIES

addInstPropOperators('ArrayBuffer:', '', [
	'byteLength',
	'detached',
	'maxByteLength',
	'resizable'
]);

// INSTANCE METHODS

addInstMethodOperators('ArrayBuffer:', '()', [
	'resize',
	'slice',
	'transfer',
	'transferToFixedLength'
]);
