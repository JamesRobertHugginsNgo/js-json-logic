import { Block } from './index.js';

import { addConstructorOperator, addMethodOperators, addInstMethodOperators, addInstPropOperators } from './add-operators.js';
import { evaluate as ev, operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// CLASS AND CONSTRUCTOR

ops['Map'] = async () => {
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

ops['Map:forEach()'] = async (args, vars) => {
	const block: Block = {};
	vars.push(block);
	const inst = await ev(args[0], vars);
	try {
		for (const [key, value] of inst) {
			block['key'] = value;
			block['value'] = value;
			for (let idx = 1, len = args.length; idx < len; idx++) {
				await ev(args[idx], vars);
			}
		}
	} finally {
		vars.pop();
	}
};
ops['Map:getOrInsertComputed()'] = async (args, vars) => {
	const inst = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	if (!inst.has(key)) {
		vars.push({ key });
		try {
			let res: any;
			for (let idx = 2, len = args.length; idx < len; idx++) {
				res = await ev(args[idx], vars);
			}
			inst.set(key, res);
		} finally {
			vars.pop();
		}
	}
	return inst.get(key);
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
