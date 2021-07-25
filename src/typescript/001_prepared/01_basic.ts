export const m = 1;

/***************************************************************************
 * Variables typing
 ***************************************************************************/
// JS types
let userName: string = 'John';
let userSurname = 'Doe';
let someBool: boolean = false;
let someNumber: number = 123;
let someNull: null = null;
let someUndefined: undefined = undefined;
let someClassInstance: Date = new Date();

// TS types
let someUnknown: unknown = 123;
let someAny: any = 123;

// arrays
let stringsArr: string[] = ['some', 'test', 'foo', 'bar'];
let numbersArr: number[] = [1, 2, 3];

// classes and objects
class Thing {}
let thing: Thing = new Thing();

let dictionary = {
  foo: 'test',
  bar: 123,
};

let typedDictionary: {
  foo: string,
  bar: number,
} = {
  foo: '123',
  bar: 123
};

let typedDictWithKeyAndVal: {
  [key: string]: number,
} = {
  test: 1,
  test2: 2,
};

let typedCombinedDict: {
  foo: string,
  bar: number,
  [key: string]: any,
} = {
  foo: '123',
  bar: 123,
  hello: 123,
};

// array of objects
let someArrOfObjects: {test: number}[] = [
  {test: 134},
  // {test: '123'}
];

// functions
let someFunction: (firstName: string, lastName: string) => string;
someFunction = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};

// different types
let multiTypeVar: string | number = '123';
multiTypeVar = 123;

// different types in arrays
let multiTypeArray: (string | number)[] = [123, '123'];

