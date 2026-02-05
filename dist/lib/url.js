import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators } from './add-operators.js';
import { operators as ops } from './index.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/URL
// CLASS AND CONSTRUCTOR
ops['URL'] = async () => {
    return URL;
};
addConstructorOperator('URL()', URL);
// STATIC PROPERTIES
// STATIC METHODS
addMethodOperators('URL.', '()', URL, [
    'canParse',
    'createObjectURL',
    'parse',
    'revokeObjectURL'
]);
// INSTANCE PROPERTIES
addInstPropOperators('URL:', '', [
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
addInstMethodOperators('URL:', '()', [
    'toJSON',
    'toString'
]);
//# sourceMappingURL=url.js.map