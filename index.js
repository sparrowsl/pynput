import readline from "node:readline/promises";

/**
 * Takes a user input from terminal and returns a string
 * Or returns NaN is the conversion is not valid
 * @param {string} [prompt=]
 * @param {{convert: "int" | "float"}} [options=] - Converts the input to int or float
 * @returns {Promise<string | number>}
 */
export async function input(prompt, options = { convert: "int" | "float" }) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const result = await rl.question(prompt);
	rl.close();

	switch (options.convert) {
		case "int":
			return Number.parseInt(result);
		case "float":
			return Number.parseFloat(result);
		default:
			return result;
	}
}
