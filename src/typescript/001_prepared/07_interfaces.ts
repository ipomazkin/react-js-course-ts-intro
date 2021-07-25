export const m = 1;

// simple interface
interface IListable {
  items: string[];
  add: (v: string) => void;
  get: (i: number) => string | undefined;
}

// class implements some interface
class List implements IListable {
  items: string[] = [];

  add(value: string) {
    this.items.push(value);
  }

  get(key: number) {
    return this.items[key];
  }
}
let classInstanceList = new List();

// plain object implements some interface
let plainList: IListable = {
  items: [],
  add(v: string) {
    this.items.push(v);
  },
  get(key: number) {
    return this.items[key];
  }
};

// function uses interface as an argument
function printList(list: IListable) {
  list.items.forEach(item => {
    console.log('-----------------', item);
  });
}
printList(classInstanceList);
printList(plainList);

// extending interfaces
interface IFruit {
  type: string;
  weight: number;
}

interface IColorable {
  color: 'red' | 'green' | 'yellow';
}

interface IApple extends IFruit, IColorable {
  price: number;
}

let appleInst: IApple = {
  type: 'apple',
  price: 10,
  color: 'red',
  weight: 100,
};

// interfaces for functions' arguments describing
interface IPrintOptions {
  color?: 'red' | 'green' | 'yellow';
  fontSize?: number;
}

function print(message: string, options: IPrintOptions) {
  let design = '';
  if (options.color) design += `color: ${options.color}; `;
  if (options.fontSize) design += `font-size: ${options.fontSize}; `;
  console.log(`%c ${message}`, design)
}
