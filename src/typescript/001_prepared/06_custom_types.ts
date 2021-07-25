export const m = 1;

// basic
type Some = {};
let someVar: Some = {};

type Name = string;
let nameVar: Name = 'John';

type Coordinates = {
  x: number;
  y: number;
};

// optional type members
type SomeData = {
  key: string;
  value?: number;
};
let dataVal: SomeData = {
  key: '123',
};

// joining types
type Fruit = {
  name: string;
  weight: number;
}

type Apple = Fruit & {
  color: 'red' | 'green' | 'yellow';
};

let apple: Apple = {
  name: 'some',
  weight: 100,
  color: 'green',
};

// getting the type of object
let redApple: typeof apple = {
  name: 'some',
  weight: 120,
  color: 'red',
};
