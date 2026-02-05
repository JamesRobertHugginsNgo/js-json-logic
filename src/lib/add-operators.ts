import type { Block, Operator } from './index.js';
import { evaluate as ev, operators as ops } from './index.js';

type Constructor<T> = new (...args: any[]) => T;

export function addConstructorOperator<T>(name: string, cls: Constructor<T>): void {
	const operator: Operator = async (args, vars) => {
		const len = args.length;
		const arr = new Array(len);
		for (let idx = 0; idx < len; idx++) {
			const arg = await ev(args[idx], vars);
			arr[idx] = arg;
		}
		return new cls(...arr);
	}
	ops[name] = operator;
}

export function addConstantOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void {
	for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
		const name = names[nameIdx];
		const operator: Operator = async () => {
			return obj[name];
		};
		ops[`${prefix}${name}${suffix}`] = operator;
	}
}

export function addPropOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void {
	for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
		const name = names[nameIdx];
		const operator: Operator = async (args, vars) => {
			const val = await ev(args[0], vars);
			if (val === undefined) {
				return obj[name];
			}
			return obj[name] = val;
		};
		ops[`${prefix}${name}${suffix}`] = operator;
	}
}

export function addMethodOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void {
	for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
		const name = names[nameIdx];
		const operator: Operator = async (args, vars) => {
			const len = args.length;
			const arr = new Array(len);
			for (let idx = 0; idx < len; idx++) {
				const arg = await ev(args[idx], vars)
				arr[idx] = arg;
			}
			return obj[name](...arr);
		};
		ops[`${prefix}${name}${suffix}`] = operator;
	}
}

export function addInstPropOperators(prefix: string, suffix: string, names: string[]): void {
	for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
		const name = names[nameIdx];
		const operator: Operator = async (args, vars) => {
			const inst = await ev(args[0], vars);
			const val = await ev(args[1], vars);
			if (val === undefined) {
				return inst[name];
			}
			return inst[name] = val;
		};
		ops[`${prefix}${name}${suffix}`] = operator;
	}
}

export function addInstMethodOperators(prefix: string, suffix: string, names: string[]): void {
	for (let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++) {
		const name = names[nameIdx];
		const operator: Operator = async (args, vars) => {
			const inst = await ev(args[0], vars);
			const len = args.length;
			const arr = new Array(len);
			for (let idx = 1; idx < len; idx++) {
				const arg = await ev(args[idx], vars);
				arr[idx] = arg;
			}
			return inst[name](...arr);
		};
		ops[`${prefix}${name}${suffix}`] = operator;
	}
}
