# Circuit breaker

A minimal closed/open/half-open circuit breaker — clock injected, no deps.

TypeScript Circuitbreaker uses only the typescript standard library; there is no service or dependency to install.

```
circuit.ts
```
Run the TypeScript Circuitbreaker test next to the implementation for concrete examples.

## Questions people ask

**Is there an SDK I should install first?**  
No. `circuit.test.ts` reaches the call over plain HTTP, which is why the whole setup is `npx tsx` plus one environment variable. For a circuitbreaker example that is the entire dependency story.
