import type { Block } from './js-json-logic.js';

import { evaluate } from './js-json-logic.js';

const _evaluate = evaluate;

export default function makeCallBack(args: any[], vars: Block[], keys: string[], startIdx: number): (el: any, idx: number) => any {
	const block: Block = {};
	const argLen = args.length;
	const keyLen = keys.length;
	let cbkRes: any;
	vars.push(block);
	const cbk = (...cbkArgs: any[]) => {
		for (let keyIdx = 0; keyIdx < keyLen; keyIdx++) {
			block[keys[keyIdx]] = cbkArgs[keyIdx];
		}
		for (let argIdx = startIdx; argIdx < argLen; argIdx++) {
			cbkRes = _evaluate(args[argIdx], vars);
		}
		return cbkRes;
	};
	return cbk;
}
