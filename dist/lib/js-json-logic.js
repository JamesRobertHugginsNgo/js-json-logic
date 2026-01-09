export const blockMap = new WeakMap();
function getBlockOf(name, vars) {
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
export const operators = {
    // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
    // PRIMARY EXPRESSIONS
    'undefined': () => {
        return undefined;
    },
    // LEFT-HAND-SIDE EXPRESSIONS
    '.': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            res = res[_evaluate(args[idx], vars)];
        }
        return res;
    },
    '?.': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            if (res == null) {
                break;
            }
            res = res[_evaluate(args[idx], vars)];
        }
        return res;
    },
    // UNARY OPERATORS
    'delete': (args, vars) => {
        const [obj, key] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        return delete evObj[evKey];
    },
    'void': (args, vars) => {
        for (let idx = 0, len = args.length; idx < len; idx++) {
            _evaluate(args[idx], vars);
        }
        return undefined;
    },
    'typeof': (args, vars) => {
        const [val] = args;
        const evVal = _evaluate(val, vars);
        return typeof evVal;
    },
    '~': (args, vars) => {
        const [val] = args;
        const evVal = _evaluate(val, vars);
        return ~evVal;
    },
    '!': (args, vars) => {
        const [val] = args;
        const evVal = _evaluate(val, vars);
        return !evVal;
    },
    // ARITHMETIC OPERATORS
    '**': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res ** arg;
        }
        return res;
    },
    '*': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res * arg;
        }
        return res;
    },
    '/': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res / arg;
        }
        return res;
    },
    '%': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res % arg;
        }
        return res;
    },
    '+': (args, vars) => {
        let res = _evaluate(args[0], vars);
        if (args.length === 1) {
            return +res;
        }
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res + arg;
        }
        return res;
    },
    '-': (args, vars) => {
        let res = _evaluate(args[0], vars);
        if (args.length === 1) {
            return -res;
        }
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res - arg;
        }
        return res;
    },
    // RELATIONAL OPERATORS
    '<': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last < cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '>': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last > cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '<=': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last <= cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '>=': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last >= cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    'instanceof': (args, vars) => {
        const [lhs, rhs] = args;
        const evLhs = _evaluate(lhs, vars);
        const evRhs = _evaluate(rhs, vars);
        return evLhs instanceof evRhs;
    },
    'in': (args, vars) => {
        const [lhs, rhs] = args;
        const evLhs = _evaluate(lhs, vars);
        const evRhs = _evaluate(rhs, vars);
        return evLhs in evRhs;
    },
    // EQUALITY OPERATORS
    '==': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last == cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '!=': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last != cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '===': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last === cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    '!==': (args, vars) => {
        for (let last = _evaluate(args[0], vars), idx = 1; idx < args.length; idx++) {
            const cur = _evaluate(args[idx], vars);
            if (!(last !== cur)) {
                return false;
            }
            last = cur;
        }
        return true;
    },
    // BITWISE SHIFT OPERATORS
    '<<': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res << arg;
        }
        return res;
    },
    '>>': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res >> arg;
        }
        return res;
    },
    '>>>': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res >>> arg;
        }
        return res;
    },
    // BINARY BITWISE OPERATORS
    '&': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res & arg;
        }
        return res;
    },
    '|': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res | arg;
        }
        return res;
    },
    '^': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            const arg = _evaluate(args[idx], vars);
            res = res ^ arg;
        }
        return res;
    },
    // BINARY LOGICAL OPERATORS
    '&&': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            if (!res) {
                break;
            }
            res = _evaluate(args[idx], vars);
        }
        return res;
    },
    '||': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            if (res) {
                break;
            }
            res = _evaluate(args[idx], vars);
        }
        return res;
    },
    '??': (args, vars) => {
        let res = _evaluate(args[0], vars);
        for (let idx = 1, len = args.length; idx < len; idx++) {
            if (res != null) {
                break;
            }
            res = _evaluate(args[idx], vars);
        }
        return res;
    },
    // CONDITIONAL (TERNARY) OPERATOR
    '?:': (args, vars) => {
        const [cond, trueExp, falseExp] = args;
        const evCond = _evaluate(cond, vars);
        return evCond ? _evaluate(trueExp, vars) : _evaluate(falseExp, vars);
    },
    // ASSIGNMENT OPERATORS
    '=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] = evVal;
    },
    '*=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] *= evVal;
    },
    '/=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] /= evVal;
    },
    '%=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] %= evVal;
    },
    '+=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] += evVal;
    },
    '-=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] -= evVal;
    },
    '<<=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] <<= evVal;
    },
    '>>=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] >>= evVal;
    },
    '>>>=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] >>>= evVal;
    },
    '&=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] &= evVal;
    },
    '^=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] ^= evVal;
    },
    '|=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] |= evVal;
    },
    '**=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] **= evVal;
    },
    '&&=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] &&= evVal;
    },
    '||=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] ||= evVal;
    },
    '??=': (args, vars) => {
        const [obj, key, val] = args;
        const evObj = _evaluate(obj, vars);
        const evKey = _evaluate(key, vars);
        const evVal = _evaluate(val, vars);
        return evObj[evKey] ??= evVal;
    },
    // COMMA OPERATOR
    ',': (args, vars) => {
        let res;
        for (let idx = 0, len = args.length; idx < len; idx++) {
            res = _evaluate(args[idx], vars);
        }
        return res;
    },
    // TRY CATCH FINALLY OPERATOR
    'try': (args, vars) => {
        const [tryExp, catchExp, finExp] = args;
        let res;
        try {
            res = _evaluate(tryExp, vars);
        }
        catch (err) {
            vars.push({ error: err });
            let errRes;
            try {
                errRes = _evaluate(catchExp, vars);
            }
            finally {
                vars.pop();
            }
            if (errRes !== undefined) {
                res = errRes;
            }
            else {
                throw err;
            }
        }
        finally {
            const finRes = _evaluate(finExp, vars);
            if (finRes !== undefined) {
                res = finRes;
            }
        }
        return res;
    },
    // VARS OPERATOR
    'block': (args, vars) => {
        let res;
        vars.push({});
        try {
            for (let idx = 0, len = args.length; idx < len; idx++) {
                res = _evaluate(args[idx], vars);
            }
        }
        finally {
            vars.pop();
        }
        return res;
    },
    'blockof': (args, vars) => {
        const [name] = args;
        const evName = _evaluate(name, vars);
        return getBlockOf(evName, vars);
    },
    'var': (args, vars) => {
        const [name] = args;
        const evName = _evaluate(name, vars);
        return getBlockOf(evName, vars)?.[evName];
    },
    'let': (args, vars) => {
        const [name, val] = args;
        const evName = _evaluate(name, vars);
        let curBlock = vars[vars.length - 1];
        let block = blockMap.get(curBlock);
        if (block !== undefined) {
            delete block[evName];
        }
        curBlock[evName] = _evaluate(val, vars);
    }
};
export function addConstructorOperator(name, cls) {
    const operator = (args, vars) => {
        const len = args.length;
        const evArgs = new Array(len);
        for (let idx = 0; idx < len; idx++) {
            evArgs.push(_evaluate(args[idx], vars));
        }
        return new cls(...evArgs);
    };
    operators[name] = operator;
}
export function addPropOperators(prefix, suffix, obj, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = (args, vars) => {
            const val = _evaluate(args[0], vars);
            if (val === undefined) {
                return obj[name];
            }
            return obj[name] = val;
        };
        operators[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addMethodOperators(prefix, suffix, obj, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = (args, vars) => {
            const len = args.length;
            const evArgs = new Array(len);
            for (let idx = 0; idx < len; idx++) {
                evArgs[idx] = _evaluate(args[idx], vars);
            }
            return obj[name](...evArgs);
        };
        operators[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addInstPropOperators(prefix, suffix, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = (args, vars) => {
            const inst = _evaluate(args[0], vars);
            const evVal = _evaluate(args[1], vars);
            if (evVal === undefined) {
                return inst[name];
            }
            return inst[name] = evVal;
        };
        operators[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addInstMethodOperators(prefix, suffix, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = (args, vars) => {
            const inst = _evaluate(args[0], vars);
            const len = args.length;
            const evArgs = new Array(len);
            for (let idx = 1; idx < len; idx++) {
                evArgs.push(_evaluate(args[idx], vars));
            }
            return inst[name](...evArgs);
        };
        operators[`${prefix}${name}${suffix}`] = operator;
    }
}
export function evaluate(rule, vars) {
    if (rule && typeof rule === 'object' && !Array.isArray(rule)) {
        for (const key in rule) {
            const op = operators[key];
            if (op === undefined) {
                break;
            }
            return op(rule[key], vars);
        }
    }
    return rule;
}
const _evaluate = evaluate;
export default function jsJsonLogic(rule, data) {
    const vars = data === undefined ? [] : [data];
    vars.push({});
    return _evaluate(rule, vars);
}
//# sourceMappingURL=js-json-logic.js.map