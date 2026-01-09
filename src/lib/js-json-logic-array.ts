import makeCallback from './js-json-logic-make-callback.js';
import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, evaluate, operators } from './js-json-logic.js';

const _evaluate = evaluate;

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// CLASS AND CONSTRUCTOR

operators['Array'] = () => {
	return Array;
};

addConstructorOperator('Array()', Array);

// STATIC PROPERTIES

// STATIC METHODS

operators['Array.from()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = Array.from(arr, cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array.fromAsync()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = Array.fromAsync(arr, cbk);
	} finally {
		vars.pop();
	}
	return res;
};

addMethodOperators('Array.', '()', Array, [
	'isArray',
	'of'
]);

// INSTANCE PROPERTIES

addInstPropOperators('Array:', '', [
	'length'
]);

// INSTANCE METHODS

operators['Array:every()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.every(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:filter()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.filter(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:find()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.find(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:findIndex()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.findIndex(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:findLast()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.findLast(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:findLastIndex()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.findLastIndex(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:flatMap()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.flatMap(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:forEach()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.forEach(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:map()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.map(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:reduce()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['accumulator', 'element', 'index'], 2);
	const init = _evaluate(args[1], vars);
	let res: any;
	try {
		res = arr.reduce(cbk, init);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:reduceRight()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['accumulator', 'element', 'index'], 2);
	const init = _evaluate(args[1], vars);
	let res: any;
	try {
		res = arr.reduceRight(cbk, init);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:some()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element', 'index'], 1);
	let res: any;
	try {
		res = arr.some(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:sort()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element1', 'element2'], 1);
	let res: any;
	try {
		res = arr.sort(cbk);
	} finally {
		vars.pop();
	}
	return res;
};
operators['Array:toSorted()'] = (args, vars) => {
	const arr = _evaluate(args[0], vars);
	const cbk = makeCallback(args, vars, ['element1', 'element2'], 1);
	let res: any;
	try {
		res = arr.toSorted(cbk);
	} finally {
		vars.pop();
	}
	return res;
};

addInstMethodOperators('Array:', '()', [
	'at',
	'concat',
	'copyWithin',
	'entries',
	'fill',
	'flat',
	'includes',
	'indexOf',
	'join',
	'keys',
	'lastIndexOf',
	'pop',
	'push',
	'reverse',
	'shift',
	'slice',
	'splice',
	'toLocaleString',
	'toReversed',
	'toSpliced',
	'toString',
	'unshift',
	'values',
	'with'
]);
