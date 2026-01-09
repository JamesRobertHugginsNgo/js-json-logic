import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// CLASS AND CONSTRUCTOR

operators['String'] = () => {
	return String;
};

addConstructorOperator('String()', String);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('String.', '()', String, [
	'fromCharCode',
	'fromCodePoint',
	'raw'
]);

// INSTANCE PROPERTIES

addInstPropOperators('String:', '', [
	'length'
]);

// INSTANCE METHODS

addInstMethodOperators('String:', '()', [
	'at',
	'charAt',
	'charCodeAt',
	'codePointAt',
	'concat',
	'endsWith',
	'includes',
	'indexOf',
	'isWellFormed',
	'lastIndexOf',
	'localeCompare',
	'match',
	'matchAll',
	'normalize',
	'padEnd',
	'padStart',
	'repeat',
	'replace',
	'replaceAll',
	'search',
	'slice',
	'split',
	'startsWith',
	'sub',
	'substring',
	'toLocaleLowerCase',
	'toLocaleUpperCase',
	'toLowerCase',
	'toString',
	'toUpperCase',
	'toWellFormed',
	'trim',
	'trimEnd',
	'trimLeft',
	'trimRight',
	'trimStart',
	'valueOf'
]);
