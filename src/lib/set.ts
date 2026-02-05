import { Block } from './index.js';

import { addConstructorOperator, addInstMethodOperators, addInstPropOperators } from './add-operators.js';
import { evaluate as ev, operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// CLASS AND CONSTRUCTOR

ops['Set'] = async () => {
	return Set;
};

addConstructorOperator('Set()', Set);

// STATIC PROPERTIES

// STATIC METHODS

// INSTANCE PROPERTIES

addInstPropOperators('Set:', '', [
	'size'
]);

// INSTANCE METHODS

ops['Set:forEach()'] = async (args, vars) => {
	const block: Block = {};
	vars.push(block);
	const inst = await ev(args[0], vars);
	try {
		for (const value of inst) {
			block['value'] = value;
			for (let idx = 1, len = args.length; idx < len; idx++) {
				await ev(args[idx], vars);
			}
		}
	} finally {
		vars.pop();
	}
};

addInstMethodOperators('Set:', '()', [
	'add',
	'clear',
	'delete',
	'difference',
	'entries',
	'has',
	'intersection',
	'isDisjointFrom',
	'isSubsetOf',
	'isSupersetOf',
	'keys',
	'symmetricDifference',
	'union',
	'values',
]);
