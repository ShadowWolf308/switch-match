/**
 * The default case function
 * 
 * @param value The given value that failed to match any cases
 * @returns A value or a Promise of said value
 */
export type MatchDefaultCase<V, D> = (value: V) => D;

/**
 * A single case to match against
 */
export interface MatchCase<V, T> {
	/**
	 * Value to match against
	 */
	case: V;
	/**
	 * The result function of a case
	 * 
	 * @param value The given value that is being matched (case)
	 * @returns A value or a Promise of said value
	 */
	onMatch: (value: V) => T;
};