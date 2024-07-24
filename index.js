import { stdin, stdout as output } from "node:process";
import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {Object} [options={}] - The options for parsing input: { int: true } or { float: true }
 * @returns {Promise<String|Number>}
 */
export async function input(prompt = "", options = {}) {
	const rl = readline.createInterface({ input: stdin, output });

	const result = await rl.question(prompt);
	rl.close();

	if (options.int) {
        const parsed_int = parseInt(result, 10)
		if (isNaN(parsed_int)) {
			throw new Error("input is not a valid integer");
		}
		return parsed_int;
	}

	if (options.float) {
        const parsed_float = parseFloat(result)
		if (isNaN(parsed_float)) {
			throw new Error("input is not a valid float");
		}
		return parsed_float;
	}


	return result;
}
