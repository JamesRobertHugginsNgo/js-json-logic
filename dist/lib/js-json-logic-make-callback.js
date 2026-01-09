import { evaluate } from './js-json-logic.js';
const _evaluate = evaluate;
export default function makeCallBack(args, vars, keys, startIdx) {
    const block = {};
    const argLen = args.length;
    const keyLen = keys.length;
    let cbkRes;
    vars.push(block);
    const cbk = (...cbkArgs) => {
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
//# sourceMappingURL=js-json-logic-make-callback.js.map