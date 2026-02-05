const $5002f5814ed49d1e$export$ccbce4efa7f8029b = {};
async function $5002f5814ed49d1e$export$fef61f332f2c0afc(rule, vars) {
    if (rule && typeof rule === 'object' && !Array.isArray(rule)) for(const key in rule){
        const op = $5002f5814ed49d1e$export$ccbce4efa7f8029b[key];
        if (op === undefined) break;
        return await op(rule[key], vars);
    }
    return rule;
}
const $5002f5814ed49d1e$var$ev = $5002f5814ed49d1e$export$fef61f332f2c0afc;
async function $5002f5814ed49d1e$export$2e2bcd8739ae039(rule, data) {
    const vars = data === undefined ? [] : [
        data
    ];
    vars.push({});
    return await $5002f5814ed49d1e$var$ev(rule, vars);
}


function $ae01560da9dc66d2$export$5a813221cd493211(...htmlStrings) {
    document.body.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}
async function $ae01560da9dc66d2$export$36a44be4e013c2ef(rule, data) {
    $ae01560da9dc66d2$export$5a813221cd493211('<div class="logic">', '<pre><code>jsJsonLogic(', JSON.stringify(rule, null, 2) ?? 'undefined', ', ', JSON.stringify(data, null, 2) ?? 'undefined', ');</code></pre>', '<pre><code>', JSON.stringify(await (0, $5002f5814ed49d1e$export$2e2bcd8739ae039)(rule, data), null, 2) ?? 'undefined', '</code></pre>', '<pre><code>', JSON.stringify(data, null, 2) ?? 'undefined', '</code></pre>', '</div>');
}




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// PRIMARY EXPRESSIONS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['undefined'] = async ()=>{
    return undefined;
};
// LEFT-HAND-SIDE EXPRESSIONS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['.'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res[arg];
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['?.'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res == null) break;
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res[arg];
    }
    return res;
};
// UNARY OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['delete'] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    return delete obj[key];
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['void'] = async (args, vars)=>{
    for(let idx = 0, len = args.length; idx < len; idx++)await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    return undefined;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['typeof'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return typeof val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['~'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return ~val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['!'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return !val;
};
// ARITHMETIC OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['**'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res ** arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['*'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res * arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['/'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res / arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['%'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res % arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['+'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    if (args.length === 1) return +res;
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res + arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['-'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    if (args.length === 1) return -res;
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res - arg;
    }
    return res;
};
// RELATIONAL OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['<'] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last < cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>'] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last > cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['<='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last <= cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last >= cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['instanceof'] = async (args, vars)=>{
    const lhs = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const rhs = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    return lhs instanceof rhs;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['in'] = async (args, vars)=>{
    const lhs = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const rhs = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    return lhs in rhs;
};
// EQUALITY OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['=='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last == cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['!='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last != cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['==='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last === cur)) return false;
        last = cur;
    }
    return true;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['!=='] = async (args, vars)=>{
    for(let last = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        if (!(last !== cur)) return false;
        last = cur;
    }
    return true;
};
// BITWISE SHIFT OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['<<'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res << arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>>'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res >> arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>>>'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res >>> arg;
    }
    return res;
};
// BINARY BITWISE OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['&'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res & arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['|'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res | arg;
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['^'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        res = res ^ arg;
    }
    return res;
};
// BINARY LOGICAL OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['&&'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (!res) break;
        res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['||'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res) break;
        res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['??'] = async (args, vars)=>{
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res != null) break;
        res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    }
    return res;
};
// CONDITIONAL (TERNARY) OPERATOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['?:'] = async (args, vars)=>{
    const cond = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return cond ? await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars) : await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
};
// ASSIGNMENT OPERATORS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] = val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['*='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] *= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['/='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] /= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['%='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] %= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['+='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] += val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['-='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] -= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['<<='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] <<= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>>='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] >>= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['>>>='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] >>>= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['&='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] &= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['^='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] ^= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['|='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] |= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['**='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] **= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['&&='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] &&= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['||='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] ||= val;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['??='] = async (args, vars)=>{
    const obj = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
    return obj[key] ??= val;
};
// COMMA OPERATOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[','] = async (args, vars)=>{
    let res;
    for(let idx = 0, len = args.length; idx < len; idx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    return res;
};
// TRY CATCH FINALLY OPERATOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['try'] = async (args, vars)=>{
    let res;
    try {
        const tryRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
        res = tryRes;
    } catch (error) {
        vars.push({
            error: error
        });
        let catchRes;
        try {
            catchRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
        } finally{
            vars.pop();
        }
        if (catchRes !== undefined) res = catchRes;
        else throw error;
    } finally{
        const finalRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[2], vars);
        if (finalRes !== undefined) res = finalRes;
    }
    return res;
};
// VARS OPERATOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['block'] = async (args, vars)=>{
    let res;
    vars.push({});
    try {
        for(let idx = 0, len = args.length; idx < len; idx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
    } finally{
        vars.pop();
    }
    return res;
};
const $258afd87269b007d$var$blockMap = new WeakMap();
function $258afd87269b007d$var$getBlockOf(vars, name) {
    let curBlock = vars[vars.length - 1];
    let block = $258afd87269b007d$var$blockMap.get(curBlock);
    if (block === undefined) {
        block = {};
        $258afd87269b007d$var$blockMap.set(curBlock, block);
    }
    if (Object.hasOwn(block, name)) return block[name];
    for(let idx = vars.length; --idx >= 0;){
        if (Object.hasOwn(vars[idx], name)) return block[name] = vars[idx];
    }
}
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['blockof'] = async (args, vars)=>{
    const name = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return $258afd87269b007d$var$getBlockOf(vars, name);
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['var'] = async (args, vars)=>{
    const name = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return $258afd87269b007d$var$getBlockOf(vars, name)?.[name];
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['let'] = async (args, vars)=>{
    const curBlock = vars[vars.length - 1];
    const name = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let block = $258afd87269b007d$var$blockMap.get(curBlock);
    if (block !== undefined) delete block[name];
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    curBlock[name] = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(val, vars);
};



// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['decodeURI()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return decodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['decodeURIComponent()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return decodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['encodeURI()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return encodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['encodeURIComponent()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return encodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['isFinite()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return isFinite(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['isNaN()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return isNaN(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['parseFloat()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return parseFloat(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['parseInt()'] = async (args, vars)=>{
    const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return parseInt(val);
};



function $37ebb26523d2445b$export$c1b1cab21b1c5729(name, cls) {
    const operator = async (args, vars)=>{
        const len = args.length;
        const arr = new Array(len);
        for(let idx = 0; idx < len; idx++){
            const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
            arr[idx] = arg;
        }
        return new cls(...arr);
    };
    (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[name] = operator;
}
function $37ebb26523d2445b$export$6df66edd06ede84b(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async ()=>{
            return obj[name];
        };
        (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[`${prefix}${name}${suffix}`] = operator;
    }
}
function $37ebb26523d2445b$export$7601906c6214ec8a(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
            if (val === undefined) return obj[name];
            return obj[name] = val;
        };
        (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[`${prefix}${name}${suffix}`] = operator;
    }
}
function $37ebb26523d2445b$export$e806d9914ada2507(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const len = args.length;
            const arr = new Array(len);
            for(let idx = 0; idx < len; idx++){
                const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
                arr[idx] = arg;
            }
            return obj[name](...arr);
        };
        (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[`${prefix}${name}${suffix}`] = operator;
    }
}
function $37ebb26523d2445b$export$1beeb2550b2e76cb(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
            const val = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
            if (val === undefined) return inst[name];
            return inst[name] = val;
        };
        (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[`${prefix}${name}${suffix}`] = operator;
    }
}
function $37ebb26523d2445b$export$4d823ceaa1e31164(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
            const len = args.length;
            const arr = new Array(len);
            for(let idx = 1; idx < len; idx++){
                const arg = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
                arr[idx] = arg;
            }
            return inst[name](...arr);
        };
        (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)[`${prefix}${name}${suffix}`] = operator;
    }
}


// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Intl.', '()', Intl, [
    'getCanonicalLocales',
    'supportedValuesOf'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
(0, $37ebb26523d2445b$export$e806d9914ada2507)('JSON.', '()', JSON, [
    'isRawJSON',
    'parse',
    'rawJSON',
    'stringify'
]);



// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
(0, $37ebb26523d2445b$export$6df66edd06ede84b)('Math.', '', Math, [
    'E',
    'LN10',
    'LN2',
    'LOG10E',
    'LOG2E',
    'PI',
    'SQRT1_2',
    'SQRT2'
]);
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Math.', '()', Math, [
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




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array'] = async ()=>{
    return Array;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Array()', Array);
// STATIC PROPERTIES
// STATIC METHODS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array.from()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            arr.push(res);
        }
    } finally{
        vars.pop();
    }
    return arr;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array.fromAsync()'] = (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array.from()'];
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Array.', '()', Array, [
    'isArray',
    'of'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('Array:', '', [
    'length'
]);
// INSTANCE METHODS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:every()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = true;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (!argRes) {
                res = false;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:filter()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (res) arr.push(el);
        }
    } finally{
        vars.pop();
    }
    return arr;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:find()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (argRes) {
                res = el;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:findIndex()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = -1;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (argRes) {
                res = idx;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:findLast()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res;
    try {
        for(let idx = inst.length; --idx >= 0;){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (argRes) {
                res = el;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:findLastIndex()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = -1;
    try {
        for(let idx = inst.length; --idx >= 0;){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (argRes) {
                res = idx;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:flatMap()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            arr.push(res);
        }
    } finally{
        vars.pop();
    }
    return arr.flat(1);
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:map()'] = (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array.from()'];
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:reduce()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:reduceRight()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    try {
        for(let idx = inst.length; --idx >= 0;){
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:some()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    let res = false;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[argIdx], vars);
            if (argRes) {
                res = true;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:sort()'] = async (args, vars)=>{
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    return inst.sort();
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:toSorted()'] = (0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Array:sort()'];
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Array:', '()', [
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
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['ArrayBuffer'] = async ()=>{
    return ArrayBuffer;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('ArrayBuffer()', ArrayBuffer);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('ArrayBuffer.', '()', ArrayBuffer, [
    'isView'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('ArrayBuffer:', '', [
    'byteLength',
    'detached',
    'maxByteLength',
    'resizable'
]);
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('ArrayBuffer:', '()', [
    'resize',
    'slice',
    'transfer',
    'transferToFixedLength'
]);




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Boolean'] = async ()=>{
    return Boolean;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Boolean()', Boolean);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Boolean:', '()', [
    'toString',
    'valueOf'
]);




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Date'] = async ()=>{
    return Date;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Date()', Date);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Date.', '()', Date, [
    'now',
    'parse',
    'UTC'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Date:', '()', [
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




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Map'] = async ()=>{
    return Map;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Map()', Map);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Map.', '()', Map, [
    'groupBy'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('Map:', '', [
    'size'
]);
// INSTANCE METHODS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Map:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    try {
        for (const [key, value] of inst){
            block['key'] = value;
            block['value'] = value;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Map:getOrInsertComputed()'] = async (args, vars)=>{
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    const key = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[1], vars);
    if (!inst.has(key)) {
        vars.push({
            key: key
        });
        try {
            let res;
            for(let idx = 2, len = args.length; idx < len; idx++)res = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
            inst.set(key, res);
        } finally{
            vars.pop();
        }
    }
    return inst.get(key);
};
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Map:', '()', [
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




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Number'] = async ()=>{
    return Number;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Number()', Number);
// STATIC PROPERTIES
(0, $37ebb26523d2445b$export$6df66edd06ede84b)('Number.', '', Number, [
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
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Number.', '()', Number, [
    'isFinite',
    'isInteger',
    'isNaN',
    'isSafeInteger',
    'parseFloat',
    'parseInt'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Number:', '()', [
    'toExponential',
    'toFixed',
    'toLocaleString',
    'toPrecision',
    'toString',
    'valueOf'
]);




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Object'] = async ()=>{
    return Object;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Object()', Object);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Object.', '()', Object, [
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
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Object:', '()', [
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
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['RegExp'] = async ()=>{
    return RegExp;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('RegExp()', RegExp);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('RegExp.', '()', RegExp, [
    'escape'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('RegExp:', '', [
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
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('RegExp:', '()', [
    'exec',
    'test',
    'toString'
]);




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Set'] = async ()=>{
    return Set;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Set()', Set);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('Set:', '', [
    'size'
]);
// INSTANCE METHODS
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Set:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[0], vars);
    try {
        for (const value of inst){
            block['value'] = value;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, $5002f5814ed49d1e$export$fef61f332f2c0afc)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Set:', '()', [
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
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['String'] = async ()=>{
    return String;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('String()', String);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('String.', '()', String, [
    'fromCharCode',
    'fromCodePoint'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('String:', '', [
    'length'
]);
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('String:', '()', [
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
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['Uint8Array'] = async ()=>{
    return Uint8Array;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('Uint8Array()', Uint8Array);
// STATIC PROPERTIES
(0, $37ebb26523d2445b$export$7601906c6214ec8a)('Uint8Array.', '', Uint8Array, [
    'BYTES_PER_ELEMENT'
]);
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('Uint8Array.', '()', Uint8Array, [
    'fromBase64',
    'fromHex'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('Uint8Array:', '', [
    'BYTES_PER_ELEMENT'
]);
// INSTANCE METHODS
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('Uint8Array:', '()', [
    'setFromBase64',
    'setFromHex',
    'toBase64',
    'toHex'
]);




// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/URL
// CLASS AND CONSTRUCTOR
(0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)['URL'] = async ()=>{
    return URL;
};
(0, $37ebb26523d2445b$export$c1b1cab21b1c5729)('URL()', URL);
// STATIC PROPERTIES
// STATIC METHODS
(0, $37ebb26523d2445b$export$e806d9914ada2507)('URL.', '()', URL, [
    'canParse',
    'createObjectURL',
    'parse',
    'revokeObjectURL'
]);
// INSTANCE PROPERTIES
(0, $37ebb26523d2445b$export$1beeb2550b2e76cb)('URL:', '', [
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
(0, $37ebb26523d2445b$export$4d823ceaa1e31164)('URL:', '()', [
    'toJSON',
    'toString'
]);


async function $4668f03064cd1df8$var$insertLogics() {
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h1>JS JSON Logic</h1>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)(`<pre><code>${JSON.stringify(Object.keys((0, $5002f5814ed49d1e$export$ccbce4efa7f8029b)), null, 2)}</code></pre>`);
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Primary Expressions</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Undefined Literal</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'undefined': []
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'typeof': [
            {
                'undefined': []
            }
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '=': [
            {
                'blockof': [
                    'key1'
                ]
            },
            'key1',
            {
                'undefined': []
            }
        ]
    }, {
        'key1': true,
        'key2': 123
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Left Hand Side Expressions</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Property Accessors</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'project'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Optional Chaining</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '?.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'project'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Unary Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>delete</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>void</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'void': [
            true,
            123,
            'string'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>typeof</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'typeof': [
            true
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise NOT</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '~': [
            5
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Logical NOT</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '!': [
            false
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Arithmetic Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Exponentiation</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '**': [
            3,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Multiplication</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '*': [
            3,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Division</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '/': [
            4,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Remainder</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '%': [
            3,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Addition / Unary Plus</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '+': [
            3,
            2
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '+': [
            '3'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Subtraction / Unary Negation</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '-': [
            3,
            2
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '-': [
            '3'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Relational Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Less Than</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<': [
            3,
            2
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<': [
            1,
            2,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Greater Than</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '>': [
            3,
            2
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '>': [
            1,
            2,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Less Than Or Equal</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<=': [
            1,
            2
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<=': [
            3,
            3
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<=': [
            2,
            1
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Greater Than Or Equal</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '>=': [
            3,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Instance Of</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>In</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'in': [
            'project',
            {
                'project': 'ProjectName'
            }
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Equality Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Equality</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '==': [
            1,
            '1'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Inequality</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '!=': [
            1,
            '1'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Strict Equality</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '===': [
            1,
            '1'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Strict Inequality</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '!==': [
            1,
            '1'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Bitwise Shift Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Left Shift</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '<<': [
            5,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Right Shift</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '>>': [
            5,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Unsigned Right Shift</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '>>>': [
            5,
            2
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Binary Bitwise Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise AND</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '&': [
            5,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise OR</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '|': [
            5,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise XOR</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '^': [
            5,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Binary Logical Operators</h2>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Logical AND</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '&&': [
            true,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Logical OR</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '||': [
            true,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Nullish Coalescing</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '??': [
            null,
            3
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Conditional (Ternary) Operator</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '?:': [
            true,
            'truthy',
            'falsy'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        '?:': [
            0,
            'truthy',
            'falsy'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Assignment Operators</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Multiplication Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Division Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Remainder Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Addition Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Subtraction Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Left Shift Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Right Shift Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Unsigned Right Shift Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise AND Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise OR Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Bitwise XOR Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Exponentiation Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Logical AND Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Logical OR Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h3>Nullish Coalescing Assignment</h3>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Comma Operator</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        ',': [
            null,
            true,
            123,
            'test'
        ]
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Try</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'try': [
            123,
            {
                'var': [
                    'error'
                ]
            }
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
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
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Vars Operator</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'blockof': [
            'project'
        ]
    }, {
        'project': 'ProjectName'
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'block': [
            {
                ',': [
                    {
                        'let': [
                            'a',
                            true
                        ]
                    },
                    {
                        'let': [
                            'b',
                            false
                        ]
                    },
                    {
                        'blockof': [
                            'a'
                        ]
                    }
                ]
            }
        ]
    }, {
        'project': 'ProjectName'
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'var': [
            'project'
        ]
    }, {
        'project': 'ProjectName'
    });
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>Utilities Operator</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'decodeURI()': [
            'https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'decodeURIComponent()': [
            'https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'encodeURI()': [
            'https://example.com/path?query=value'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'encodeURIComponent()': [
            'https://example.com/path?query=value'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'isFinite()': [
            123
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'isFinite()': [
            Infinity
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'isNaN()': [
            NaN
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'isNaN()': [
            123
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'parseFloat()': [
            '3.14'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'parseInt()': [
            '42'
        ]
    });
    // insertHTML('<h2>Intl</h2>');
    // insertHTML('<p><strong>TODO.</strong></p>');
    // insertHTML('<h2>JSON</h2>');
    // insertHTML('<h3>isRawJSON</h3>');
    // await insertLogic({ 'JSON.isRawJSON()': [{ 'JSON.rawJSON()': [12345] }] });
    // await insertLogic({ 'JSON.isRawJSON()': ['12345'] });
    // insertHTML('<h3>parse</h3>');
    // await insertLogic({ 'JSON.parse()': ['{ "x": "abc" }'] });
    // insertHTML('<h3>rawJSON</h3>');
    // await insertLogic({ 'JSON.rawJSON()': ['12345'] });
    // insertHTML('<h3>stringify</h3>');
    // await insertLogic({ 'JSON.stringify()': [{ 'x': 'abc' }] });
    // insertHTML('<h2>Math</h2>');
    // insertHTML('<p><strong>TODO.</strong></p>');
    (0, $ae01560da9dc66d2$export$5a813221cd493211)('<h2>String</h2>');
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String()': [
            12345
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String.fromCharCode()': [
            65,
            66,
            67
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String.fromCodePoint()': [
            128512,
            128513,
            128514
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String:length': [
            'Hello'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String:charAt()': [
            'Hello',
            1
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String:includes()': [
            'Hello, world!',
            'world'
        ]
    });
    await (0, $ae01560da9dc66d2$export$36a44be4e013c2ef)({
        'String:toUpperCase()': [
            'Hello, world!'
        ]
    });
}
$4668f03064cd1df8$var$insertLogics();


//# sourceMappingURL=parcel.c2dab911.js.map
