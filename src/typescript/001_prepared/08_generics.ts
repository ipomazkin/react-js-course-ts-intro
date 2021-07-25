export const m = 1;

// in functions
function makeArray<T>(value: T): T[] {
  return [value, value, value];
}

let numbers = makeArray(1);
let strings = makeArray('some');

// in interfaces and classes
interface IList<T> {
  items: T[];
  add: (v: T) => void;
  get: (i: number) => T | undefined;
}

class ListClass<T> implements IList<T> {
  items: T[] = [];

  add(value: T) {
    this.items.push(value);
  }

  get(key: number) {
    return this.items[key];
  }
}

let stringsList = new ListClass<string>();
stringsList.add('1');
stringsList.add('2');
stringsList.add('3');
let numbersList = new ListClass<number>();
numbersList.add(1);
numbersList.add(2);

function printListFn(list: IList<any>) {
  list.items.forEach(item => {
    console.log('-----------------', item);
  });
}

printListFn(stringsList);
printListFn(numbersList);
