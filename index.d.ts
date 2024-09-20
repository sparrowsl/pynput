/**
 * Takes a user input from terminal and returns a string
 * Or returns NaN is the conversion is not valid
 * @param {string} [prompt=]
 * @param {{convert: "int" | "float"}} [options=] - Converts the input to int or float
 * @returns {Promise<string | number>}
 */
export function input(
	prompt?: string,
	options?: {
		convert: "int" | "float";
	},
): Promise<string | number>;
