# pynput
Simple, small, easy and zero dependency input function similar to the one in Python.


## Motivation
I wanted a simple way to accept user input from terminal, especially one closer to python or a library without too much dependencies.
`and also learn how to build a library I could use when needed.`


## Installation

Install `pynput` with npm

```bash
npm i pynput
```


## Usage/Examples

```js
import { input } from "pynput"

const name = await input("What is your name? ") // joe

console.log(name) // -> joe
```

## Contributing

Contributions and pull requests are always welcome!


## Acknowledgements
Inspired by Python's input built-in function.


## License

[MIT](./LICENSE)

