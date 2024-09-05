import { stdin, stdout as output } from "node:process";
import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {{int?: boolean, float?: boolean}} [options=] - The options for parsing input.
 * Possible properties:
 *   - { boolean } int: When true, parses the input as an integer.
 *   - { boolean } float: When true, parses the input as a float.
 *  If both are true, int takes precedence
 * @returns {Promise<String|Number>}
 */
export async function input(
	prompt = "",
	options = { int: false, float: false },
) {
	const rl = readline.createInterface({ input: stdin, output });

	const result = await rl.question(prompt);
	rl.close();

	if (options.int && !Number.isNaN(result)) {
		return Number.parseInt(result);
	}

	if (options.float && !Number.isNaN(result)) {
		return Number.parseFloat(result);
	}

	return result;
}
