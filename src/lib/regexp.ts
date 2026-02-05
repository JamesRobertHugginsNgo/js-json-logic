import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators } from './add-operators.js';
import { operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// CLASS AND CONSTRUCTOR

ops['RegExp'] = async () => {
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
