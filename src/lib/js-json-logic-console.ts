// import type { Operators } from './js-json-logic.ts';

// import { compute, operators } from './js-json-logic.js';

// export const consoleOperators: Operators = {

// 	// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/console

// 	'console.assert': (args, vars) => {
// 		const cond = compute(args[0], vars);
// 		if (!cond) {
// 			console.assert(cond);
// 			return cond;
// 		}
// 		const res: any[] = [];
// 		for (let idx = 1; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.assert(cond, ...res);
// 		return cond;
// 	},
// 	// Note: console.clear operator has no implementation
// 	'console.count': (args, vars) => {
// 		const [label] = args;
// 		console.count(compute(label, vars));
// 	},
// 	'console.countReset': (args, vars) => {
// 		const [label] = args;
// 		console.countReset(compute(label, vars));
// 	},
// 	'console.debug': (args, vars) => {
// 		const res: any[] = [];
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.debug(...res);
// 		return res[res.length - 1];
// 	},
// 	'console.dir': (args, vars) => {
// 		const [obj, opt] = args;
// 		const res = compute(obj, vars);
// 		console.dirxml(res, compute(opt, vars));
// 		return res;
// 	},
// 	'console.dirxml': (args, vars) => {
// 		const [obj] = args;
// 		const res = compute(obj, vars);
// 		console.dirxml(res);
// 		return res;
// 	},
// 	'console.error': (args, vars) => {
// 		const res: any[] = [];
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.error(...res);
// 		return res[res.length - 1];
// 	},
// 	'console.group': (args, vars) => {
// 		console.group(compute(args[0], vars));
// 		const res: any[] = [];
// 		for (let idx = 1; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.groupEnd();
// 		return res[res.length - 1];
// 	},
// 	'console.groupCollapsed': (args, vars) => {
// 		console.groupCollapsed(compute(args[0], vars));
// 		let res: any = undefined;
// 		for (let idx = 1; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.groupEnd();
// 		return res[res.length - 1];
// 	},
// 	// Note: console.groupEnd operator has no implementation
// 	'console.info': (args, vars) => {
// 		let res: any = undefined;
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.info(...res);
// 		return res[res.length - 1];
// 	},
// 	'console.log': (args, vars) => {
// 		let res: any = undefined;
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.log(...res);
// 		return res[res.length - 1];
// 	},
// 	// Note: console.table operator has no implementation
// 	'console.time': (args, vars) => {
// 		console.time(compute(args[0], vars));
// 		let res: any = undefined;
// 		for (let idx = 1; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.timeEnd();
// 		return res[res.length - 1];
// 	},
// 	// Note: console.timeEnd operator has no implementation
// 	'console.timeLog': (args, vars) => {
// 		let res: any = undefined;
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.timeLog(...res);
// 		return res[res.length - 1];
// 	},
// 	'console.trace': (args, vars) => {
// 		let res: any = undefined;
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.trace(...res);
// 		return res[res.length - 1];
// 	},
// 	'console.warn': (args, vars) => {
// 		let res: any = undefined;
// 		for (let idx = 0; idx < args.length; idx++) {
// 			res.push(compute(args[idx], vars));
// 		}
// 		console.warn(...res);
// 		return res[res.length - 1];
// 	}
// };

// Object.assign(operators, consoleOperators);
