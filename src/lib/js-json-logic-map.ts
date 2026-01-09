import makeCallback from './js-json-logic-make-callback.js';
import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, evaluate, operators } from './js-json-logic.js';

const _evaluate = evaluate;

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// CLASS AND CONSTRUCTOR

operators['Map'] = () => {
	return Map;
};

addConstructorOperator('Map()', Map);

// STATIC PROPERTIES

// STATIC METHODS

addMethodOperators('Map.', '()', Map, [
	'groupBy'
]);

// INSTANCE PROPERTIES

addInstPropOperators('Map:', '', [
	'size'
]);

// INSTANCE METHODS

operators['Map:forEach()'] = (args, vars) => {
	const cbk = makeCallback(args, vars, ['value', 'key'], 1);
	const map = _evaluate(args[0], vars);
	let res: any;
	try {
		res = map.forEach(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Map:getOrInsertComputed()'] = (args, vars) => {
	const cbk = makeCallback(args, vars, ['key'], 1);
	const map = _evaluate(args[0], vars);
	let res: any;
	try {
		res = map.getOrInsertComputed(cbk);
	} finally {
		vars.pop();
	}
	return res;
};

addInstMethodOperators('Map:', '()', [
	'clear',
	'delete',
	'entries',
	'get',
	'getOrInsert',
	'has',
	'keys',
	'set',
	'values',
]);
