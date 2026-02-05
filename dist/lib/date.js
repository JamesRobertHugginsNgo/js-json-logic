import { addConstructorOperator, addInstMethodOperators, addMethodOperators } from './add-operators.js';
import { operators as ops } from './index.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// CLASS AND CONSTRUCTOR
ops['Date'] = async () => {
    return Date;
};
addConstructorOperator('Date()', Date);
// STATIC PROPERTIES
// STATIC METHODS
addMethodOperators('Date.', '()', Date, [
    'now',
    'parse',
    'UTC'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
addInstMethodOperators('Date:', '()', [
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
//# sourceMappingURL=date.js.map