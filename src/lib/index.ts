export type Block = { [key: string]: any };
export type Operator = (args: any[], vars: Block[]) => Promise<any>;
export type Operators = { [key: string]: Operator };

export const operators: Operators = {};

export async function evaluate(rule: any, vars: Block[]): Promise<any> {
	if (rule && typeof rule === 'object' && !Array.isArray(rule)) {
		for (const key in rule) {
			const op = operators[key];
			if (op === undefined) {
				break;
			}
			return await op(rule[key], vars);
		}
	}
	return rule;
}

const ev = evaluate;

export default async function (rule: any, data?: Block): Promise<any> {
	const vars = data === undefined ? [] : [data];
	vars.push({});
	return await ev(rule, vars);
}
