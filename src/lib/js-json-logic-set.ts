import makeCallback from './js-json-logic-make-callback.js';
import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, evaluate,  operators } from './js-json-logic.js';

const _evaluate = evaluate;

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// CLASS AND CONSTRUCTOR

operators['Set'] = () => {
	return String;
};

addConstructorOperator('Set()', Set);

// STATIC PROPERTIES

// STATIC METHODS

// INSTANCE PROPERTIES

addInstPropOperators('Set:', '', [
	'size'
]);

// INSTANCE METHODS

operators['Map:forEach()'] = (args, vars) => {
	const cbk = makeCallback(args, vars, ['value', 'key'], 1);
	const set = _evaluate(args[0], vars);
	let res: any;
	try {
		res = set.forEach(cbk);
	} finally {
		vars.pop();
	}
	return res;
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
