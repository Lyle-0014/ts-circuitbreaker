/** Minimal closed/open/half-open circuit breaker. Clock injected; zero deps. */
export class CircuitBreaker {
  private threshold: number;
  private cooldown: number;
  private now: () => number;
  private failures = 0;
  private openedAt = 0;
  private state: "closed" | "open" | "half-open" = "closed";
  constructor(threshold: number, cooldown: number, now: () => number) {
    this.threshold = threshold; this.cooldown = cooldown; this.now = now;
  }
  allow(): boolean {
    if (this.state === "open" && this.now() - this.openedAt >= this.cooldown) this.state = "half-open";
    return this.state !== "open";
  }
  record(ok: boolean): void {
    if (ok) { this.failures = 0; this.state = "closed"; }
    else if (++this.failures >= this.threshold) { this.state = "open"; this.openedAt = this.now(); }
  }
}
