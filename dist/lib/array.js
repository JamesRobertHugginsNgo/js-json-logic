import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators } from './add-operators.js';
import { evaluate as ev, operators as ops } from './index.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// CLASS AND CONSTRUCTOR
ops['Array'] = async () => {
    return Array;
};
addConstructorOperator('Array()', Array);
// STATIC PROPERTIES
// STATIC METHODS
ops['Array.from()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    const arr = [];
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                res = await ev(args[argIdx], vars);
            }
            arr.push(res);
        }
    }
    finally {
        vars.pop();
    }
    return arr;
};
ops['Array.fromAsync()'] = ops['Array.from()'];
addMethodOperators('Array.', '()', Array, [
    'isArray',
    'of'
]);
// INSTANCE PROPERTIES
addInstPropOperators('Array:', '', [
    'length'
]);
// INSTANCE METHODS
ops['Array:every()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = true;
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (!argRes) {
                res = false;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:filter()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    const arr = [];
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                res = await ev(args[argIdx], vars);
            }
            if (res) {
                arr.push(el);
            }
        }
    }
    finally {
        vars.pop();
    }
    return arr;
};
ops['Array:find()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res;
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (argRes) {
                res = el;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:findIndex()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = -1;
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (argRes) {
                res = idx;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:findLast()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res;
    try {
        for (let idx = inst.length; --idx >= 0;) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (argRes) {
                res = el;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:findLastIndex()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = -1;
    try {
        for (let idx = inst.length; --idx >= 0;) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (argRes) {
                res = idx;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:flatMap()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    const arr = [];
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                res = await ev(args[argIdx], vars);
            }
            arr.push(res);
        }
    }
    finally {
        vars.pop();
    }
    return arr.flat(1);
};
ops['Array:forEach()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            block['element'] = inst[idx];
            block['index'] = idx;
            for (let idx = 1, len = args.length; idx < len; idx++) {
                await ev(args[idx], vars);
            }
        }
    }
    finally {
        vars.pop();
    }
};
ops['Array:map()'] = ops['Array.from()'];
ops['Array:reduce()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = await ev(args[1], vars);
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for (let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++) {
                res = await ev(args[argIdx], vars);
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:reduceRight()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = await ev(args[1], vars);
    try {
        for (let idx = inst.length; --idx >= 0;) {
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for (let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++) {
                res = await ev(args[argIdx], vars);
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:some()'] = async (args, vars) => {
    const block = {};
    vars.push(block);
    const inst = await ev(args[0], vars);
    let res = false;
    try {
        for (let idx = 0, len = inst.length; idx < len; idx++) {
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for (let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++) {
                argRes = await ev(args[argIdx], vars);
            }
            if (argRes) {
                res = true;
                break;
            }
        }
    }
    finally {
        vars.pop();
    }
    return res;
};
ops['Array:sort()'] = async (args, vars) => {
    const inst = await ev(args[0], vars);
    return inst.sort();
};
ops['Array:toSorted()'] = ops['Array:sort()'];
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
//# sourceMappingURL=array.js.map