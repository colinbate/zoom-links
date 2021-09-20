import { writable, readable, Writable, Readable } from 'svelte/store';
import { get, set } from 'idb-keyval';

export function durableWritable<T>(key: string, defaultValue: T) {
  const wstore = writable<T>(defaultValue, setter => {
    get<T>(key).then(result => {
      if (result != null) {
        setter(result);
      }
    });
  });
  wstore.subscribe(value => {
    set(key, value);
  });
  return wstore;
}

export function durablePair<T>(key: string, defaultValue: T): [Readable<T>, Writable<T>] {
  const dw = durableWritable<T>(key, defaultValue);
  const read = readable<T>(defaultValue, dw.subscribe);
  return [read, dw];
}
