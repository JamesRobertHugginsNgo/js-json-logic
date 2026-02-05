export const operators = {};
export async function evaluate(rule, vars) {
    if (rule && typeof rule === 'object' && !Array.isArray(rule)) {
        for (const key in rule) {
            const op = operators[key];
            if (op === undefined) {
                break;
            }
            return await op(rule[key], vars);
        }
    }
    return rule;
}
const ev = evaluate;
export default async function (rule, data) {
    const vars = data === undefined ? [] : [data];
    vars.push({});
    return await ev(rule, vars);
}
//# sourceMappingURL=index.js.map