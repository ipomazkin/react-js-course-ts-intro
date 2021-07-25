export interface IPrinter {
  name: string;
  print(data: string): string;
  copy(data: string): [string, string];
}

class OfficePrinter implements IPrinter {
  name: string = 'officePrinter';

  print(data: string) {
    return `${this.name}: ${data}`;
  }

  copy(data: string): [string, string] {
    return [`${this.name}: ${data}`, `${this.name}: ${data}`];
  }
}

class HomePrinter implements IPrinter {
  name: string = 'homePrinter';

  print(data: string) {
    return `${this.name}: ${data}`;
  }

  copy(data: string): [string, string] {
    return [`${this.name}: ${data}`, `${this.name}: ${data}`];
  }

  send() {}
}

class OldPrinter implements IPrinter {
  name: string = 'oldPrinter';

  print(data: string) {
    return `sfsdf sdfsdfsdfsd ${this.name}: ${data}`;
  }

  copy(data: string): [string, string] {
    return [`xsdfgs dfgdf${this.name}: ${data}`, `sfgsfgdf dfg dfg${this.name}: ${data}`];
  }

  send() {}
}


let officePrinter = new OfficePrinter();
let homePrinter = new HomePrinter();
let oldPrinter = new OldPrinter();
let prototypePrinter: IPrinter = {
  name: '12121',
  print: (v) => v,
  copy: (v) => [v, v],
};

function print(data: string, printer: IPrinter) {
  console.log(printer.print(data));
}

(window as any).tests = {
  officePrinter,
  homePrinter,
  oldPrinter,
  prototypePrinter,
  print,
};

interface IDoSomethingOptions {

}

function doSomething(options: IDoSomethingOptions) {

}
