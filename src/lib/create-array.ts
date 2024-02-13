export function createArray(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, k) => k + start)
}
