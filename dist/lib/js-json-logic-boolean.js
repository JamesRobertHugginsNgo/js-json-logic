import { addConstructorOperator, addInstMethodOperators, operators } from './js-json-logic.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// CLASS AND CONSTRUCTOR
operators['Boolean'] = () => {
    return Boolean;
};
addConstructorOperator('Boolean()', Boolean);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
// INSTANCE METHODS
addInstMethodOperators('Boolean:', '()', [
    'toString',
    'valueOf'
]);
//# sourceMappingURL=js-json-logic-boolean.js.map