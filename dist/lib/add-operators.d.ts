type Constructor<T> = new (...args: any[]) => T;
export declare function addConstructorOperator<T>(name: string, cls: Constructor<T>): void;
export declare function addConstantOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void;
export declare function addPropOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void;
export declare function addMethodOperators(prefix: string, suffix: string, obj: Record<string, any>, names: string[]): void;
export declare function addInstPropOperators(prefix: string, suffix: string, names: string[]): void;
export declare function addInstMethodOperators(prefix: string, suffix: string, names: string[]): void;
export {};
