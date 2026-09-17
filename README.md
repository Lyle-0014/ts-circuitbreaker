# Circuit breaker

This deterministic state machine isolates transient network faults by transitioning strictly between closed, open, and half-open states, utilizing an injected clock to guarantee reproducible audit trails across the ledger.

The TypeScript Circuitbreaker relies exclusively on the standard library, preventing unvetted dependencies from introducing non-deterministic behavior that could violate our exactly-once compliance boundaries.

```
circuit.ts
```
Execute the test suite adjacent to the implementation to observe concrete state transitions and verify idempotency under simulated faults.