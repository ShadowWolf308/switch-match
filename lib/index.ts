import { MatchCase, MatchDefaultCase } from "./types";

/**
 * Match a value against a list of given cases.  
 * These cases are defined as an array of objects with a case and a result.  
 * If no case is matched, a default case can be provided.  
 * If no default case is provided, then the function will return undefined.  
 * The result of a case can be a value or a promise of said value.
 * 
 * @example
 * // returns string
 * const value = match(testValue, [
 * 	{
 * 		case: 'foo',
 * 		result: () => 'bar',
 * 	},
 * 	{
 * 		case: 'baz',
 * 		result: () => 'qux',
 * 	},
 * ], () => 'default');
 * 
 * @example
 * // returns a Promise<string>
 * const value = match(testValue, [
 * 	{
 * 		case: 'foo',
 * 		result: async () => 'bar',
 * 	},
 * 	{
 * 		case: 'baz',
 * 		result: async () => 'qux',
 * 	},
 * ], async () => 'default');
 * 
 * @example
 * // returns a string | undefined
 * const value = match(testValue, [
 * 	{
 * 		case: 'foo',
 * 		result: () => 'bar',
 * 	},
 * 	{
 * 		case: 'baz',
 * 		result: () => 'qux',
 * 	},
 * ]);
 * 
 * @param value Value to match against cases
 * @param cases cases to match value against
 * @param defaultCase Default case if no cases match
 * @returns Matched case result, or default case result, or undefined
 */
function match<V, T, D = undefined>(
	value: V,
	cases: MatchCase<V, T>[],
	defaultCase?: MatchDefaultCase<V, D>,
): D extends undefined ? T | undefined : T | D {
	const matchedCase = cases.find((c) => c.case === value);

	if (matchedCase) {
		return matchedCase.onMatch(value) as any;
	}

	if (defaultCase) {
		return defaultCase(value) as any;
	}

	return undefined as any;
}

export { match };
export default {
	match,
};