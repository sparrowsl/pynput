package proof

import "fmt"

type Proof struct {
	Errs map[string]any
}

func NewProof() Proof {
	return Proof{
		Errs: make(map[string]any),
	}
}

func (p Proof) IsValid() bool {
	return len(p.Errs) == 0
}

func (p Proof) Int(val int, field string) {
	p.check(val >= 0, field, fmt.Sprintf("%v is not a valid positive int", val))
}

func (p Proof) check(condition bool, field string, customMsg string) {
	if !condition {
		p.addError(field, customMsg)
	}
}

func (p *Proof) addError(field string, message string) {
	_, exists := p.Errs[field]

	if !exists {
		p.Errs[field] = message
	}
}
