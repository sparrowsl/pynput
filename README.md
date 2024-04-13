# proof
Simple, small and easy to use validation library


## Motivation
I wanted a simple, small and easy to use validation library like [govalidator](https://github.com/rezakhademix/govalidator/) and also learn how to build a library I could possibly use in my projects.
> also serves as a reminder that I can build one.


## Installation

Install `proof` with go

```bash
go get github.com/sparrowsl/proof
```


## Usage/Examples

```go
import "github.com/sparrowsl/proof"

func main() {
  p := proof.NewProof()

  age := 10
  // Checks is a value is an int
  p.Int(age,"age")

  p.IsValid() // prints if validations are valid or not

  fmt.Println(p.Errs) // prints out all errors 
}
```

## Contributing

Contributions and pull requests are always welcome!

Please make sure to update tests as appropriate.


## Acknowledgements
some of the validation libraries I am inspired by.

 - [govalidator](https://github.com/rezakhademix/govalidator)
 - [valgo](https://github.com/cohesivestack/valgo) 
 - [Boot.dev community](https://boot.dev) - for the inspiration/courage


## License

[MIT](https://choosealicense.com/licenses/mit/)

