import { evaluate, operators } from './js-json-logic.js';

const _evaluate = evaluate;

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
operators['decodeURI()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return decodeURI(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
operators['decodeURIComponent()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return decodeURIComponent(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
operators['encodeURI()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return encodeURI(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
operators['encodeURIComponent()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return encodeURIComponent(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
operators['isFinite()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return isFinite(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
operators['isNaN()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return isNaN(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
operators['parseFloat()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return parseFloat(evVal);
};

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
operators['parseInt()'] = (args, vars) => {
	const [val] = args;
	const evVal = _evaluate(val, vars);
	return parseInt(evVal);
};
