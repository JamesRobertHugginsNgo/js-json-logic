const $9f17818e370d2647$export$38a950f590cd095a = new WeakMap();
function $9f17818e370d2647$var$getBlockOf(name, vars) {
    let curBlock = vars[vars.length - 1];
    let block = $9f17818e370d2647$export$38a950f590cd095a.get(curBlock);
    if (block === undefined) {
        block = {};
        $9f17818e370d2647$export$38a950f590cd095a.set(curBlock, block);
    }
    if (Object.hasOwn(block, name)) return block[name];
    for(let idx = vars.length; --idx >= 0;){
        if (Object.hasOwn(vars[idx], name)) return block[name] = vars[idx];
    }
}
const $9f17818e370d2647$export$ccbce4efa7f8029b = {
    // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
    // PRIMARY EXPRESSIONS
    'undefined': ()=>{
        return undefined;
    },
    // LEFT-HAND-SIDE EXPRESSIONS
    '.': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++)res = res[$9f17818e370d2647$var$_evaluate(args[idx], vars)];
        return res;
    },
    '?.': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            if (res == null) break;
            res = res[$9f17818e370d2647$var$_evaluate(args[idx], vars)];
        }
        return res;
    },
    // UNARY OPERATORS
    'delete': (args, vars)=>{
        const [obj, key] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        return delete evObj[evKey];
    },
    'void': (args, vars)=>{
        for(let idx = 0, len = args.length; idx < len; idx++)$9f17818e370d2647$var$_evaluate(args[idx], vars);
        return undefined;
    },
    'typeof': (args, vars)=>{
        const [val] = args;
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return typeof evVal;
    },
    '~': (args, vars)=>{
        const [val] = args;
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return ~evVal;
    },
    '!': (args, vars)=>{
        const [val] = args;
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return !evVal;
    },
    // ARITHMETIC OPERATORS
    '**': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res ** arg;
        }
        return res;
    },
    '*': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res * arg;
        }
        return res;
    },
    '/': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res / arg;
        }
        return res;
    },
    '%': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res % arg;
        }
        return res;
    },
    '+': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        if (args.length === 1) return +res;
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res + arg;
        }
        return res;
    },
    '-': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        if (args.length === 1) return -res;
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res - arg;
        }
        return res;
    },
    // RELATIONAL OPERATORS
    '<': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last < cur)) return false;
            last = cur;
        }
        return true;
    },
    '>': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last > cur)) return false;
            last = cur;
        }
        return true;
    },
    '<=': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last <= cur)) return false;
            last = cur;
        }
        return true;
    },
    '>=': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last >= cur)) return false;
            last = cur;
        }
        return true;
    },
    'instanceof': (args, vars)=>{
        const [lhs, rhs] = args;
        const evLhs = $9f17818e370d2647$var$_evaluate(lhs, vars);
        const evRhs = $9f17818e370d2647$var$_evaluate(rhs, vars);
        return evLhs instanceof evRhs;
    },
    'in': (args, vars)=>{
        const [lhs, rhs] = args;
        const evLhs = $9f17818e370d2647$var$_evaluate(lhs, vars);
        const evRhs = $9f17818e370d2647$var$_evaluate(rhs, vars);
        return evLhs in evRhs;
    },
    // EQUALITY OPERATORS
    '==': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last == cur)) return false;
            last = cur;
        }
        return true;
    },
    '!=': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last != cur)) return false;
            last = cur;
        }
        return true;
    },
    '===': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last === cur)) return false;
            last = cur;
        }
        return true;
    },
    '!==': (args, vars)=>{
        for(let last = $9f17818e370d2647$var$_evaluate(args[0], vars), idx = 1; idx < args.length; idx++){
            const cur = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            if (!(last !== cur)) return false;
            last = cur;
        }
        return true;
    },
    // BITWISE SHIFT OPERATORS
    '<<': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res << arg;
        }
        return res;
    },
    '>>': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res >> arg;
        }
        return res;
    },
    '>>>': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res >>> arg;
        }
        return res;
    },
    // BINARY BITWISE OPERATORS
    '&': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res & arg;
        }
        return res;
    },
    '|': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res | arg;
        }
        return res;
    },
    '^': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            const arg = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            res = res ^ arg;
        }
        return res;
    },
    // BINARY LOGICAL OPERATORS
    '&&': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            if (!res) break;
            res = $9f17818e370d2647$var$_evaluate(args[idx], vars);
        }
        return res;
    },
    '||': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            if (res) break;
            res = $9f17818e370d2647$var$_evaluate(args[idx], vars);
        }
        return res;
    },
    '??': (args, vars)=>{
        let res = $9f17818e370d2647$var$_evaluate(args[0], vars);
        for(let idx = 1, len = args.length; idx < len; idx++){
            if (res != null) break;
            res = $9f17818e370d2647$var$_evaluate(args[idx], vars);
        }
        return res;
    },
    // CONDITIONAL (TERNARY) OPERATOR
    '?:': (args, vars)=>{
        const [cond, trueExp, falseExp] = args;
        const evCond = $9f17818e370d2647$var$_evaluate(cond, vars);
        return evCond ? $9f17818e370d2647$var$_evaluate(trueExp, vars) : $9f17818e370d2647$var$_evaluate(falseExp, vars);
    },
    // ASSIGNMENT OPERATORS
    '=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] = evVal;
    },
    '*=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] *= evVal;
    },
    '/=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] /= evVal;
    },
    '%=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] %= evVal;
    },
    '+=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] += evVal;
    },
    '-=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] -= evVal;
    },
    '<<=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] <<= evVal;
    },
    '>>=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] >>= evVal;
    },
    '>>>=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] >>>= evVal;
    },
    '&=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] &= evVal;
    },
    '^=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] ^= evVal;
    },
    '|=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] |= evVal;
    },
    '**=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] **= evVal;
    },
    '&&=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] &&= evVal;
    },
    '||=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] ||= evVal;
    },
    '??=': (args, vars)=>{
        const [obj, key, val] = args;
        const evObj = $9f17818e370d2647$var$_evaluate(obj, vars);
        const evKey = $9f17818e370d2647$var$_evaluate(key, vars);
        const evVal = $9f17818e370d2647$var$_evaluate(val, vars);
        return evObj[evKey] ??= evVal;
    },
    // COMMA OPERATOR
    ',': (args, vars)=>{
        let res;
        for(let idx = 0, len = args.length; idx < len; idx++)res = $9f17818e370d2647$var$_evaluate(args[idx], vars);
        return res;
    },
    // TRY CATCH FINALLY OPERATOR
    'try': (args, vars)=>{
        const [tryExp, catchExp, finExp] = args;
        let res;
        try {
            res = $9f17818e370d2647$var$_evaluate(tryExp, vars);
        } catch (err) {
            vars.push({
                error: err
            });
            let errRes;
            try {
                errRes = $9f17818e370d2647$var$_evaluate(catchExp, vars);
            } finally{
                vars.pop();
            }
            if (errRes !== undefined) res = errRes;
            else throw err;
        } finally{
            const finRes = $9f17818e370d2647$var$_evaluate(finExp, vars);
            if (finRes !== undefined) res = finRes;
        }
        return res;
    },
    // VARS OPERATOR
    'block': (args, vars)=>{
        let res;
        vars.push({});
        try {
            for(let idx = 0, len = args.length; idx < len; idx++)res = $9f17818e370d2647$var$_evaluate(args[idx], vars);
        } finally{
            vars.pop();
        }
        return res;
    },
    'blockof': (args, vars)=>{
        const [name] = args;
        const evName = $9f17818e370d2647$var$_evaluate(name, vars);
        return $9f17818e370d2647$var$getBlockOf(evName, vars);
    },
    'var': (args, vars)=>{
        const [name] = args;
        const evName = $9f17818e370d2647$var$_evaluate(name, vars);
        return $9f17818e370d2647$var$getBlockOf(evName, vars)?.[evName];
    },
    'let': (args, vars)=>{
        const [name, val] = args;
        const evName = $9f17818e370d2647$var$_evaluate(name, vars);
        let curBlock = vars[vars.length - 1];
        let block = $9f17818e370d2647$export$38a950f590cd095a.get(curBlock);
        if (block !== undefined) delete block[evName];
        curBlock[evName] = $9f17818e370d2647$var$_evaluate(val, vars);
    }
};
function $9f17818e370d2647$export$c1b1cab21b1c5729(name, cls) {
    const operator = (args, vars)=>{
        const len = args.length;
        const evArgs = new Array(len);
        for(let idx = 0; idx < len; idx++)evArgs.push($9f17818e370d2647$var$_evaluate(args[idx], vars));
        return new cls(...evArgs);
    };
    $9f17818e370d2647$export$ccbce4efa7f8029b[name] = operator;
}
function $9f17818e370d2647$export$7601906c6214ec8a(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = (args, vars)=>{
            const val = $9f17818e370d2647$var$_evaluate(args[0], vars);
            if (val === undefined) return obj[name];
            return obj[name] = val;
        };
        $9f17818e370d2647$export$ccbce4efa7f8029b[`${prefix}${name}${suffix}`] = operator;
    }
}
function $9f17818e370d2647$export$e806d9914ada2507(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = (args, vars)=>{
            const len = args.length;
            const evArgs = new Array(len);
            for(let idx = 0; idx < len; idx++)evArgs[idx] = $9f17818e370d2647$var$_evaluate(args[idx], vars);
            return obj[name](...evArgs);
        };
        $9f17818e370d2647$export$ccbce4efa7f8029b[`${prefix}${name}${suffix}`] = operator;
    }
}
function $9f17818e370d2647$export$1beeb2550b2e76cb(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = (args, vars)=>{
            const inst = $9f17818e370d2647$var$_evaluate(args[0], vars);
            const evVal = $9f17818e370d2647$var$_evaluate(args[1], vars);
            if (evVal === undefined) return inst[name];
            return inst[name] = evVal;
        };
        $9f17818e370d2647$export$ccbce4efa7f8029b[`${prefix}${name}${suffix}`] = operator;
    }
}
function $9f17818e370d2647$export$4d823ceaa1e31164(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = (args, vars)=>{
            const inst = $9f17818e370d2647$var$_evaluate(args[0], vars);
            const len = args.length;
            const evArgs = new Array(len);
            for(let idx = 1; idx < len; idx++)evArgs.push($9f17818e370d2647$var$_evaluate(args[idx], vars));
            return inst[name](...evArgs);
        };
        $9f17818e370d2647$export$ccbce4efa7f8029b[`${prefix}${name}${suffix}`] = operator;
    }
}
function $9f17818e370d2647$export$fef61f332f2c0afc(rule, vars) {
    if (rule && typeof rule === 'object' && !Array.isArray(rule)) for(const key in rule){
        const op = $9f17818e370d2647$export$ccbce4efa7f8029b[key];
        if (op === undefined) break;
        return op(rule[key], vars);
    }
    return rule;
}
const $9f17818e370d2647$var$_evaluate = $9f17818e370d2647$export$fef61f332f2c0afc;
function $9f17818e370d2647$export$2e2bcd8739ae039(rule, data) {
    const vars = data === undefined ? [] : [
        data
    ];
    vars.push({});
    return $9f17818e370d2647$var$_evaluate(rule, vars);
}



const $2789b7098eece610$var$_evaluate = (0, $9f17818e370d2647$export$fef61f332f2c0afc);
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['decodeURI()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return decodeURI(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['decodeURIComponent()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return decodeURIComponent(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['encodeURI()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return encodeURI(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['encodeURIComponent()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return encodeURIComponent(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['isFinite()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return isFinite(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['isNaN()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return isNaN(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['parseFloat()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return parseFloat(evVal);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['parseInt()'] = (args, vars)=>{
    const [val] = args;
    const evVal = $2789b7098eece610$var$_evaluate(val, vars);
    return parseInt(evVal);
};



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
(0, $9f17818e370d2647$export$e806d9914ada2507)('Intl.', '()', Intl, [
    'getCanonicalLocales',
    'supportedValuesOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
(0, $9f17818e370d2647$export$e806d9914ada2507)('JSON.', '()', JSON, [
    'isRawJSON',
    'parse',
    'rawJSON',
    'stringify'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
(0, $9f17818e370d2647$export$7601906c6214ec8a)('Math.', '', Math, [
    'E',
    'LN10',
    'LN2',
    'LOG10E',
    'LOG2E',
    'PI',
    'SQRT1_2',
    'SQRT2'
]);
(0, $9f17818e370d2647$export$e806d9914ada2507)('Math.', '()', Math, [
    'abs',
    'acos',
    'acosh',
    'asin',
    'asinh',
    'atan',
    'atan2',
    'atanh',
    'cbrt',
    'ceil',
    'clz32',
    'cos',
    'cosh',
    'exp',
    'expm1',
    'f16round',
    'floor',
    'fround',
    'hypot',
    'imul',
    'log',
    'log10',
    'log1p',
    'log2',
    'max',
    'min',
    'pow',
    'random',
    'round',
    'sign',
    'sin',
    'sinh',
    'sqrt',
    'sumPrecise',
    'tan',
    'tanh',
    'trunc'
]);



const $8c3bd9c02843f825$var$_evaluate = (0, $9f17818e370d2647$export$fef61f332f2c0afc);
function $8c3bd9c02843f825$export$2e2bcd8739ae039(args, vars, keys, startIdx) {
    const block = {};
    const argLen = args.length;
    const keyLen = keys.length;
    let cbkRes;
    vars.push(block);
    const cbk = (...cbkArgs)=>{
        for(let keyIdx = 0; keyIdx < keyLen; keyIdx++)block[keys[keyIdx]] = cbkArgs[keyIdx];
        for(let argIdx = startIdx; argIdx < argLen; argIdx++)cbkRes = $8c3bd9c02843f825$var$_evaluate(args[argIdx], vars);
        return cbkRes;
    };
    return cbk;
}



const $cd456d6c6ddcdb60$var$_evaluate = (0, $9f17818e370d2647$export$fef61f332f2c0afc);
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array'] = ()=>{
    return Array;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Array()', Array);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array.from()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = Array.from(arr, cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array.fromAsync()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = Array.fromAsync(arr, cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$e806d9914ada2507)('Array.', '()', Array, [
    'isArray',
    'of'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('Array:', '', [
    'length'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:every()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.every(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:filter()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.filter(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:find()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.find(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:findIndex()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.findIndex(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:findLast()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.findLast(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:findLastIndex()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.findLastIndex(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:flatMap()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.flatMap(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:forEach()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.forEach(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:map()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.map(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:reduce()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'accumulator',
        'element',
        'index'
    ], 2);
    const init = $cd456d6c6ddcdb60$var$_evaluate(args[1], vars);
    let res;
    try {
        res = arr.reduce(cbk, init);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:reduceRight()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'accumulator',
        'element',
        'index'
    ], 2);
    const init = $cd456d6c6ddcdb60$var$_evaluate(args[1], vars);
    let res;
    try {
        res = arr.reduceRight(cbk, init);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:some()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element',
        'index'
    ], 1);
    let res;
    try {
        res = arr.some(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:sort()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element1',
        'element2'
    ], 1);
    let res;
    try {
        res = arr.sort(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Array:toSorted()'] = (args, vars)=>{
    const arr = $cd456d6c6ddcdb60$var$_evaluate(args[0], vars);
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'element1',
        'element2'
    ], 1);
    let res;
    try {
        res = arr.toSorted(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Array:', '()', [
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



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['ArrayBuffer'] = ()=>{
    return ArrayBuffer;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('ArrayBuffer()', ArrayBuffer);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('ArrayBuffer.', '()', ArrayBuffer, [
    'isView'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('ArrayBuffer:', '', [
    'byteLength',
    'detached',
    'maxByteLength',
    'resizable'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('ArrayBuffer:', '()', [
    'resize',
    'slice',
    'transfer',
    'transferToFixedLength'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Boolean'] = ()=>{
    return Boolean;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Boolean()', Boolean);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Boolean:', '()', [
    'toString',
    'valueOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Date'] = ()=>{
    return Date;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Date()', Date);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('Date.', '()', Date, [
    'now',
    'parse',
    'UTC'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Date:', '()', [
    'getDate',
    'getDay',
    'getFullYear',
    'getHours',
    'getMilliseconds',
    'getMinutes',
    'getMonth',
    'getSeconds',
    'getTime',
    'getTimezoneOffset',
    'getUTCDate',
    'getUTCDay',
    'getUTCFullYear',
    'getUTCHours',
    'getUTCMilliseconds',
    'getUTCMinutes',
    'getUTCMonth',
    'getUTCSeconds',
    'getYear',
    'setDate',
    'setFullYear',
    'setHours',
    'setMilliseconds',
    'setMinutes',
    'setMonth',
    'setSeconds',
    'setTime',
    'setUTCDate',
    'setUTCFullYear',
    'setUTCHours',
    'setUTCMilliseconds',
    'setUTCMinutes',
    'setUTCMonth',
    'setUTCSeconds',
    'setYear',
    'toDateString',
    'toGMTString',
    'toISOString',
    'toJSON',
    'toLocaleDateString',
    'toLocaleString',
    'toLocaleTimeString',
    'toString',
    'toTimeString',
    'toUTCString',
    'valueOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Number'] = ()=>{
    return Number;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Number()', Number);
// STATIC PROPERTIES
(0, $9f17818e370d2647$export$7601906c6214ec8a)('Number.', '', Number, [
    'EPSILON',
    'MAX_SAFE_INTEGER',
    'MAX_VALUE',
    'MIN_SAFE_INTEGER',
    'MIN_VALUE',
    'NaN',
    'NEGATIVE_INFINITY',
    'POSITIVE_INFINITY'
]);
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('Number.', '()', Number, [
    'isFinite',
    'isInteger',
    'isNaN',
    'isSafeInteger',
    'parseFloat',
    'parseInt'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Number:', '()', [
    'toExponential',
    'toFixed',
    'toLocaleString',
    'toPrecision',
    'toString',
    'valueOf'
]);




const $488bb3a67d97a5d7$var$_evaluate = (0, $9f17818e370d2647$export$fef61f332f2c0afc);
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Map'] = ()=>{
    return Map;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Map()', Map);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('Map.', '()', Map, [
    'groupBy'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('Map:', '', [
    'size'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Map:forEach()'] = (args, vars)=>{
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'value',
        'key'
    ], 1);
    const map = $488bb3a67d97a5d7$var$_evaluate(args[0], vars);
    let res;
    try {
        res = map.forEach(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Map:getOrInsertComputed()'] = (args, vars)=>{
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'key'
    ], 1);
    const map = $488bb3a67d97a5d7$var$_evaluate(args[0], vars);
    let res;
    try {
        res = map.getOrInsertComputed(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Map:', '()', [
    'clear',
    'delete',
    'entries',
    'get',
    'getOrInsert',
    'has',
    'keys',
    'set',
    'values'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Object'] = ()=>{
    return Object;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Object()', Object);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('Object.', '()', Object, [
    'assign',
    'create',
    'defineProperties',
    'defineProperty',
    'entries',
    'freeze',
    'fromEntries',
    'getOwnPropertyDescriptor',
    'getOwnPropertyDescriptors',
    'getOwnPropertyNames',
    'getOwnPropertySymbols',
    'getPrototypeOf',
    'groupBy',
    'hasOwn',
    'is',
    'isExtensible',
    'isFrozen',
    'isSealed',
    'keys',
    'preventExtensions',
    'seal',
    'setPrototypeOf',
    'values'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Object:', '()', [
    // '__defineGetter__',
    // '__defineSetter__',
    // '__lookupGetter__',
    // '__lookupSetter__',
    // '__proto__',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['RegExp'] = ()=>{
    return RegExp;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('RegExp()', RegExp);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('RegExp.', '()', RegExp, [
    'escape'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('RegExp:', '', [
    'dotAll',
    'flags',
    'global',
    'hasIndices',
    'ignoreCase',
    'lastIndex',
    'multiline',
    'source',
    'sticky',
    'unicode',
    'unicodeSets'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('RegExp:', '()', [
    'exec',
    'test',
    'toString'
]);




const $3441bb4922c98b44$var$_evaluate = (0, $9f17818e370d2647$export$fef61f332f2c0afc);
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Set'] = ()=>{
    return String;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Set()', Set);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('Set:', '', [
    'size'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Map:forEach()'] = (args, vars)=>{
    const cbk = (0, $8c3bd9c02843f825$export$2e2bcd8739ae039)(args, vars, [
        'value',
        'key'
    ], 1);
    const set = $3441bb4922c98b44$var$_evaluate(args[0], vars);
    let res;
    try {
        res = set.forEach(cbk);
    } finally{
        vars.pop();
    }
    return res;
};
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Set:', '()', [
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
    'values'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['String'] = ()=>{
    return String;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('String()', String);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('String.', '()', String, [
    'fromCharCode',
    'fromCodePoint',
    'raw'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('String:', '', [
    'length'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('String:', '()', [
    'at',
    'charAt',
    'charCodeAt',
    'codePointAt',
    'concat',
    'endsWith',
    'includes',
    'indexOf',
    'isWellFormed',
    'lastIndexOf',
    'localeCompare',
    'match',
    'matchAll',
    'normalize',
    'padEnd',
    'padStart',
    'repeat',
    'replace',
    'replaceAll',
    'search',
    'slice',
    'split',
    'startsWith',
    'sub',
    'substring',
    'toLocaleLowerCase',
    'toLocaleUpperCase',
    'toLowerCase',
    'toString',
    'toUpperCase',
    'toWellFormed',
    'trim',
    'trimEnd',
    'trimLeft',
    'trimRight',
    'trimStart',
    'valueOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['Uint8Array'] = ()=>{
    return Uint8Array;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('Uint8Array()', Uint8Array);
// STATIC PROPERTIES
(0, $9f17818e370d2647$export$7601906c6214ec8a)('Uint8Array.', '', Uint8Array, [
    'BYTES_PER_ELEMENT'
]);
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('Uint8Array.', '()', Uint8Array, [
    'fromBase64',
    'fromHex'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('Uint8Array:', '', [
    'BYTES_PER_ELEMENT'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('Uint8Array:', '()', [
    'setFromBase64',
    'setFromHex',
    'toBase64',
    'toHex'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/URL
// CLASS AND CONSTRUCTOR
(0, $9f17818e370d2647$export$ccbce4efa7f8029b)['URL'] = ()=>{
    return URL;
};
(0, $9f17818e370d2647$export$c1b1cab21b1c5729)('URL()', URL);
// STATIC PROPERTIES
// STATIC METHODS
(0, $9f17818e370d2647$export$e806d9914ada2507)('URL.', '()', URL, [
    'canParse',
    'createObjectURL',
    'parse',
    'revokeObjectURL'
]);
// INSTANCE PROPERTIES
(0, $9f17818e370d2647$export$1beeb2550b2e76cb)('URL:', '', [
    'hash',
    'host',
    'hostname',
    'href',
    'origin',
    'password',
    'pathname',
    'port',
    'protocol',
    'search',
    'searchParams',
    'username'
]);
// INSTANCE METHODS
(0, $9f17818e370d2647$export$4d823ceaa1e31164)('URL:', '()', [
    'toJSON',
    'toString'
]);


function $4668f03064cd1df8$var$insertHTML(...htmlStrings) {
    document.body.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}
function $4668f03064cd1df8$var$insertLogic(rule, data) {
    $4668f03064cd1df8$var$insertHTML('<div class="logic">', '<pre><code>jsJsonLogic(', JSON.stringify(rule, null, 2) ?? 'undefined', ', ', JSON.stringify(data, null, 2) ?? 'undefined', ');</code></pre>', '<pre><code>', JSON.stringify((0, $9f17818e370d2647$export$2e2bcd8739ae039)(rule, data), null, 2) ?? 'undefined', '</code></pre>', '</div>');
}
$4668f03064cd1df8$var$insertHTML('<h1>JS JSON Logic</h1>');
$4668f03064cd1df8$var$insertHTML(`<pre><code>${JSON.stringify(Object.keys((0, $9f17818e370d2647$export$ccbce4efa7f8029b)), null, 2)}</code></pre>`);
$4668f03064cd1df8$var$insertHTML('<h2>Primary Expressions</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Undefined Literal</h3>');
$4668f03064cd1df8$var$insertLogic({
    'undefined': []
});
$4668f03064cd1df8$var$insertLogic({
    'typeof': [
        {
            'undefined': []
        }
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Left Hand Side Expressions</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Property Accessors</h3>');
$4668f03064cd1df8$var$insertLogic({
    '.': [
        {
            'project': {
                'name': 'ProjectName'
            }
        },
        'project'
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '.': [
        {
            'project': {
                'name': 'ProjectName'
            }
        },
        'project',
        'name'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Optional Chaining</h3>');
$4668f03064cd1df8$var$insertLogic({
    '?.': [
        {
            'project': {
                'name': 'ProjectName'
            }
        },
        'project'
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '?.': [
        {
            'project': {
                'name': 'ProjectName'
            }
        },
        'random',
        'random'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Unary Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>delete</h3>');
$4668f03064cd1df8$var$insertLogic({
    'delete': [
        {
            'var': [
                'project'
            ]
        },
        'name'
    ]
}, {
    'project': {
        'name': 'ProjectName'
    }
});
$4668f03064cd1df8$var$insertHTML('<h3>void</h3>');
$4668f03064cd1df8$var$insertLogic({
    'void': [
        true,
        123,
        'string'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>typeof</h3>');
$4668f03064cd1df8$var$insertLogic({
    'typeof': [
        true
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise NOT</h3>');
$4668f03064cd1df8$var$insertLogic({
    '~': [
        5
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Logical NOT</h3>');
$4668f03064cd1df8$var$insertLogic({
    '!': [
        false
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Arithmetic Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Exponentiation</h3>');
$4668f03064cd1df8$var$insertLogic({
    '**': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Multiplication</h3>');
$4668f03064cd1df8$var$insertLogic({
    '*': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Division</h3>');
$4668f03064cd1df8$var$insertLogic({
    '/': [
        4,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Remainder</h3>');
$4668f03064cd1df8$var$insertLogic({
    '%': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Addition / Unary Plus</h3>');
$4668f03064cd1df8$var$insertLogic({
    '+': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '+': [
        '3'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Subtraction / Unary Negation</h3>');
$4668f03064cd1df8$var$insertLogic({
    '-': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '-': [
        '3'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Relational Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Less Than</h3>');
$4668f03064cd1df8$var$insertLogic({
    '<': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '<': [
        1,
        2,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Greater Than</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>': [
        3,
        2
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '>': [
        1,
        2,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Less Than Or Equal</h3>');
$4668f03064cd1df8$var$insertLogic({
    '<=': [
        1,
        2
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '<=': [
        3,
        3
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '<=': [
        2,
        1
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Greater Than Or Equal</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>=': [
        3,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Instance Of</h3>');
$4668f03064cd1df8$var$insertLogic({
    'instanceof': [
        {
            'String()': [
                'test'
            ]
        },
        {
            'String': []
        }
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>In</h3>');
$4668f03064cd1df8$var$insertLogic({
    'in': [
        'project',
        {
            'project': 'ProjectName'
        }
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Equality Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Equality</h3>');
$4668f03064cd1df8$var$insertLogic({
    '==': [
        1,
        '1'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Inequality</h3>');
$4668f03064cd1df8$var$insertLogic({
    '!=': [
        1,
        '1'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Strict Equality</h3>');
$4668f03064cd1df8$var$insertLogic({
    '===': [
        1,
        '1'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Strict Inequality</h3>');
$4668f03064cd1df8$var$insertLogic({
    '!==': [
        1,
        '1'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Bitwise Shift Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Left Shift</h3>');
$4668f03064cd1df8$var$insertLogic({
    '<<': [
        5,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Right Shift</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>>': [
        5,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Unsigned Right Shift</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>>>': [
        5,
        2
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Binary Bitwise Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise AND</h3>');
$4668f03064cd1df8$var$insertLogic({
    '&': [
        5,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise OR</h3>');
$4668f03064cd1df8$var$insertLogic({
    '|': [
        5,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise XOR</h3>');
$4668f03064cd1df8$var$insertLogic({
    '^': [
        5,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Binary Logical Operators</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>Logical AND</h3>');
$4668f03064cd1df8$var$insertLogic({
    '&&': [
        true,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Logical OR</h3>');
$4668f03064cd1df8$var$insertLogic({
    '||': [
        true,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>Nullish Coalescing</h3>');
$4668f03064cd1df8$var$insertLogic({
    '??': [
        null,
        3
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Conditional (Ternary) Operator</h2>');
$4668f03064cd1df8$var$insertLogic({
    '?:': [
        true,
        'truthy',
        'falsy'
    ]
});
$4668f03064cd1df8$var$insertLogic({
    '?:': [
        0,
        'truthy',
        'falsy'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Assignment Operators</h2>');
$4668f03064cd1df8$var$insertLogic({
    '=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        123
    ]
}, {
    x: null
});
$4668f03064cd1df8$var$insertHTML('<h3>Multiplication Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '*=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 2
});
$4668f03064cd1df8$var$insertHTML('<h3>Division Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '/=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 4
});
$4668f03064cd1df8$var$insertHTML('<h3>Remainder Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '%=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 3
});
$4668f03064cd1df8$var$insertHTML('<h3>Addition Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '+=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 1
});
$4668f03064cd1df8$var$insertHTML('<h3>Subtraction Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '-=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 3
});
$4668f03064cd1df8$var$insertHTML('<h3>Left Shift Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '<<=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Right Shift Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>>=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Unsigned Right Shift Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '>>>=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise AND Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '&=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        3
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise OR Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '|=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        3
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Bitwise XOR Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '^=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        3
    ]
}, {
    'x': 5
});
$4668f03064cd1df8$var$insertHTML('<h3>Exponentiation Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '**=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        2
    ]
}, {
    'x': 2
});
$4668f03064cd1df8$var$insertHTML('<h3>Logical AND Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '&&=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        false
    ]
}, {
    'x': true
});
$4668f03064cd1df8$var$insertHTML('<h3>Logical OR Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '||=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        false
    ]
}, {
    'x': true
});
$4668f03064cd1df8$var$insertHTML('<h3>Nullish Coalescing Assignment</h3>');
$4668f03064cd1df8$var$insertLogic({
    '??=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        123
    ]
}, {
    'x': null
});
$4668f03064cd1df8$var$insertLogic({
    '??=': [
        {
            'blockof': [
                'x'
            ]
        },
        'x',
        123
    ]
}, {
    'x': 'abc'
});
$4668f03064cd1df8$var$insertHTML('<h2>Comma Operator</h2>');
$4668f03064cd1df8$var$insertLogic({
    ',': [
        null,
        true,
        123,
        'test'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Try</h2>');
$4668f03064cd1df8$var$insertLogic({
    'try': [
        123,
        {
            'var': [
                'error'
            ]
        }
    ]
});
$4668f03064cd1df8$var$insertLogic({
    'try': [
        123,
        {
            'var': [
                'error'
            ]
        },
        'finally'
    ]
});
$4668f03064cd1df8$var$insertLogic({
    'try': [
        {
            '=': [
                null,
                null,
                123
            ]
        },
        {
            '.': [
                {
                    'var': [
                        'error'
                    ]
                },
                'message'
            ]
        }
    ]
});
$4668f03064cd1df8$var$insertLogic({
    'try': [
        {
            '=': [
                null,
                null,
                123
            ]
        },
        {
            '.': [
                {
                    'var': [
                        'error'
                    ]
                },
                'message'
            ]
        },
        'finally'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Vars Operator</h2>');
$4668f03064cd1df8$var$insertHTML('<p><strong>TODO.</strong></p>');
$4668f03064cd1df8$var$insertHTML('<h2>Intl</h2>');
$4668f03064cd1df8$var$insertHTML('<p><strong>TODO.</strong></p>');
$4668f03064cd1df8$var$insertHTML('<h2>JSON</h2>');
$4668f03064cd1df8$var$insertHTML('<h3>isRawJSON</h3>');
$4668f03064cd1df8$var$insertLogic({
    'JSON.isRawJSON()': [
        {
            'JSON.rawJSON()': [
                12345
            ]
        }
    ]
});
$4668f03064cd1df8$var$insertLogic({
    'JSON.isRawJSON()': [
        '12345'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>parse</h3>');
$4668f03064cd1df8$var$insertLogic({
    'JSON.parse()': [
        '{ "x": "abc" }'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>rawJSON</h3>');
$4668f03064cd1df8$var$insertLogic({
    'JSON.rawJSON()': [
        '12345'
    ]
});
$4668f03064cd1df8$var$insertHTML('<h3>stringify</h3>');
$4668f03064cd1df8$var$insertLogic({
    'JSON.stringify()': [
        {
            'x': 'abc'
        }
    ]
});
$4668f03064cd1df8$var$insertHTML('<h2>Math</h2>');
$4668f03064cd1df8$var$insertHTML('<p><strong>TODO.</strong></p>');


//# sourceMappingURL=parcel.1a282472.js.map
