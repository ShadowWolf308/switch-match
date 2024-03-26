import { match } from "../lib";

function get(id: string): HTMLElement {
	const element = document.getElementById(id);

	if (!element) {
		throw new Error(`No element found with id: ${id}`);
	}

	return element;
}

get('test').addEventListener('click', () => {
	const value = match('foo', [
		{
			case: 'foo',
			onMatch: () => 'bar',
		},
		{
			case: 'baz',
			onMatch: () => 'qux',
		},
	]);
	
	get('output').innerHTML = value ?? 'undefined';
});