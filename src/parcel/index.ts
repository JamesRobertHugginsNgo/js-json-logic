import { insertHTML, insertLogic } from './insert-html.js';

import { operators } from '../lib/index.js';

import '../lib/core.js';
import '../lib/utilities.js';

import '../lib/intl.js';
import '../lib/json.js';
import '../lib/math.js';

import '../lib/array.js';
import '../lib/arraybuffer.js';
import '../lib/boolean.js';
import '../lib/date.js';
import '../lib/map.js';
import '../lib/number.js';
import '../lib/object.js';
import '../lib/regexp.js';
import '../lib/set.js';
import '../lib/string.js';
import '../lib/uint8array.js';
import '../lib/url.js';

async function insertLogics(): Promise<void> {
	insertHTML('<h1>JS JSON Logic</h1>');
	insertHTML(`<pre><code>${JSON.stringify(Object.keys(operators), null, 2)}</code></pre>`);

	insertHTML('<h2>Primary Expressions</h2>');

	insertHTML('<h3>Undefined Literal</h3>');
	await insertLogic({ 'undefined': [] });
	await insertLogic({ 'typeof': [{ 'undefined': [] }] });
	await insertLogic({ '=': [{ 'blockof': ['key1'] }, 'key1', { 'undefined': [] }] }, { 'key1': true, 'key2': 123 });

	insertHTML('<h2>Left Hand Side Expressions</h2>');

	insertHTML('<h3>Property Accessors</h3>');
	await insertLogic({ '.': [{ 'project': { 'name': 'ProjectName' } }, 'project'] });
	await insertLogic({ '.': [{ 'project': { 'name': 'ProjectName' } }, 'project', 'name'] });

	insertHTML('<h3>Optional Chaining</h3>');
	await insertLogic({ '?.': [{ 'project': { 'name': 'ProjectName' } }, 'project'] });
	await insertLogic({ '?.': [{ 'project': { 'name': 'ProjectName' } }, 'random', 'random'] });

	insertHTML('<h2>Unary Operators</h2>');

	insertHTML('<h3>delete</h3>');
	await insertLogic({ 'delete': [{ 'var': ['project'] }, 'name'] }, { 'project': { 'name': 'ProjectName' } });

	insertHTML('<h3>void</h3>');
	await insertLogic({ 'void': [true, 123, 'string'] });

	insertHTML('<h3>typeof</h3>');
	await insertLogic({ 'typeof': [true] });

	insertHTML('<h3>Bitwise NOT</h3>');
	await insertLogic({ '~': [5] });

	insertHTML('<h3>Logical NOT</h3>');
	await insertLogic({ '!': [false] });

	insertHTML('<h2>Arithmetic Operators</h2>');

	insertHTML('<h3>Exponentiation</h3>');
	await insertLogic({ '**': [3, 2] });

	insertHTML('<h3>Multiplication</h3>');
	await insertLogic({ '*': [3, 2] });

	insertHTML('<h3>Division</h3>');
	await insertLogic({ '/': [4, 2] });

	insertHTML('<h3>Remainder</h3>');
	await insertLogic({ '%': [3, 2] });

	insertHTML('<h3>Addition / Unary Plus</h3>');
	await insertLogic({ '+': [3, 2] });
	await insertLogic({ '+': ['3'] });

	insertHTML('<h3>Subtraction / Unary Negation</h3>');
	await insertLogic({ '-': [3, 2] });
	await insertLogic({ '-': ['3'] });

	insertHTML('<h2>Relational Operators</h2>');

	insertHTML('<h3>Less Than</h3>');
	await insertLogic({ '<': [3, 2] });
	await insertLogic({ '<': [1, 2, 3] });

	insertHTML('<h3>Greater Than</h3>');
	await insertLogic({ '>': [3, 2] });
	await insertLogic({ '>': [1, 2, 3] });

	insertHTML('<h3>Less Than Or Equal</h3>');
	await insertLogic({ '<=': [1, 2] });
	await insertLogic({ '<=': [3, 3] });
	await insertLogic({ '<=': [2, 1] });

	insertHTML('<h3>Greater Than Or Equal</h3>');
	await insertLogic({ '>=': [3, 3] });

	insertHTML('<h3>Instance Of</h3>');
	await insertLogic({ 'instanceof': [{ 'String()': ['test'] }, { 'String': [] }] });

	insertHTML('<h3>In</h3>');
	await insertLogic({ 'in': ['project', { 'project': 'ProjectName' }] });

	insertHTML('<h2>Equality Operators</h2>');

	insertHTML('<h3>Equality</h3>');
	await insertLogic({ '==': [1, '1'] });

	insertHTML('<h3>Inequality</h3>');
	await insertLogic({ '!=': [1, '1'] });

	insertHTML('<h3>Strict Equality</h3>');
	await insertLogic({ '===': [1, '1'] });

	insertHTML('<h3>Strict Inequality</h3>');
	await insertLogic({ '!==': [1, '1'] });

	insertHTML('<h2>Bitwise Shift Operators</h2>');

	insertHTML('<h3>Left Shift</h3>');
	await insertLogic({ '<<': [5, 2] });

	insertHTML('<h3>Right Shift</h3>');
	await insertLogic({ '>>': [5, 2] });

	insertHTML('<h3>Unsigned Right Shift</h3>');
	await insertLogic({ '>>>': [5, 2] });

	insertHTML('<h2>Binary Bitwise Operators</h2>');

	insertHTML('<h3>Bitwise AND</h3>');
	await insertLogic({ '&': [5, 3] });

	insertHTML('<h3>Bitwise OR</h3>');
	await insertLogic({ '|': [5, 3] });

	insertHTML('<h3>Bitwise XOR</h3>');
	await insertLogic({ '^': [5, 3] });

	insertHTML('<h2>Binary Logical Operators</h2>');

	insertHTML('<h3>Logical AND</h3>');
	await insertLogic({ '&&': [true, 3] });

	insertHTML('<h3>Logical OR</h3>');
	await insertLogic({ '||': [true, 3] });

	insertHTML('<h3>Nullish Coalescing</h3>');
	await insertLogic({ '??': [null, 3] });

	insertHTML('<h2>Conditional (Ternary) Operator</h2>');
	await insertLogic({ '?:': [true, 'truthy', 'falsy'] });
	await insertLogic({ '?:': [0, 'truthy', 'falsy'] });

	insertHTML('<h2>Assignment Operators</h2>');
	await insertLogic({ '=': [{ 'blockof': ['x'] }, 'x', 123] }, { x: null });

	insertHTML('<h3>Multiplication Assignment</h3>');
	await insertLogic({ '*=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 2 });

	insertHTML('<h3>Division Assignment</h3>');
	await insertLogic({ '/=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 4 });

	insertHTML('<h3>Remainder Assignment</h3>');
	await insertLogic({ '%=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 3 });

	insertHTML('<h3>Addition Assignment</h3>');
	await insertLogic({ '+=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 1 });

	insertHTML('<h3>Subtraction Assignment</h3>');
	await insertLogic({ '-=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 3 });

	insertHTML('<h3>Left Shift Assignment</h3>');
	await insertLogic({ '<<=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });

	insertHTML('<h3>Right Shift Assignment</h3>');
	await insertLogic({ '>>=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });

	insertHTML('<h3>Unsigned Right Shift Assignment</h3>');
	await insertLogic({ '>>>=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });

	insertHTML('<h3>Bitwise AND Assignment</h3>');
	await insertLogic({ '&=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });

	insertHTML('<h3>Bitwise OR Assignment</h3>');
	await insertLogic({ '|=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });

	insertHTML('<h3>Bitwise XOR Assignment</h3>');
	await insertLogic({ '^=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });

	insertHTML('<h3>Exponentiation Assignment</h3>');
	await insertLogic({ '**=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 2 });

	insertHTML('<h3>Logical AND Assignment</h3>');
	await insertLogic({ '&&=': [{ 'blockof': ['x'] }, 'x', false] }, { 'x': true });

	insertHTML('<h3>Logical OR Assignment</h3>');
	await insertLogic({ '||=': [{ 'blockof': ['x'] }, 'x', false] }, { 'x': true });

	insertHTML('<h3>Nullish Coalescing Assignment</h3>');
	await insertLogic({ '??=': [{ 'blockof': ['x'] }, 'x', 123] }, { 'x': null });
	await insertLogic({ '??=': [{ 'blockof': ['x'] }, 'x', 123] }, { 'x': 'abc' });

	insertHTML('<h2>Comma Operator</h2>');
	await insertLogic({ ',': [null, true, 123, 'test'] });

	insertHTML('<h2>Try</h2>');
	await insertLogic({ 'try': [123, { 'var': ['error'] }] });
	await insertLogic({ 'try': [123, { 'var': ['error'] }, 'finally'] });
	await insertLogic({ 'try': [{ '=': [null, null, 123] }, { '.': [{ 'var': ['error'] }, 'message'] }] });
	await insertLogic({ 'try': [{ '=': [null, null, 123] }, { '.': [{ 'var': ['error'] }, 'message'] }, 'finally'] });

	insertHTML('<h2>Vars Operator</h2>');
	await insertLogic({ 'blockof': ['project'] }, { 'project': 'ProjectName' });
	await insertLogic({ 'block': [{ ',': [{ 'let': ['a', true] }, { 'let': ['b', false] }, { 'blockof': ['a'] }] }] }, { 'project': 'ProjectName' });
	await insertLogic({ 'var': ['project'] }, { 'project': 'ProjectName' });

	insertHTML('<h2>Utilities Operator</h2>');
	await insertLogic({ 'decodeURI()': ['https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'] });
	await insertLogic({ 'decodeURIComponent()': ['https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'] });
	await insertLogic({ 'encodeURI()': ['https://example.com/path?query=value'] });
	await insertLogic({ 'encodeURIComponent()': ['https://example.com/path?query=value'] });
	await insertLogic({ 'isFinite()': [123] });
	await insertLogic({ 'isFinite()': [Infinity] });
	await insertLogic({ 'isNaN()': [NaN] });
	await insertLogic({ 'isNaN()': [123] });
	await insertLogic({ 'parseFloat()': ['3.14'] });
	await insertLogic({ 'parseInt()': ['42'] });

	// insertHTML('<h2>Intl</h2>');
	// insertHTML('<p><strong>TODO.</strong></p>');

	// insertHTML('<h2>JSON</h2>');
	// insertHTML('<h3>isRawJSON</h3>');
	// await insertLogic({ 'JSON.isRawJSON()': [{ 'JSON.rawJSON()': [12345] }] });
	// await insertLogic({ 'JSON.isRawJSON()': ['12345'] });
	// insertHTML('<h3>parse</h3>');
	// await insertLogic({ 'JSON.parse()': ['{ "x": "abc" }'] });
	// insertHTML('<h3>rawJSON</h3>');
	// await insertLogic({ 'JSON.rawJSON()': ['12345'] });
	// insertHTML('<h3>stringify</h3>');
	// await insertLogic({ 'JSON.stringify()': [{ 'x': 'abc' }] });

	// insertHTML('<h2>Math</h2>');
	// insertHTML('<p><strong>TODO.</strong></p>');

	insertHTML('<h2>String</h2>');
	await insertLogic({ 'String()': [12345] });
	await insertLogic({ 'String.fromCharCode()': [65, 66, 67] });
	await insertLogic({ 'String.fromCodePoint()': [128512, 128513, 128514] });
	await insertLogic({ 'String:length': ['Hello'] });
	await insertLogic({ 'String:charAt()': ['Hello', 1] });
	await insertLogic({ 'String:includes()': ['Hello, world!', 'world'] });
	await insertLogic({ 'String:toUpperCase()': ['Hello, world!'] });
}

insertLogics();
