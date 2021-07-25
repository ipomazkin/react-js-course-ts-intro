export function makeArrayOfStrings(v: string): string[] {
  return [v, v, v];
}

export function makeArrayOfNumbers(v: number): number[] {
  return [v, v, v];
}

export function makeArrayOfStringsOrNumbers(v: number | string): (number | string)[] {
  return [v, v, v];
}

export function makeArray<T>(v: T): T[] {
  return [v, v, v];
}

let result = makeArray<string>('123');


/***************************************************************************
 *
 ***************************************************************************/
interface IStorage<I = string> {
  readonly items: {[key: string]: I};
  get(key: string): I | undefined;
  set(key: string, value: I): void;
  remove(key: string): void;
}

class Storage<TI = string> implements IStorage<TI> {
  items: {[key: string]: TI} = {};

  get(key: string): TI | undefined {
    return this.items[key];
  }

  set(key: string, value: TI): void {
    this.items[key] = value;
  }

  remove(key: string): void {
    delete this.items[key];
  }
}

let stringsStorage = new Storage<string>();
stringsStorage.set('test1', 'test');
stringsStorage.set('test2', 'test');
let numbersStorage = new Storage<number>();
numbersStorage.set('test1', 1);
numbersStorage.set('test2', 3);
let productsStorage = new Storage<{name: string}>();
productsStorage.set('iphone', {
  name: '123',
});

(window as any).tests = {
  stringsStorage,
  numbersStorage,
  productsStorage,
};
