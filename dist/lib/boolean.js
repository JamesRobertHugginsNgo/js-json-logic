import { addConstructorOperator, addInstMethodOperators } from './add-operators.js';
import { operators as ops } from './index.js';
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// CLASS AND CONSTRUCTOR
ops['Boolean'] = async () => {
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
//# sourceMappingURL=boolean.js.map