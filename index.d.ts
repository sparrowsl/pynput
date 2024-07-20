/**
 * Takes a user input from terminal and returns a string
 * @param {string} [prompt=]
 * @param {Object} [options={}] - The options for parsing input. Possible properties:
 *   - { boolean } int: When true, parses the input as an integer.
 *   - { boolean } float: When true, parses the input as a float.
 * @returns {Promise<String|Number>}
 */
export function input(prompt?: string, options?: { int?: boolean, float?: boolean }): Promise<string | number>;
