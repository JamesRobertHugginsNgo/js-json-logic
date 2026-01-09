import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, addPropOperators, operators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// CLASS AND CONSTRUCTOR

operators['RegExp'] = () => {
	return RegExp;
};

addConstructorOperator('RegExp()', RegExp);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('RegExp.', '()', RegExp, [
	'escape'
]);

// INSTANCE PROPERTIES

addInstPropOperators('RegExp:', '', [
	'dotAll',
	'flags',
	'global',
	'hasIndices',
	'ignoreCase',
	'lastIndex',
	'multiline',
	'source',
	'sticky',
	'unicode',
	'unicodeSets'
]);

// INSTANCE METHODS

addInstMethodOperators('RegExp:', '()', [
	'exec',
	'test',
	'toString',
]);
