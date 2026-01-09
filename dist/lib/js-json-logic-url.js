import { addConstructorOperator, addInstMethodOperators, addInstPropOperators, addMethodOperators, operators } from './js-json-logic.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/URL
// CLASS AND CONSTRUCTOR
operators['URL'] = () => {
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
//# sourceMappingURL=js-json-logic-url.js.map