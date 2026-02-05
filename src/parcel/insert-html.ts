import jsJsonLogic from '../lib/index.js';

export function insertHTML(...htmlStrings: any[]): void {
	document.body.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}

export async function insertLogic(rule: any, data?: Record<string, any>): Promise<void> {
	insertHTML(
		'<div class="logic">',
		'<pre><code>jsJsonLogic(',
		JSON.stringify(rule, null, 2) ?? 'undefined',
		', ',
		JSON.stringify(data, null, 2) ?? 'undefined',
		');</code></pre>',
		'<pre><code>',
		JSON.stringify(await jsJsonLogic(rule, data), null, 2) ?? 'undefined',
		'</code></pre>',
		'<pre><code>',
		JSON.stringify(data, null, 2) ?? 'undefined',
		'</code></pre>',
		'</div>'
	);
}
