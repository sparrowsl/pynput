import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {{convert?: "int" | "float"}} [options=] - The options for parsing to input or float.
 * Available options:
 *   - "int" - parses the input as an integer.
 *   - "float" - parses the input as a float.
 * @returns {Promise<string | number>}
 */
export async function input(prompt, options = { convert: undefined }) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const result = await rl.question(prompt);
	rl.close();

	switch (options.convert) {
		case "int":
			const int = Number.parseInt(result);

			if (Number.isNaN(int)) {
				throw new Error("Invalid value, cannot convert to int")
			}

			return int
		case "float":
			const float = Number.parseFloat(result);

			if (Number.isNaN(float)) {
				throw new Error("Invalid value, cannot convert to float")
			}

			return float
		default:
			return result;
	}
}
