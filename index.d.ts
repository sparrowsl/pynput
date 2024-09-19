/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {{convert?: "int" | "float"}} [options=] - The options for parsing input or float.
 * Possible properties:
 *   - "int" - parses the input as an integer.
 *   - "float" - parses the input as a float.
 * @returns {Promise<String|Number>}
 */
export function input(
	prompt?: string,
	options?: {
		convert?: "int" | "float";
	},
): Promise<string | number>;
