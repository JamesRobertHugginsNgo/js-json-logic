import { addMethodOperators, addPropOperators } from './js-json-logic.js';

// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

addPropOperators('Math.', '', Math, [
	'E',
	'LN10',
	'LN2',
	'LOG10E',
	'LOG2E',
	'PI',
	'SQRT1_2',
	'SQRT2'
]);

addMethodOperators('Math.', '()', Math, [
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
