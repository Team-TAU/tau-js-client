import { OperatorFunction } from 'rxjs';
import { scan } from 'rxjs/operators';

/**
 * Convert the most recent number of messages to an array.
 * @param count The max number of elements in the resulting array.
 * @returns The operator function.
 */
export function mostRecent<T>(count = 10): OperatorFunction<T, T[]> {
  return scan((all, current) => {
    const temp = [...all, current];
    while (temp.length >= count) {
      temp.shift();
    }
    return temp;
  }, [] as T[]);
}
