export const m = 1;

function someFoo(arg1: string, arg2: number): string {
  return 'hello';
}

function someFoo2(arg1: string, arg2: number): string {
  return arg1 + arg2.toString();
}

function someFoo3(arg1: string, arg2: number): string {
  return arg1;
}

const someFunc = function (arg1: string, arg2: number): string {
  return arg1;
};

// never
function makeError(message: string): never {
  throw new Error(message);
  // will newer make return
  // return 123;
}

function foo({ test, test2 }: { test: string, test2: number }) {

}

// functions as a methods of objects
let someObj = {
  test: 1,
  foo(a: number): number {
    return this.test * a;
  }
};
