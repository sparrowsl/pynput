import { stdin, stdout as output } from "node:process";
import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {Object} [options={}] - The options for parsing input: { int: true } or { float: true }
 * @returns {Promise<String|Number>}
 */
export async function input(prompt = "") {
	const rl = readline.createInterface({ input: stdin, output });

	const result = await rl.question(prompt);
	rl.close();

	const parsed_int = parseInt(result, 10)
	const parsed_float = parseFloat(result)

	if (options.int) {
		if (isNaN(parsed_int)) {
			throw new Error("input is not a valid integer");
		}
		return parsed_int;
	}

	if (options.float) {
		if (isNaN(parsed_float)) {
			throw new Error("input is not a valid float");
		}
		return parsed_float;
	}


	return result;
}
