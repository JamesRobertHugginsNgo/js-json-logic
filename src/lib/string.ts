import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators } from './add-operators.js';
import { operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// CLASS AND CONSTRUCTOR

ops['String'] = async () => {
	return String;
};

addConstructorOperator('String()', String);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('String.', '()', String, [
	'fromCharCode',
	'fromCodePoint',
	// 'raw'
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
