import jsJsonLogic, { operators } from '../lib/js-json-logic.js';

import '../lib/js-json-logic-utilities.js';

import '../lib/js-json-logic-intl.js';
import '../lib/js-json-logic-json.js';
import '../lib/js-json-logic-math.js';

import '../lib/js-json-logic-array.js';
import '../lib/js-json-logic-arraybuffer.js';
import '../lib/js-json-logic-boolean.js';
import '../lib/js-json-logic-date.js';
import '../lib/js-json-logic-number.js';
import '../lib/js-json-logic-map.js';
import '../lib/js-json-logic-object.js';
import '../lib/js-json-logic-regexp.js';
import '../lib/js-json-logic-set.js';
import '../lib/js-json-logic-string.js';
import '../lib/js-json-logic-uint8array.js'
import '../lib/js-json-logic-url.js';

function insertHTML(...htmlStrings: any[]): void {
	document.body.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}

function insertLogic(rule: any, data?: Record<string, any>): void {
	insertHTML(
		'<div class="logic">',
		'<pre><code>jsJsonLogic(',
		JSON.stringify(rule, null, 2) ?? 'undefined',
		', ',
		JSON.stringify(data, null, 2) ?? 'undefined',
		');</code></pre>',
		'<pre><code>',
		JSON.stringify(jsJsonLogic(rule, data), null, 2) ?? 'undefined',
		'</code></pre>',
		'</div>'
	);
}

insertHTML('<h1>JS JSON Logic</h1>');
insertHTML(`<pre><code>${JSON.stringify(Object.keys(operators), null, 2)}</code></pre>`);

insertHTML('<h2>Primary Expressions</h2>');
insertHTML('<h3>Undefined Literal</h3>');
insertLogic({ 'undefined': [] });
insertLogic({ 'typeof': [{ 'undefined': [] }] });

insertHTML('<h2>Left Hand Side Expressions</h2>');
insertHTML('<h3>Property Accessors</h3>');
insertLogic({ '.': [{ 'project': { 'name': 'ProjectName' } }, 'project'] });
insertLogic({ '.': [{ 'project': { 'name': 'ProjectName' } }, 'project', 'name'] });
insertHTML('<h3>Optional Chaining</h3>');
insertLogic({ '?.': [{ 'project': { 'name': 'ProjectName' } }, 'project'] });
insertLogic({ '?.': [{ 'project': { 'name': 'ProjectName' } }, 'random', 'random'] });

insertHTML('<h2>Unary Operators</h2>');
insertHTML('<h3>delete</h3>');
insertLogic({ 'delete': [{ 'var': ['project'] }, 'name'] }, { 'project': { 'name': 'ProjectName' } });
insertHTML('<h3>void</h3>');
insertLogic({ 'void': [true, 123, 'string'] });
insertHTML('<h3>typeof</h3>');
insertLogic({ 'typeof': [true] });
insertHTML('<h3>Bitwise NOT</h3>');
insertLogic({ '~': [5] });
insertHTML('<h3>Logical NOT</h3>');
insertLogic({ '!': [false] });

insertHTML('<h2>Arithmetic Operators</h2>');
insertHTML('<h3>Exponentiation</h3>');
insertLogic({ '**': [3, 2] });
insertHTML('<h3>Multiplication</h3>');
insertLogic({ '*': [3, 2] });
insertHTML('<h3>Division</h3>');
insertLogic({ '/': [4, 2] });
insertHTML('<h3>Remainder</h3>');
insertLogic({ '%': [3, 2] });
insertHTML('<h3>Addition / Unary Plus</h3>');
insertLogic({ '+': [3, 2] });
insertLogic({ '+': ['3'] });
insertHTML('<h3>Subtraction / Unary Negation</h3>');
insertLogic({ '-': [3, 2] });
insertLogic({ '-': ['3'] });

insertHTML('<h2>Relational Operators</h2>');
insertHTML('<h3>Less Than</h3>');
insertLogic({ '<': [3, 2] });
insertLogic({ '<': [1, 2, 3] });
insertHTML('<h3>Greater Than</h3>');
insertLogic({ '>': [3, 2] });
insertLogic({ '>': [1, 2, 3] });
insertHTML('<h3>Less Than Or Equal</h3>');
insertLogic({ '<=': [1, 2] });
insertLogic({ '<=': [3, 3] });
insertLogic({ '<=': [2, 1] });
insertHTML('<h3>Greater Than Or Equal</h3>');
insertLogic({ '>=': [3, 3] });
insertHTML('<h3>Instance Of</h3>');
insertLogic({ 'instanceof': [{ 'String()': ['test'] }, { 'String': [] }] });
insertHTML('<h3>In</h3>');
insertLogic({ 'in': ['project', { 'project': 'ProjectName' }] });

insertHTML('<h2>Equality Operators</h2>');
insertHTML('<h3>Equality</h3>');
insertLogic({ '==': [1, '1'] });
insertHTML('<h3>Inequality</h3>');
insertLogic({ '!=': [1, '1'] });
insertHTML('<h3>Strict Equality</h3>');
insertLogic({ '===': [1, '1'] });
insertHTML('<h3>Strict Inequality</h3>');
insertLogic({ '!==': [1, '1'] });

insertHTML('<h2>Bitwise Shift Operators</h2>');
insertHTML('<h3>Left Shift</h3>');
insertLogic({ '<<': [5, 2] });
insertHTML('<h3>Right Shift</h3>');
insertLogic({ '>>': [5, 2] });
insertHTML('<h3>Unsigned Right Shift</h3>');
insertLogic({ '>>>': [5, 2] });

insertHTML('<h2>Binary Bitwise Operators</h2>');
insertHTML('<h3>Bitwise AND</h3>');
insertLogic({ '&': [5, 3] });
insertHTML('<h3>Bitwise OR</h3>');
insertLogic({ '|': [5, 3] });
insertHTML('<h3>Bitwise XOR</h3>');
insertLogic({ '^': [5, 3] });

insertHTML('<h2>Binary Logical Operators</h2>');
insertHTML('<h3>Logical AND</h3>');
insertLogic({ '&&': [true, 3] });
insertHTML('<h3>Logical OR</h3>');
insertLogic({ '||': [true, 3] });
insertHTML('<h3>Nullish Coalescing</h3>');
insertLogic({ '??': [null, 3] });

insertHTML('<h2>Conditional (Ternary) Operator</h2>');
insertLogic({ '?:': [true, 'truthy', 'falsy'] });
insertLogic({ '?:': [0, 'truthy', 'falsy'] });

insertHTML('<h2>Assignment Operators</h2>');
insertLogic({ '=': [{ 'blockof': ['x'] }, 'x', 123] }, { x: null });
insertHTML('<h3>Multiplication Assignment</h3>');
insertLogic({ '*=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 2 });
insertHTML('<h3>Division Assignment</h3>');
insertLogic({ '/=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 4 });
insertHTML('<h3>Remainder Assignment</h3>');
insertLogic({ '%=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 3 });
insertHTML('<h3>Addition Assignment</h3>');
insertLogic({ '+=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 1 });
insertHTML('<h3>Subtraction Assignment</h3>');
insertLogic({ '-=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 3 });
insertHTML('<h3>Left Shift Assignment</h3>');
insertLogic({ '<<=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });
insertHTML('<h3>Right Shift Assignment</h3>');
insertLogic({ '>>=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });
insertHTML('<h3>Unsigned Right Shift Assignment</h3>');
insertLogic({ '>>>=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 5 });
insertHTML('<h3>Bitwise AND Assignment</h3>');
insertLogic({ '&=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });
insertHTML('<h3>Bitwise OR Assignment</h3>');
insertLogic({ '|=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });
insertHTML('<h3>Bitwise XOR Assignment</h3>');
insertLogic({ '^=': [{ 'blockof': ['x'] }, 'x', 3] }, { 'x': 5 });
insertHTML('<h3>Exponentiation Assignment</h3>');
insertLogic({ '**=': [{ 'blockof': ['x'] }, 'x', 2] }, { 'x': 2 });
insertHTML('<h3>Logical AND Assignment</h3>');
insertLogic({ '&&=': [{ 'blockof': ['x'] }, 'x', false] }, { 'x': true });
insertHTML('<h3>Logical OR Assignment</h3>');
insertLogic({ '||=': [{ 'blockof': ['x'] }, 'x', false] }, { 'x': true });
insertHTML('<h3>Nullish Coalescing Assignment</h3>');
insertLogic({ '??=': [{ 'blockof': ['x'] }, 'x', 123] }, { 'x': null });
insertLogic({ '??=': [{ 'blockof': ['x'] }, 'x', 123] }, { 'x': 'abc' });

insertHTML('<h2>Comma Operator</h2>');
insertLogic({ ',': [null, true, 123, 'test'] });

insertHTML('<h2>Try</h2>');
insertLogic({ 'try': [123, { 'var': ['error'] }] });
insertLogic({ 'try': [123, { 'var': ['error'] }, 'finally'] });
insertLogic({ 'try': [{ '=': [null, null, 123] }, { '.': [{ 'var': ['error'] }, 'message'] }] });
insertLogic({ 'try': [{ '=': [null, null, 123] }, { '.': [{ 'var': ['error'] }, 'message'] }, 'finally'] });

insertHTML('<h2>Vars Operator</h2>');
insertHTML('<p><strong>TODO.</strong></p>');

insertHTML('<h2>Intl</h2>');
insertHTML('<p><strong>TODO.</strong></p>');

insertHTML('<h2>JSON</h2>');
insertHTML('<h3>isRawJSON</h3>');
insertLogic({ 'JSON.isRawJSON()': [{ 'JSON.rawJSON()': [12345] }] });
insertLogic({ 'JSON.isRawJSON()': ['12345'] });
insertHTML('<h3>parse</h3>');
insertLogic({ 'JSON.parse()': ['{ "x": "abc" }'] });
insertHTML('<h3>rawJSON</h3>');
insertLogic({ 'JSON.rawJSON()': ['12345'] });
insertHTML('<h3>stringify</h3>');
insertLogic({ 'JSON.stringify()': [{ 'x': 'abc' }] });

insertHTML('<h2>Math</h2>');
insertHTML('<p><strong>TODO.</strong></p>');
