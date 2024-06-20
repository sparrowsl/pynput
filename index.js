import { stdin as input, stdout as output } from "process"
import readline from "readline/promises"

/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=] 
 * @returns {Promise<String>}
 */
export default async (prompt = "") => {
	const rl = readline.createInterface({ input, output })

	const result = await rl.question(prompt)
	rl.close()
	return result
}

