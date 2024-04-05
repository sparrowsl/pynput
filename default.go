package proof

// Sets a default int|float to the pointer.
func DefaultNumber[T int | float64](n *T, val T) {
	if n == nil {
		*n = val
	}
}

// Sets a default string to the pointer.
func DefaultString(n *string, val string) {
	if n == nil {
		*n = val
	}
}
