import type { Block } from './index.js';
import { evaluate as ev, operators as ops } from './index.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// PRIMARY EXPRESSIONS

ops['undefined'] = async () => {
	return undefined;
};

// LEFT-HAND-SIDE EXPRESSIONS

ops['.'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res[arg];
	}
	return res;
};

ops['?.'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		if (res == null) {
			break;
		}
		const arg = await ev(args[idx], vars);
		res = res[arg];
	}
	return res;
};

// UNARY OPERATORS

ops['delete'] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	return delete obj[key];
};

ops['void'] = async (args, vars) => { // N-ARY ARGS
	for (let idx = 0, len = args.length; idx < len; idx++) {
		await ev(args[idx], vars);
	}
	return undefined;
};

ops['typeof'] = async (args, vars) => {
	const val = await ev(args[0], vars);
	return typeof val;
};

ops['~'] = async (args, vars) => {
	const val = await ev(args[0], vars);
	return ~val;
};

ops['!'] = async (args, vars) => {
	const val = await ev(args[0], vars);
	return !val;
};

// ARITHMETIC OPERATORS

ops['**'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res ** arg;
	}
	return res;
};

ops['*'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res * arg;
	}
	return res;
};

ops['/'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res / arg;
	}
	return res;
};

ops['%'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res % arg;
	}
	return res;
};

ops['+'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	if (args.length === 1) {
		return +res;
	}
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res + arg;
	}
	return res;
};

ops['-'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	if (args.length === 1) {
		return -res;
	}
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res - arg;
	}
	return res;
};

// RELATIONAL OPERATORS

ops['<'] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last < cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['>'] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last > cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['<='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last <= cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['>='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last >= cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['instanceof'] = async (args, vars) => {
	const lhs = await ev(args[0], vars);
	const rhs = await ev(args[1], vars);
	return lhs instanceof rhs;
};

ops['in'] = async (args, vars) => {
	const lhs = await ev(args[0], vars);
	const rhs = await ev(args[1], vars);
	return lhs in rhs;
};

// EQUALITY OPERATORS

ops['=='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last == cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['!='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last != cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['==='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last === cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

ops['!=='] = async (args, vars) => { // N-ARY ARGS
	for (let last = await ev(args[0], vars), idx = 1, len = args.length; idx < len; idx++) {
		const cur = await ev(args[idx], vars);
		if (!(last !== cur)) {
			return false;
		}
		last = cur;
	}
	return true;
};

// BITWISE SHIFT OPERATORS

ops['<<'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res << arg;
	}
	return res;
};

ops['>>'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res >> arg;
	}
	return res;
};

ops['>>>'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res >>> arg;
	}
	return res;
};

// BINARY BITWISE OPERATORS

ops['&'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res & arg;
	}
	return res;
};

ops['|'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res | arg;
	}
	return res;
};

ops['^'] = async (args, vars) => { // N-ARY ARGS
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		const arg = await ev(args[idx], vars);
		res = res ^ arg;
	}
	return res;
};

// BINARY LOGICAL OPERATORS

ops['&&'] = async (args, vars) => {
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		if (!res) {
			break;
		}
		res = await ev(args[idx], vars);
	}
	return res;
};

ops['||'] = async (args, vars) => {
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		if (res) {
			break;
		}
		res = await ev(args[idx], vars);
	}
	return res;
};

ops['??'] = async (args, vars) => {
	let res = await ev(args[0], vars);
	for (let idx = 1, len = args.length; idx < len; idx++) {
		if (res != null) {
			break;
		}
		res = await ev(args[idx], vars);
	}
	return res;
};

// CONDITIONAL (TERNARY) OPERATOR

ops['?:'] = async (args, vars) => {
	const cond = await ev(args[0], vars);
	return cond ? await ev(args[1], vars) : await ev(args[2], vars);
};

// ASSIGNMENT OPERATORS

ops['='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] = val;
};

ops['*='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] *= val;
};

ops['/='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] /= val;
};

ops['%='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] %= val;
};

ops['+='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] += val;
};

ops['-='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] -= val;
};

ops['<<='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] <<= val;
};

ops['>>='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] >>= val;
};

ops['>>>='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] >>>= val;
};

ops['&='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] &= val;
};

ops['^='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] ^= val;
};

ops['|='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] |= val;
};

ops['**='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] **= val;
};

ops['&&='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] &&= val;
};

ops['||='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] ||= val;
};

ops['??='] = async (args, vars) => { // OBJECT ARGS
	const obj = await ev(args[0], vars);
	const key = await ev(args[1], vars);
	const val = await ev(args[2], vars);
	return obj[key] ??= val;
};

// COMMA OPERATOR

ops[','] = async (args, vars) => { // N-ARY ARGS
	let res: any;
	for (let idx = 0, len = args.length; idx < len; idx++) {
		res = await ev(args[idx], vars);
	}
	return res;
};

// TRY CATCH FINALLY OPERATOR

ops['try'] = async (args, vars) => {
	let res: any;
	try {
		const tryRes = await ev(args[0], vars);
		res = tryRes;
	} catch (error) {
		vars.push({ error });
		let catchRes: any;
		try {
			catchRes = await ev(args[1], vars);
		} finally {
			vars.pop();
		}
		if (catchRes !== undefined) {
			res = catchRes;
		} else {
			throw error;
		}
	} finally {
		const finalRes = await ev(args[2], vars);
		if (finalRes !== undefined) {
			res = finalRes;
		}
	}
	return res;
};

// VARS OPERATOR

ops['block'] = async (args, vars) => { // N-ARY ARGS
	let res: any;
	vars.push({});
	try {
		for (let idx = 0, len = args.length; idx < len; idx++) {
			res = await ev(args[idx], vars);
		}
	} finally {
		vars.pop();
	}
	return res;
};

const blockMap = new WeakMap<Block, Record<string, Block>>();

function getBlockOf(vars: Block[], name: string): Block | undefined {
	let curBlock = vars[vars.length - 1];
	let block = blockMap.get(curBlock);
	if (block === undefined) {
		block = {};
		blockMap.set(curBlock, block);
	}
	if (Object.hasOwn(block, name)) {
		return block[name];
	}
	for (let idx = vars.length; --idx >= 0;) {
		if (Object.hasOwn(vars[idx], name)) {
			return block[name] = vars[idx];
		}
	}
}

ops['blockof'] = async (args, vars) => {
	const name = await ev(args[0], vars);
	return getBlockOf(vars, name);
};

ops['var'] = async (args, vars) => {
	const name = await ev(args[0], vars);
	return getBlockOf(vars, name)?.[name];
};

ops['let'] = async (args, vars) => {
	const curBlock = vars[vars.length - 1];
	const name = await ev(args[0], vars);
	let block = blockMap.get(curBlock);
	if (block !== undefined) {
		delete block[name];
	}
	const val = await ev(args[1], vars);
	curBlock[name] = await ev(val, vars);
}
