export const m = 1;

// simple functions
function square(base: number, step: number): number {
  let result = base;
  for (let i = 0; i < step; i++) {
    result *= base;
  }
  return result;
}

// return void
function foo(a: string, b: number): void {
  // return nothing
}

// anonymous functions
let someFoo = function (a: boolean, b: number): void {
  // return nothing
};

// never
function makeError(message: string): never {
  throw new Error(message);
  // will newer make return
  // return 123;
}

// destructuring params annotations
const someHandler: (someObj: { name: string, value: number }) => void = function (someObj) {
  console.log('-----------------', someObj.name);
  console.log('-----------------', someObj.value);
};

const someHandler2 = function ({ name, value }: { name: string, value: number }) {
  console.log('-----------------', name);
  console.log('-----------------', value);
};

// functions as a methods of objects
let someObj = {
  test: 1,
  foo(a: number): number {
    return this.test * a;
  }
};
