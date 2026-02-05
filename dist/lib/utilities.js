import { evaluate as ev, operators as ops } from './index.js';
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
ops['decodeURI()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return decodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
ops['decodeURIComponent()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return decodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
ops['encodeURI()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return encodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
ops['encodeURIComponent()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return encodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
ops['isFinite()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return isFinite(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
ops['isNaN()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    ;
    return isNaN(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
ops['parseFloat()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return parseFloat(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
ops['parseInt()'] = async (args, vars) => {
    const val = await ev(args[0], vars);
    return parseInt(val);
};
//# sourceMappingURL=utilities.js.map