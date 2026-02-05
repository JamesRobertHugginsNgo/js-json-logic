import { evaluate as ev, operators as ops } from './index.js';
export function addConstructorOperator(name, cls) {
    const operator = async (args, vars) => {
        const len = args.length;
        const arr = new Array(len);
        for (let idx = 0; idx < len; idx++) {
            const arg = await ev(args[idx], vars);
            arr[idx] = arg;
        }
        return new cls(...arr);
    };
    ops[name] = operator;
}
export function addConstantOperators(prefix, suffix, obj, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = async () => {
            return obj[name];
        };
        ops[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addPropOperators(prefix, suffix, obj, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = async (args, vars) => {
            const val = await ev(args[0], vars);
            if (val === undefined) {
                return obj[name];
            }
            return obj[name] = val;
        };
        ops[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addMethodOperators(prefix, suffix, obj, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = async (args, vars) => {
            const len = args.length;
            const arr = new Array(len);
            for (let idx = 0; idx < len; idx++) {
                const arg = await ev(args[idx], vars);
                arr[idx] = arg;
            }
            return obj[name](...arr);
        };
        ops[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addInstPropOperators(prefix, suffix, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = async (args, vars) => {
            const inst = await ev(args[0], vars);
            const val = await ev(args[1], vars);
            if (val === undefined) {
                return inst[name];
            }
            return inst[name] = val;
        };
        ops[`${prefix}${name}${suffix}`] = operator;
    }
}
export function addInstMethodOperators(prefix, suffix, names) {
    for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
        const name = names[nameIdx];
        const operator = async (args, vars) => {
            const inst = await ev(args[0], vars);
            const len = args.length;
            const arr = new Array(len);
            for (let idx = 1; idx < len; idx++) {
                const arg = await ev(args[idx], vars);
                arr[idx] = arg;
            }
            return inst[name](...arr);
        };
        ops[`${prefix}${name}${suffix}`] = operator;
    }
}
//# sourceMappingURL=add-operators.js.map