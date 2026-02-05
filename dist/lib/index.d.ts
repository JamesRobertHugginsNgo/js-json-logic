export type Block = {
    [key: string]: any;
};
export type Operator = (args: any[], vars: Block[]) => Promise<any>;
export type Operators = {
    [key: string]: Operator;
};
export declare const operators: Operators;
export declare function evaluate(rule: any, vars: Block[]): Promise<any>;
export default function (rule: any, data?: Block): Promise<any>;
