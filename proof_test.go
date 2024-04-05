package proof

import "testing"

// Test that it actually creates a new Proof.
func TestCreateProof(t *testing.T) {
	p := NewProof()

	if p.Errs == nil {
		t.Errorf("Errors is nil, proof not created!")
	}
}

func TestInt(t *testing.T) {
	p := NewProof()

	p.Int(5, "age")

	if p.IsValid() == false {
		t.Errorf("Validation failed :)")
	}
}
