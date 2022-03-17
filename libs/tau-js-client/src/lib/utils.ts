export function parseDate(date: string): Date {
  return new Date(date);
}

export function isBrowser() {
  return typeof window !== 'undefined';
}
