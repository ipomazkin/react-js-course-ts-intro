export const t = 1;

let someString2 = 'hello';

let someString: string = 'Hello';
let someNumber: number = 234;
let siomeBool: boolean = false;
let someDate: Date = new Date();

let someWTF: unknown = '123';
let someSting = someWTF as string;

let someAny: any = '123';
someAny.slice(0, 1);

let someJSON = JSON.stringify({
  test: 1,
  foo: 2,
});

let someData = JSON.parse(someJSON);

let someArr: string[] = [];
someArr.push('123');

let someObj: {
  name: string;
  weight: number;
  flag: boolean;
  color: {
    name: string;
    value: string;
  };
  categories: string[];
} = {
  name: 'Apple',
  weight: 200,
  flag: true,
  color: {
    name: 'red',
    value: '#eee',
  },
  categories: ['test'],
};

class SomeThing {
  constructor() {

  }
}
let someThingInst = new SomeThing();

let someKeyedObj: {
  [key: string]: string | number;
} = {
  test: '123',
  hello: '123',
  test2: 123,
};

let someArrayOfObjects: {
  type: string;
  name: string;
}[][] = [
  [
    {type: '123', name: 'John'},
    {type: '123', name: 'John'},
    {type: '123', name: 'John'},
  ]
];

let arrayUnionType: (string | number | boolean | string[] | number[])[] = [];

let someFunc: (arg1: string) => string;
