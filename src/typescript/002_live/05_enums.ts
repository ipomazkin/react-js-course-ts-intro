export enum Categories {
  Foo = 'foo',
  Bar = 'bar',
  Baz = 'baz',
}

let product: {
  category: Categories;
  name: string;
} = {
  name: 'Product',
  category: Categories.Foo,
};

(window as any).Categories = Categories;
