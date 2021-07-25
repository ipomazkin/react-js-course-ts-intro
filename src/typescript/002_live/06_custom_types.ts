class ColorClass {

}

class SizeClass {

}

class ProductClass {
  color?: ColorClass;
  size?: SizeClass;

  constructor(
    color: ColorClass,
    size: SizeClass,
  ) {
    this.color = color;
    this.size = size;
  }
}

let productInst = new ProductClass(new ColorClass(), new SizeClass());


type Color = {
  color: string;
}

type Size = {
  size: "big" | "small" | "normal";
}

export type Product = {
  title: string;
  id: number;
  price?: number;
  categories: number[];
} & Color & Size;

type Products = Product[];

let product: Product = {
  title: 'Test',
  id: 123,
  price: 1233,
  categories: [],
  color: '123',
  size: 'big',
};

let product2: typeof product;

let data: {
  results: Product[];
  prev?: string;
  next?: string;
};

type ServerID = number;

function getData(i: ServerID) {

}

interface IColor {
  color: string;
}

interface ISize {
  size: "big" | "small" | "normal";
}

interface IProduct extends IColor, ISize {
  title: string;
  id: number;
  price?: number;
  categories: number[];
}

